/** モーダルウィンドウ開く */
export const open_modal_window = async (text: string) => {
    const div_txt = document.getElementById("id-modal-text")!;
    div_txt.innerText = text;

    const div = document.getElementById("modal-window")!;
    div.classList.add("modal-open");
    div.style.display = "block";
}

/** モーダルウィンドウ閉じる */
export const close_modal_window = async () => {
    const div = document.getElementById("modal-window")!;
    div.classList.add("modal-close");
}

/** モーダルウィンドウ初期化 */
export const init_modal_window = async () => {
    const div_txt = document.getElementById("id-modal-text")!;
    div_txt.innerText = "";

    const div = document.getElementById("modal-window")!;
    div.style.display = "none";
    div.classList.remove("modal-open");
    div.classList.remove("modal-close");
}