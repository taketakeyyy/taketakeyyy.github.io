import {deepcopy_ArraySet, deepcopy_ArrayArraySet} from './deepcopy';

// 3x3マスをboxと定義する
// box_idx[h][w] := h行w列のマスがどのboxに所属するか
const box_idx = [[0,0,0,1,1,1,2,2,2],
                 [0,0,0,1,1,1,2,2,2],
                 [0,0,0,1,1,1,2,2,2],
                 [3,3,3,4,4,4,5,5,5],
                 [3,3,3,4,4,4,5,5,5],
                 [3,3,3,4,4,4,5,5,5],
                 [6,6,6,7,7,7,8,8,8],
                 [6,6,6,7,7,7,8,8,8],
                 [6,6,6,7,7,7,8,8,8]];

// box_coords[i] := box[i]に所属するマス[h, w]のリスト
export const box_coords = [[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]],
                           [[0,3],[0,4],[0,5],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]],
                           [[0,6],[0,7],[0,8],[1,6],[1,7],[1,8],[2,6],[2,7],[2,8]],
                           [[3,0],[3,1],[3,2],[4,0],[4,1],[4,2],[5,0],[5,1],[5,2]],
                           [[3,3],[3,4],[3,5],[4,3],[4,4],[4,5],[5,3],[5,4],[5,5]],
                           [[3,6],[3,7],[3,8],[4,6],[4,7],[4,8],[5,6],[5,7],[5,8]],
                           [[6,0],[6,1],[6,2],[7,0],[7,1],[7,2],[8,0],[8,1],[8,2]],
                           [[6,3],[6,4],[6,5],[7,3],[7,4],[7,5],[8,3],[8,4],[8,5]],
                           [[6,6],[6,7],[6,8],[7,6],[7,7],[7,8],[8,6],[8,7],[8,8]]];

// 記入したターン数
let turn = 0;

// 答え
let output_grid = [[0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0]];

/**
 * gridを出力する
 */
const print_grid = async (grid: number[][]) => {
    for(let h=0; h<9; h++) {
        let s: string = "";
        for(let w=0; w<9; w++) {
            s += grid[h][w];
            s += " ";
        }
        console.log(s);
    }
}

/**
 * candidateを出力する
 */
const print_candidate = async (candidate: Array<Array<Set<number>>>) => {
    let s = "---candidate---\n";
    for(let h=0; h<9; h++) {
        s += "[";
        for(let w=0; w<9; w++) {
            s += "[";
            for(let i of candidate[h][w]) {
                s += i + ",";
            }
            s += "], ";
        }
        s += "]\n";
    }
    console.log(s);
};

/**
 * すべてのグリッドが埋まったかどうか
 */
const is_all_filled = async (grid: number[][]): Promise<boolean> => {
    for(let h=0; h<9; h++) {
        for(let w=0; w<9; w++) {
            if (grid[h][w] === 0) {
                return false;
            }
        }
    }
    return true;
}

/**
 * gridに数字を記入する
 */
const fill_out_number = async (num: number, h: number , w: number, grid: number[][], candidate: Array<Array<Set<number>>>, usedH: Array<Set<number>>, usedW: Array<Set<number>>, usedBox: Array<Set<number>>) => {
    turn += 1;
    // console.log("\nfill out " + turn + ": grid["+h+"]"+"["+w+"] = " + num);

    grid[h][w] = num;
    usedH[h].add(num);
    usedW[w].add(num);
    usedBox[box_idx[h][w]].add(num);
    candidate[h][w] = new Set();
    output_grid = grid;

    // 書き込んだことによって影響を受ける候補者を更新する
    for (let nh=0; nh<9; nh++) {
        if (candidate[nh][w].has(num)) {
            candidate[nh][w].delete(num);
        }
    }
    for(let nw=0; nw<9; nw++) {
        if (candidate[h][nw].has(num)) {
            candidate[h][nw].delete(num);
        }
    }
    for(let i=0; i<box_coords[box_idx[h][w]].length; i++) {
        let [nh, nw] = box_coords[box_idx[h][w]][i];
        if (candidate[nh][nw].has(num)) {
            candidate[nh][nw].delete(num);
        }
    }

    // await print_grid(grid);
    // await print_candidate(candidate);
}

/**
 * 入力されたgridが正しいかどうかを返す
 */
const is_valid_input_grid = async (grid: number[][]): Promise<boolean> => {
    // 各数字は0~9までの数字か？
    for(let h=0; h<9; h++) {
        for(let w=0; w<9; w++) {
            if (0<=grid[h][w] && grid[h][w]<=9) continue;
            return false;
        }
    }

    // 各行に同数字がないか？
    for(let h=0; h<9; h++) {
        let sets = new Set();
        for(let w=0; w<9; w++) {
            if (1<=grid[h][w] && grid[h][w]<=9) {
                if (sets.has(grid[h][w])) {
                    return false;
                }
                else {
                    sets.add(grid[h][w]);
                }
            }
        }
    }

    // 各列に同数字がないか？
    for(let w=0; w<9; w++) {
        let sets = new Set();
        for(let h=0; h<9; h++) {
            if (1<=grid[h][w] && grid[h][w]<=9) {
                if (sets.has(grid[h][w])) {
                    return false;
                }
                else {
                    sets.add(grid[h][w]);
                }
            }
        }
    }

    // 各boxに同数字がないか？
    for(let i=0; i<9; i++) {
        let sets = new Set();
        for(let [h, w] of box_coords[i]) {
            if (1<=grid[h][w] && grid[h][w]<=9) {
                if (sets.has(grid[h][w])) {
                    return false;
                }
                else {
                    sets.add(grid[h][w]);
                }
            }
        }
    }

    return true;
};

/**
 * 数独が解けているかどうかを返す
 */
const is_solve_grid = async (grid: number[][]): Promise<boolean> => {
    // 各行に各数字が1回ずつ使われているか？
    for(let h=0; h<9; h++) {
        let sets = new Set();
        for(let w=0; w<9; w++) {
            if (1<=grid[h][w] && grid[h][w]<=9) {
                sets.add(grid[h][w]);
            }
        }
        if (sets.size!=9) {
            return false;
        }
    }

    // 各列に各数字が1回ずつ使われているか？
    for(let w=0; w<9; w++) {
        let sets = new Set();
        for(let h=0; h<9; h++) {
            if (1<=grid[h][w] && grid[h][w]<=9) {
                sets.add(grid[h][w]);
            }
        }
        if (sets.size!=9) {
            return false;
        }
    }

    // 各boxに各数字が1回ずつ使われているか？
    for(let i=0; i<9; i++) {
        let sets = new Set();
        for(let [h, w] of box_coords[i]) {
            if (1<=grid[h][w] && grid[h][w]<=9) {
                sets.add(grid[h][w]);
            }
        }
        if (sets.size!=9) {
            return false;
        }
    }

    return true;
};

/**
 * 候補者が一人なら確定させる
 */
const determine_if_only_one_candidate = async (grid: number[][], candidate: Array<Array<Set<number>>>, usedH: Array<Set<number>>, usedW: Array<Set<number>>, usedBox: Array<Set<number>>): Promise<boolean> => {
    let res: boolean = false;
    // 候補者が1つしかないマスは、それで確定
    for(let h=0; h<9; h++) {
        for(let w=0; w<9; w++) {
            if (candidate[h][w].size===1) {
                res = true;
                let num: number;
                for(let n of candidate[h][w]) { num = n; }
                await fill_out_number(num!, h, w, grid, candidate, usedH, usedW, usedBox);
            }
        }
    }

    // 候補者が複数いるが、その行（列、box）で自分しか持っていない候補者がいるなら、それで確定
    // 各行について自分しか持ってない候補者を探す
    for(let h=0; h<9; h++) {
        for(let w=0; w<9; w++) {
            if (candidate[h][w].size === 0) continue;
            let sets: Set<number> = new Set();
            for(let n of candidate[h][w]) {
                sets.add(n);
            }

            for(let ww=0; ww<9; ww++) {
                if (w===ww) continue;
                for(let n of candidate[h][ww]) {
                    sets.delete(n);
                }
            }

            if (sets.size === 1) {
                res = true;
                let num: number;
                for(let n of sets) { num = n; }
                await fill_out_number(num!, h, w, grid, candidate, usedH, usedW, usedBox);
            }
        }
    }

    // 各列について自分しか持ってない候補者を探す
    for(let w=0; w<9; w++) {
        for(let h=0; h<9; h++) {
            if (candidate[h][w].size === 0) continue;
            let sets: Set<number> = new Set();
            for(let n of candidate[h][w]) {
                sets.add(n);
            }

            for(let hh=0; hh<9; hh++) {
                if (h===hh) continue;
                for(let n of candidate[hh][w]) {
                    sets.delete(n);
                }
            }

            if (sets.size === 1) {
                res = true;
                let num: number;
                for(let n of sets) { num = n; }
                await fill_out_number(num!, h, w, grid, candidate, usedH, usedW, usedBox);
            }
        }
    }

    // 各boxについて自分しか持ってない候補者を探す
    for(let i=0; i<9; i++) {
        for(let [h, w] of box_coords[i]) {
            if (candidate[h][w].size === 0) continue;
            let sets: Set<number> = new Set();
            for(let n of candidate[h][w]) {
                sets.add(n);
            }

            for(let [hh, ww] of box_coords[i]) {
                if (h===hh && w===ww) continue;
                for(let n of candidate[hh][ww]) {
                    sets.delete(n);
                }
            }

            if (sets.size === 1) {
                res = true;
                let num: number;
                for(let n of sets) { num = n; }
                await fill_out_number(num!, h, w, grid, candidate, usedH, usedW, usedBox);
            }
        }
    }

    return res;
};

/**
 * 最も少ない候補者のセルを見つけて返す
 */
const least_candidate_cell = async (candidate: Array<Array<Set<number>>>): Promise<number[]> => {
    let mn = 99999;
    let mn_h: number = -1, mn_w: number = -1;
    for(let h=0; h<9; h++) {
        for(let w=0; w<9; w++) {
            if (candidate[h][w].size>=2 && candidate[h][w].size < mn) {
                mn = candidate[h][w].size;
                mn_h = h;
                mn_w = w;
            }
        }
    }
    return [mn_h, mn_w];
};


/**
 * 仮ぎめして埋めていく
 */
const provisionally_fill = async (grid: number[][], candidate: Array<Array<Set<number>>>, usedH: Array<Set<number>>, usedW: Array<Set<number>>, usedBox: Array<Set<number>>): Promise<boolean> => {
    // 候補が最も少ないセルを探す
    let [h, w]: number[] = await least_candidate_cell(candidate);
    if (h==-1 && w==-1) {
        return false;
    }

    // 候補が最も少ないセルについて、仮ぎめして埋めていく
    for await (let num of candidate[h][w]) {
        let pro_grid: number[][] = JSON.parse(JSON.stringify(grid));
        let pro_candidate: Array<Array<Set<number>>> = deepcopy_ArrayArraySet(candidate);
        let pro_usedH: Array<Set<number>> = deepcopy_ArraySet(usedH);
        let pro_usedW: Array<Set<number>> = deepcopy_ArraySet(usedH);
        let pro_usedBox: Array<Set<number>> = deepcopy_ArraySet(usedBox);
        // uを使って全部埋まらなかったら、さらに残った候補者を仮定して埋めていく
        // 最終的にすべて矛盾なく埋まったら成功。矛盾が発生したら、他の候補を仮ぎめしていく
        await fill_out_number(num, h, w, pro_grid, pro_candidate, pro_usedH, pro_usedW, pro_usedBox);

        while(!await is_all_filled(pro_grid)) {
            // 候補が一つしかないマスがあればそれを確定させる。なければ、falseを返す
            if (await determine_if_only_one_candidate(pro_grid, pro_candidate, pro_usedH, pro_usedW, pro_usedBox)) {
                continue;
            }
            else {
                // 候補が一つしかないものがない。仮定して埋めていくしかない。
                if (await provisionally_fill(pro_grid, pro_candidate, pro_usedH, pro_usedW, pro_usedBox)) {
                    return true;
                }
                break;
            }
        }

        if (await is_all_filled(pro_grid)) {
            // console.log("!!!!!!!!SUCCESS!!!!!!!!!!!");
            // output_grid = pro_grid;
            return true;
        }
    }
    return false;
};

/**
 * 数独ソルバー
 */
export const solver = async (grid: number[][]): Promise<[boolean, number[][]]> => {
    // 入力されたgridが正しいか？
    if (!await is_valid_input_grid(grid)) {
        return [false, grid];
    }

    // 各行の使用済み数字
    let usedH: Array<Set<number>> = new Array(9);
    for(let h=0; h<9; h++) {
        usedH[h] = new Set();
        for(let w=0; w<9; w++) {
            if (grid[h][w] !== 0) {
                usedH[h].add(grid[h][w]);
            }
        }
    }
    // 各列の使用済み数字
    let usedW: Array<Set<number>> = new Array(9);
    for(let w=0; w<9; w++) {
        usedW[w] = new Set();
        for(let h=0; h<9; h++) {
            if (grid[h][w] !== 0) {
                usedW[w].add(grid[h][w]);
            }
        }
    }
    // 各boxの使用済み数字
    let usedBox: Array<Set<number>> = new Array(9);
    for(let i=0; i<9; i++) { usedBox[i] = new Set(); }
    for(let h=0; h<9; h++) {
        for(let w=0; w<9; w++) {
            if (grid[h][w] !== 0) {
                usedBox[box_idx[h][w]].add(grid[h][w]);
            }
        }
    }

    // 各マスの候補者の設定
    let candidate: Array<Array<Set<number>>> = new Array(9);
    for(let h=0; h<9; h++) {
        candidate[h] = new Array(9);
        for(let w=0; w<9; w++) {
            candidate[h][w] = new Set();
            for(let i=1; i<=9; i++) {
                if (grid[h][w]===0 && !usedH[h].has(i) && !usedW[w].has(i) && !usedBox[box_idx[h][w]].has(i)) {
                    candidate[h][w].add(i);
                }
            }
        }
    }

    // await print_grid(grid);
    // await print_candidate(candidate);

    // すべて埋まるまでループ
    while(!await is_all_filled(grid)) {
        // 候補が一つしかないマスがあればそれを確定させる。なければ、falseを返す
        if (await determine_if_only_one_candidate(grid, candidate, usedH, usedW, usedBox)) {
            continue;
        }
        else {
            // 候補が一つしかないものがない。仮定して埋めていくしかない。
            await provisionally_fill(grid, candidate, usedH, usedW, usedBox);
            break;
        }
    }

    const is_solve = await is_solve_grid(output_grid);

    return [is_solve, output_grid];
};