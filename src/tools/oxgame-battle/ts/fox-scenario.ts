import { open_modal_window, close_modal_window, init_modal_window } from "./modal-window";
import { wait_time } from "./utils";
import { save_achievement } from "./cookie";
import { ACHIEVEMENT, show_achivement } from "./achievement";

let g_fox_beat_count = 0;
const FOX_BEAT_COUNT_MAX = 30;

export const foxface_transform = () => {
    const elem = document.getElementById("foxface");
    elem?.addEventListener("animationend", () => {
        foxface_fadeout(elem);
    });
    elem?.addEventListener('webkitAnimationEnd', () => {
        foxface_fadeout(elem);
    })
}

const foxface_fadeout = (elem: HTMLSpanElement) => {
    elem.classList.add("foxface-fadeout");
    elem?.addEventListener("animationend", () => {
        foxface_fadein(elem);
    });
    elem?.addEventListener('webkitAnimationEnd', () => {
        foxface_fadein(elem);
    })
}

const foxface_fadein = (elem: HTMLSpanElement) => {
    elem.textContent = "🦊";
    elem.classList.add("foxface-fadein");
    elem.addEventListener("click", beat_fox);
}

/** 🦊beatシナリオ初期化 */
export const init_fox_scenario = async () => {
    g_fox_beat_count = 0;
};

/** 殴る */
const beat_fox = () => {
    const fox = document.getElementById("foxface")!;
    if (g_fox_beat_count < FOX_BEAT_COUNT_MAX) {
        g_fox_beat_count++;
        shake_fox(g_fox_beat_count);
    }
    if (g_fox_beat_count === FOX_BEAT_COUNT_MAX) {
        foxface_drop(fox);
    }
};

/** 震える */
const shake_fox = (count: number) => {
    const fox = document.getElementById("foxface")!;
    const val = Math.max(0.1, count/5);
    // アニメーション
    fox.style.display = "inline-block";
    fox.animate(
        [
            {
                offset: 0.00,
                transform: 'translate(0, 0)'
            },
            {
                offset: 0.05,
                transform: 'translate(-'+val+'px, -'+val+'px)'
            },
            {
                offset: 0.10,
                transform: 'translate('+val+'px, '+val+'px)'
            },
            {
                offset: 0.15,
                transform: 'translate(-'+val+'px, -'+val+'px)'
            },
            {
                offset: 0.20,
                transform: 'translate('+val+'px, '+val+'px)'
            },
            {
                offset: 0.25,
                transform: 'translate(-'+val+'px, -'+val+'px)'
            },
            {
                offset: 0.30,
                transform: 'translate(0, 0)'
            },
            {
                offset: 1.00,
                transform: 'translate(0, 0)'
            }
        ],
        {
            duration: 500,
            // iterations: Infinity
        }
    );
}

/** 落ちる */
const foxface_drop = (elem: HTMLSpanElement) => {
    elem?.classList.add("foxface-drop");
    elem?.addEventListener("animationend", () => {
        fox_felled_end();
    });
    elem?.addEventListener('webkitAnimationEnd', () => {
        fox_felled_end();
    });
}

/** FOX FELLED エンド */
const fox_felled_end = async () => {
    await open_modal_window("CHEATY FOX FELLED");
    await wait_time(5000);
    await close_modal_window();
    await wait_time(3000);
    await init_modal_window();
    await save_achievement(ACHIEVEMENT.FOX_FELLED);
    await show_achivement();
}