import '../scss/sudoku-solver.scss';
import '../scss/arrow.scss';
import '../scss/footer.scss';
import { solver } from "./solver";
import { box_coords } from "./solver";
import { grid_empty } from './testgrid/grid_empty';
import { grid_sample1, grid_sample2}  from './testgrid/grid_sample';
import { grid_kyo_q1, grid_kyo_q100 } from './testgrid/grid_kyo';
import { grid_inkala_2010, grid_inkala_2012 } from "./testgrid/grid_inkala";
import { grid_wata2013_0, grid_wata2013_03_12, grid_wata2013_03_13, grid_wata2013_03_22 } from "./testgrid/grid_watanabe";
import { grid_gary } from './testgrid/grid_gary';

/**
 * 入力用の数独gridに数字を入れる
 */
const fill_out_number_to_input_grid = async (grid: number[][]) => {
    for(let h=0; h<9; h++) {
        for(let w=0; w<9; w++) {
            const i: number = h*9 + w;
            const elem: HTMLInputElement = <HTMLInputElement>document.getElementById("id_input"+i)!;
            if (grid[h][w]!==0) {
                elem.value = grid[h][w].toString();
            }
            else {
                elem.value = "";
            }
        }
    }
};

/**
 * 出力用の数独gridに数字を入れる
 */
const fill_out_number_to_output_grid = async (grid: number[][]) => {
    for(let h=0; h<9; h++) {
        for(let w=0; w<9; w++) {
            const i: number = h*9 + w;
            const elem: HTMLInputElement = <HTMLInputElement>document.getElementById("id_output"+i)!;
            if (grid[h][w]!==0) {
                elem.value = grid[h][w].toString();
            }
            else {
                elem.value = "";
            }
        }
    }
};

/**
 * 入力用の数独gridからgridを作成する
 */
const make_grid_from_input_grid = async (): Promise<number[][]> => {
    let grid: number[][] = new Array(9);
    for(let h=0; h<9; h++) grid[h] = new Array(9);

    for(let i=0; i<81; i++) {
        const elem: HTMLInputElement = <HTMLInputElement>document.getElementById("id_input"+i)!;
        const h: number = Math.floor(i/9);
        const w: number = i%9;
        grid[h][w] = Number(elem.value);
    }
    return grid;
};

/**
 * 「解く」ボタンのクリックイベント
 */
const click_event_btn_solve = async () => {
    // ボタンを使用不可にする
    await update_output_note("🤔計算中です...");
    const btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("id_btn-solve")!;
    const origin_opacity = btn.style.opacity;
    btn.style.opacity = "0.5";
    btn.disabled = true;

    // 出力用のgridの色をデフォルトに戻す
    await initialize_output_grid();

    // 入力用数独gridからgrid配列を作り、solverに解かせる
    const grid = await make_grid_from_input_grid()
    const [is_solve, output_grid] = await solver(grid);
    await fill_out_number_to_output_grid(output_grid);
    if (is_solve) {
        await update_output_note("😄数独が解けました");
    }
    else {
        await update_output_note("😢この数独は解けません");
        await where_is_bad_in_output_grid(output_grid);
    }

    // ボタンを使用可能にする
    btn.style.opacity = origin_opacity;
    btn.disabled = false;
}

/**
 * 「解く」ボタンのクリックイベント付与
 */
const add_click_event_btn_solve = async () => {
    const elem = document.getElementById("id_btn-solve")!;
    elem.addEventListener("click", click_event_btn_solve);
};

/**
 * 問題選択のchangeイベント
 */
const change_event_select_problem = async() => {
    const elem: HTMLSelectElement = <HTMLSelectElement>document.getElementById("id_template-input")!;
    switch (elem.value) {
        case "empty":
            await fill_out_number_to_input_grid(grid_empty);
            break;
        case "sample1":
            await fill_out_number_to_input_grid(grid_sample1);
            break;
        case "sample2":
            await fill_out_number_to_input_grid(grid_sample2);
            break;
        case "kyo_q1":
            await fill_out_number_to_input_grid(grid_kyo_q1);
            break;
        case "kyo_q100":
            await fill_out_number_to_input_grid(grid_kyo_q100);
            break;
        case "inkala_2010":
            await fill_out_number_to_input_grid(grid_inkala_2010);
            break;
        case "inkala_2012":
            await fill_out_number_to_input_grid(grid_inkala_2012);
            break;
        case "wata2013_0":
            await fill_out_number_to_input_grid(grid_wata2013_0);
            break;
        case "wata2013_03_12":
            await fill_out_number_to_input_grid(grid_wata2013_03_12);
            break;
        case "wata2013_03_13":
            await fill_out_number_to_input_grid(grid_wata2013_03_13);
            break;
        case "wata2013_03_22":
            await fill_out_number_to_input_grid(grid_wata2013_03_22);
            break;
        case "gary_2012":
            await fill_out_number_to_input_grid(grid_gary);
            break;
    }
};

/**
 * 問題選択のchangeイベント付与
 */
const add_change_event_select_problem = async() => {
    const elem: HTMLSelectElement = <HTMLSelectElement>document.getElementById("id_template-input")!;
    elem.addEventListener("change", change_event_select_problem);
};

/**
 * 入力用の数独gridのテキスト表示
 */
const update_input_note = async (text: string) => {
    const elem: HTMLDivElement = <HTMLDivElement>document.getElementById("id_input-note")!;
    elem.textContent = text;
}

/**
 * 出力用の数独gridのテキスト表示
 */
const update_output_note = async (text: string) => {
    const elem: HTMLDivElement = <HTMLDivElement>document.getElementById("id_output-note")!;
    elem.textContent = text;

    // テキスト反映させるため、一瞬待つ
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve("");
        }, 10);
    });
}

/**
 * 出力用の数独gridの色をデフォルトに戻す
 */
const initialize_output_grid = async () => {
    for(let i=0; i<81; i++) {
        const elem: HTMLInputElement = <HTMLInputElement>document.getElementById("id_output"+i)!;
        elem.style.backgroundColor = "";
    }
}

/**
 * 数独が解けなかったとき、どこが悪いのかを表示
 */
const where_is_bad_in_output_grid = async (grid: number[][]) => {
    /* 悪いところを色を塗る */
    const paint = (h: number, w: number) => {
        const i = h*9 + w;
        const elem: HTMLInputElement = <HTMLInputElement>document.getElementById("id_output"+i)!;
        elem.style.backgroundColor = "#f39b90";
    };

    // gridの値が[0, 9]の範囲内かのチェック
    for(let h=0; h<9; h++) {
        for(let w=0; w<9; w++) {
            if (0<=grid[h][w] && grid[h][w]<=9) continue;
            paint(h, w);
        }
    }

    // 各行に、同数字があるかのチェック
    for(let h=0; h<9; h++) {
        for(let w=0; w<9; w++) {
            if (1<=grid[h][w] && grid[h][w]<=9) {
                for(let ww=w+1; ww<9; ww++) {
                    if (grid[h][w]===grid[h][ww]) {
                        paint(h, w);
                        paint(h, ww);
                    }
                }
            }
        }
    }

    // 各列に、同数字があるかのチェック
    for(let w=0; w<9; w++) {
        for(let h=0; h<9; h++) {
            if (1<=grid[h][w] && grid[h][w]<=9) {
                for(let hh=h+1; hh<9; hh++) {
                    if (grid[h][w]===grid[hh][w]) {
                        paint(h, w);
                        paint(hh, w);
                    }
                }
            }
        }
    }

    // 各boxに、同数字があるかのチェック
    for(let i=0; i<9; i++) {
        for(let [h, w] of box_coords[i]) {
            for(let [hh, ww] of box_coords[i]) {
                if (h===hh && w===ww) continue;
                if (1<=grid[h][w] && grid[h][w]<=9) {
                    if (grid[h][w]===grid[hh][ww]) {
                        paint(h, w);
                    }
                }
            }
        }
    }
}

const entry_point = async () => {
    // サンプルを解く
    // const grid = JSON.parse(JSON.stringify(grid10000));
    await change_event_select_problem();
    const grid = await make_grid_from_input_grid();
    await fill_out_number_to_input_grid(grid);
    await click_event_btn_solve();

    // クリックイベント付与
    await add_click_event_btn_solve();
    await add_change_event_select_problem();
}

entry_point();