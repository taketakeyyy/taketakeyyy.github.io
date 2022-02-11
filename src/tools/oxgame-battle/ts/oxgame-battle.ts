import '../scss/oxgame-battle.scss';
import '../scss/footer.scss';
// const oxgame = import("../../../../node_modules/@taketakeyyy/oxgame/oxgame");
// import {make_initialized_grid} from "../../../../node_modules/@taketakeyyy/oxgame/oxgame.js";
import * as oxgame from "../../../../node_modules/@taketakeyyy/oxgame/oxgame";

const JUDGE_RESULT_PLAYER_WIN = 0;
const JUDGE_RESULT_AI_WIN = 1;
const JUDGE_RESULT_DRAW = 2;
const JUDGE_RESULT_CONTINUE = -1;

const MASU_PLAYER = 0;
const MASU_AI = 1;
const MASU_EMPTY = -1;

const TURN_PLAYER = 0;
const TURN_AI = 1;

let g_grid: Array<Array<oxgame.Masu>>;

const judge = async (grid: Array<Array<oxgame.Masu>>): Promise<number> => {
    // 各行を調べる
    for (let h=0; h<3; h++) {
        if (grid[h][0].masu==grid[h][1].masu && grid[h][1].masu==grid[h][2].masu) {
            if (grid[h][0].masu == MASU_PLAYER) return JUDGE_RESULT_PLAYER_WIN;
            if (grid[h][0].masu == MASU_AI) return JUDGE_RESULT_AI_WIN;
        }
    }

    // 各列を調べる
    for (let w=0; w<3; w++) {
        if (grid[0][w].masu==grid[1][w].masu && grid[1][w].masu==grid[2][w].masu) {
            if (grid[0][w].masu == MASU_PLAYER) return JUDGE_RESULT_PLAYER_WIN;
            if (grid[0][w].masu == MASU_AI) return JUDGE_RESULT_AI_WIN;
        }
    }

    // 斜めを調べる
    if (grid[0][0].masu==grid[1][1].masu && grid[1][1].masu==grid[2][2].masu) {
        if (grid[0][0].masu == MASU_PLAYER) return JUDGE_RESULT_PLAYER_WIN;
        if (grid[0][0].masu == MASU_AI) return JUDGE_RESULT_AI_WIN;
    }
    if (grid[0][2].masu==grid[1][1].masu && grid[1][1].masu==grid[2][0].masu) {
        if (grid[0][2].masu == MASU_PLAYER) return JUDGE_RESULT_PLAYER_WIN;
        if (grid[0][2].masu == MASU_AI) return JUDGE_RESULT_AI_WIN;
    }

    // すべて埋まっているか？
    let is_filled: boolean = true;
    for (let w=0; w<3; w++) {
        for (let h=0; h<3; h++) {
            if (grid[h][w].masu == MASU_EMPTY) { is_filled = false; }
        }
    }
    if (is_filled) {
        return JUDGE_RESULT_DRAW;
    }

    return JUDGE_RESULT_CONTINUE;
};

const click_event_square = async (e: Event) => {
    // 他のクリックイベントを削除する
    for(let i=0; i<9; i++) {
        let square = document.getElementById("id_square"+i)!;
        square.removeEventListener("click", click_event_square);
        square.style.cursor = "default";
    }

    // マスを埋める
    const target: HTMLDivElement = <HTMLDivElement>e.target;
    const idx: number = Number(target.id.substring(target.id.length-1, target.id.length));
    const h = Math.floor(idx/3);
    const w = idx%3;
    g_grid[h][w].masu = MASU_PLAYER;

    // アイコン表示
    const icon = document.createElement("i");
    icon.className = "bi bi-record";
    target.appendChild(icon);

    // 勝敗判定
    const judge_result = await judge(g_grid);
    if (judge_result == JUDGE_RESULT_PLAYER_WIN) {
        const text_elem = <HTMLParagraphElement>document.getElementById("id_game-text")!;
        text_elem.textContent = "あなたの勝ちです😄";
    }
    else if (judge_result == JUDGE_RESULT_AI_WIN) {
        const text_elem = <HTMLParagraphElement>document.getElementById("id_game-text")!;
        text_elem.textContent = "あなたの負けです😞";
    }
    else if (judge_result == JUDGE_RESULT_DRAW) {
        const text_elem = <HTMLParagraphElement>document.getElementById("id_game-text")!;
        text_elem.textContent = "引き分けです😐";
    }
    else {
        // AIの行動
        await start_ai_turn();
    }
};

const start_ai_turn = async () => {
    // どこに置くか決定する
    const node = oxgame.run_ai_strategy(g_grid, TURN_AI);

    // マスを埋める
    g_grid[node.h][node.w].masu = MASU_AI;

    // アイコン表示
    const ai_idx: number = node.h*3 + node.w;
    const target: HTMLDivElement = <HTMLDivElement>document.getElementById("id_square"+ai_idx)!;
    const icon = document.createElement("i");
    icon.className = "bi bi-x";
    target.appendChild(icon);

    // 勝敗判定
    const judge_result = await judge(g_grid);
    if (judge_result == JUDGE_RESULT_PLAYER_WIN) {
        const text_elem = <HTMLParagraphElement>document.getElementById("id_game-text")!;
        text_elem.textContent = "あなたの勝ちです😄";
    }
    else if (judge_result == JUDGE_RESULT_AI_WIN) {
        const text_elem = <HTMLParagraphElement>document.getElementById("id_game-text")!;
        text_elem.textContent = "あなたの負けです😞";
    }
    else if (judge_result == JUDGE_RESULT_DRAW) {
        const text_elem = <HTMLParagraphElement>document.getElementById("id_game-text")!;
        text_elem.textContent = "引き分けです😐";
    }
    else {
        // プレイヤーの行動
        await start_player_turn();
    }
};

const start_player_turn = async () => {
    // クリックイベントを追加する
    for (let h=0; h<3; h++) {
        for (let w=0; w<3; w++) {
            if (g_grid[h][w].masu == MASU_EMPTY) {
                const i = h*3+w;
                const square = document.getElementById("id_square"+i)!;
                square.addEventListener("click", click_event_square);
                square.style.cursor = "pointer";
            }
        }
    }
};

const initialize_all_state = async () => {
    // g_gridを初期化する
    g_grid = oxgame.make_initialized_grid();

    // マスの状態を初期状態に戻す
    for (let i=0; i<9; i++) {
        const square = document.getElementById("id_square"+i)!;
        // アイコンの初期化
        while(square.firstChild) {
            square.removeChild(square.firstChild);
        }
        // カーソルの状態の初期化
        square.style.cursor = "default";
        // クリックイベントの初期化
        square.removeEventListener("click", click_event_square);
    }

    // textを初期化する
    {
        const text_elem = document.getElementById("id_game-text")!;
        text_elem.textContent = "";
    }
}

const game_start = async () => {
    await initialize_all_state();

    // ゲームを開始する
    const radio_first_attack = <HTMLInputElement>document.getElementById("id_radio-first-attack")!;
    if (radio_first_attack.checked) {
        await start_player_turn();
    }
    else {
        await start_ai_turn();
    }
};

const add_initial_events = async () => {
    const btn_start = document.getElementById("id_btn-start")!;
    btn_start.addEventListener("click", game_start);
};

const entry_point = async () => {
    add_initial_events();
}

entry_point();