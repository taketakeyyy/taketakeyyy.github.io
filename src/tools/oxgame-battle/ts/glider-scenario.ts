import { open_modal_window, close_modal_window, init_modal_window } from "./modal-window";
import { wait_time } from "./utils";
import { ACHIEVEMENT, show_achivement } from "./achievement";
import { save_achievement } from "./cookie";
import * as oxgame from "@taketakeyyy/oxgame";


const GRID_TO_ID_SQUARE = [["id_square0", "id_square1", "id_square2"], ["id_square3", "id_square4", "id_square5"], ["id_square6", "id_square7", "id_square8"]];

/** グライダー判定 */
export const is_glider = async (grid: oxgame.Masu[][], masu_value: number): Promise<boolean> => {
    let is_ok = false;
    is_ok ||= (grid[0][0].masu===masu_value && grid[0][1].masu===masu_value && grid[0][2].masu===masu_value && grid[1][0].masu===masu_value && grid[2][1].masu===masu_value);
    is_ok ||= (grid[0][1].masu===masu_value && grid[0][2].masu===masu_value && grid[1][0].masu===masu_value && grid[1][2].masu===masu_value && grid[2][2].masu===masu_value);
    is_ok ||= (grid[0][1].masu===masu_value && grid[1][2].masu===masu_value && grid[2][0].masu===masu_value && grid[2][1].masu===masu_value && grid[2][2].masu===masu_value);
    is_ok ||= (grid[0][0].masu===masu_value && grid[1][0].masu===masu_value && grid[1][2].masu===masu_value && grid[2][0].masu===masu_value && grid[2][1].masu===masu_value);
    return is_ok;
}

/** 🛫シナリオ エンド */
export const glider_scenario_end = async (grid: oxgame.Masu[][], masu_value: number) => {
    ending_step1(grid, masu_value)
}

const ending_step1 = async (grid: oxgame.Masu[][], masu_value: number) => {
    console.log(grid)
    let square = null;
    for(let h=0; h<3; h++) {
        for(let w=0; w<3; w++) {
            if (grid[h][w].masu === masu_value) {
                square = document.getElementById(GRID_TO_ID_SQUARE[h][w]);
                square?.classList.add("fill-black");
            }
        }
    }
    square?.addEventListener("animationend", () => {
        ending_step2();
    });
    square?.addEventListener('webkitAnimationEnd', () => {
        ending_step2();
    });
}

const ending_step2 = async () => {
    await open_modal_window("RICHARD's GLIDER FLIED");
    await wait_time(5000);
    await close_modal_window();
    await wait_time(3000);
    await init_modal_window();
    await save_achievement(ACHIEVEMENT.GLIDER_FLIED);
    await show_achivement();
}

/** 🛫シナリオ初期化 */
export const init_glider_scenario = async () => {
    for(let h=0; h<3; h++) {
        for(let w=0; w<3; w++) {
            const square = document.getElementById(GRID_TO_ID_SQUARE[h][w]);
            square?.classList.remove("fill-black");
        }
    }
};