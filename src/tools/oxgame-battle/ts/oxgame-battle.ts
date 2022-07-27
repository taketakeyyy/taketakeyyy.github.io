import '../scss/oxgame-battle.scss';
import '../scss/footer.scss';
import '../scss/fox-scenario.scss';
import '../scss/glider-scenario.scss';
import '../scss/modal.scss';
import '../scss/achievement.scss';
import '../scss/baloon.scss';
// const oxgame = import("../../../../node_modules/@taketakeyyy/oxgame/oxgame");
// import {make_initialized_grid} from "../../../../node_modules/@taketakeyyy/oxgame/oxgame.js";
import * as oxgame from "../../../../node_modules/@taketakeyyy/oxgame/oxgame";
import { foxface_transform, init_fox_scenario } from "./fox-scenario";
import { is_glider, glider_scenario_end, init_glider_scenario } from "./glider-scenario";
import { show_achivement } from './achievement';
import { all_delete_cookie } from './cookie';

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
    put_icon(MASU_PLAYER, target);

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
        // 最後に、AIは卑怯な手を使う
        const is_ok = await do_sneaky_action();
        if (is_ok) {
            const text_elem = <HTMLParagraphElement>document.getElementById("id_game-text")!;
            text_elem.innerHTML = "あなたの負けです🤘<span id=\"foxface\" class=\"foxface-transform\">😜</span>🤘";
            foxface_transform();
        }
        else {
            const text_elem = <HTMLParagraphElement>document.getElementById("id_game-text")!;
            text_elem.textContent = "引き分けです😐";
        }
    }
    else {
        // AIの行動
        await start_ai_turn();
    }
};

/** 全てのマスが空っぽかどうかを返す */
const is_all_empty = async (): Promise<boolean> => {
    for(let h=0; h<3; h++) {
        for(let w=0; w<3; w++) {
            if (g_grid[h][w].masu != MASU_EMPTY) { return false; }
        }
    }
    return true;
}

const start_ai_turn = async () => {
    // どこに置くか決定する
    let node;
    if (await is_all_empty()) {
        const r = Math.floor(Math.random() * 9);
        if (r==0) { node = {h:0, w:0}; }
        else if (r==1) { node = {h:0, w:1}; }
        else if (r==2) { node = {h:0, w:2}; }
        else if (r==3) { node = {h:1, w:0}; }
        else if (r==4) { node = {h:1, w:1}; }
        else if (r==5) { node = {h:1, w:2}; }
        else if (r==6) { node = {h:2, w:0}; }
        else if (r==7) { node = {h:2, w:1}; }
        else if (r==8) { node = {h:2, w:2}; }
    }
    else {
        node = oxgame.run_ai_strategy(g_grid, TURN_AI);
    }

    // マスを埋める
    g_grid[node.h][node.w].masu = MASU_AI;

    // アイコン表示
    const ai_idx: number = node.h*3 + node.w;
    const target: HTMLDivElement = <HTMLDivElement>document.getElementById("id_square"+ai_idx)!;
    put_icon(MASU_AI, target);

    // 勝敗判定
    const judge_result = await judge(g_grid);
    if (judge_result == JUDGE_RESULT_PLAYER_WIN) {
        const text_elem = <HTMLParagraphElement>document.getElementById("id_game-text")!;
        text_elem.textContent = "あなたの勝ちです😄";
    }
    else if (judge_result == JUDGE_RESULT_AI_WIN) {
        if (await is_glider(g_grid, MASU_AI)) {
            const text_elem = <HTMLParagraphElement>document.getElementById("id_game-text")!;
            text_elem.textContent = "あなたの負けです🛫";
            await glider_scenario_end(g_grid, MASU_AI);
        }
        else {
            const text_elem = <HTMLParagraphElement>document.getElementById("id_game-text")!;
            text_elem.textContent = "あなたの負けです😞";
        }
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

/** マスにアイコンを表示する */
const put_icon = async (who: number, target: HTMLDivElement) => {
    if (who === MASU_PLAYER) {
        const icon = document.createElement("i");
        icon.className = "bi bi-record";
        target.appendChild(icon);
    }
    else {
        const icon = document.createElement("i");
        icon.className = "bi bi-x";
        target.appendChild(icon);
    }
}

/** 卑劣な行為をする */
const do_sneaky_action = async (): Promise<boolean> => {
    let is_ok: boolean = false;
    let target: HTMLDivElement|null = null;
    if (g_grid[0][0].masu===MASU_AI && g_grid[0][1].masu===MASU_AI) {
        target = <HTMLDivElement>document.getElementById("id_square9");
        is_ok = true;
    }
    else if (g_grid[1][0].masu===MASU_AI && g_grid[1][1].masu===MASU_AI) {
        target = <HTMLDivElement>document.getElementById("id_square11");
        is_ok = true;
    }
    else if (g_grid[2][0].masu===MASU_AI && g_grid[2][1].masu===MASU_AI) {
        target = <HTMLDivElement>document.getElementById("id_square13");
        is_ok = true;
    }
    else if (g_grid[0][2].masu===MASU_AI && g_grid[0][1].masu===MASU_AI) {
        target = <HTMLDivElement>document.getElementById("id_square10");
        is_ok = true;
    }
    else if (g_grid[1][2].masu===MASU_AI && g_grid[1][1].masu===MASU_AI) {
        target = <HTMLDivElement>document.getElementById("id_square12");
        is_ok = true;
    }
    else if (g_grid[2][2].masu===MASU_AI && g_grid[2][1].masu===MASU_AI) {
        target = <HTMLDivElement>document.getElementById("id_square14");
        is_ok = true;
    }

    if (is_ok) {
        target!.style.borderWidth = "4px";
        target!.classList.add("fadein");
        put_icon(MASU_AI, target!);
    }
    return is_ok;
}

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

    // square-appendを初期化する
    {
        const targets: HTMLCollectionOf<HTMLDivElement> = <HTMLCollectionOf<HTMLDivElement>>document.getElementsByClassName("oxgame-content__square-append");
        for(let i=0; i<targets.length; i++) {
            // CSSの初期化
            targets[i].style.borderWidth = "0px";
            targets[i].classList.remove("fadein");
            // アイコンの初期化
            while(targets[i].firstChild) {
                targets[i].removeChild(targets[i].firstChild!);
            }
        }
    }
}

const game_start = async () => {
    await initialize_all_state();
    // シナリオ初期化
    await init_fox_scenario();
    await init_glider_scenario();

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
    // all_delete_cookie();
    add_initial_events();
    show_achivement();
}

entry_point();