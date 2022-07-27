import { get_all_achievements } from "./cookie";

const ACHIEVEMENT_NUM = 2;  // 実績の個数
export enum ACHIEVEMENT {
    FOX_FELLED = "ACHIEVEMENT_FOX_FELLED",
    GLIDER_FLIED = "ACHIEVEMENT_GLIDER_FLIED",
}

/** ACHIVEMENTを表示する */
export const show_achivement = async () => {
    const achievements = await get_all_achievements();
    if (achievements.length === 0) { return; }

    // achievement div表示
    const div_ach_con = document.getElementById("id-achievement-container")!;
    div_ach_con.style.display = "block";

    // achievement バッジ表示
    const div_ach = document.getElementById("id-achievement-content")!;
    const make_badge_description = () => {
        if (document.getElementById("id-badge-description") != null) { return; }
        const badge = document.createElement("div");
        badge.id = "id-badge-description";
        badge.classList.add("badge-description");
        badge.classList.add("baloon-target");
        const badge_icon = document.createElement("div");
        badge_icon.classList.add("material-symbols-outlined");
        badge_icon.innerText = "military_tech";
        badge.appendChild(badge_icon);
        const baloon = document.createElement("div");
        baloon.classList.add("baloon");
        baloon.innerText = "Achieved " + String(achievements.length) + " of " + String(ACHIEVEMENT_NUM);
        badge.appendChild(baloon);
        div_ach.appendChild(badge);
    }; make_badge_description();

    // 取得したバッジ表示
    achievements.sort();
    console.log(achievements);
    for(let i=0; i<achievements.length; i++) {
        const badge = document.createElement("div");
        if (achievements[i] === ACHIEVEMENT.FOX_FELLED) {
            if (document.getElementById("id-badge-fox") != null) { continue; }
            badge.innerText = "🦊";
            badge.classList.add("badge-fox");
            badge.id = "id-badge-fox";
            badge.classList.add("baloon-target");
            const baloon = document.createElement("div");
            baloon.classList.add("baloon");
            baloon.innerText = "FOX ACHIEVEMENT";
            badge.appendChild(baloon);
        }
        if (achievements[i] === ACHIEVEMENT.GLIDER_FLIED) {
            if (document.getElementById("id-badge-glider") != null) { continue; }
            badge.innerText = "🛩";  // 🛫
            badge.classList.add("badge-glider");
            badge.id = "id-badge-glider";
            badge.classList.add("baloon-target");
            const baloon = document.createElement("div");
            baloon.classList.add("baloon");
            baloon.innerText = "GLIDER ACHIEVEMENT";
            badge.appendChild(baloon);
        }
        div_ach.appendChild(badge);
    }
}