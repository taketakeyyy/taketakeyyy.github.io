/**
 * inputの入力ボックスを、入力と同じくらいの幅にする
 */
const text_metrics = (input: HTMLInputElement) => {
    const span = document.getElementById(input.id + "_textMetrics");
    if (span == null) return;

    span.textContent = input.value;
    input.style.width = `${span.clientWidth}px`;
}

export const text_metrics_event = (e: Event) => {
    const input = <HTMLInputElement>e.target;
    text_metrics(input);
}

export const text_metrics_id = (id: string) => {
    const input = <HTMLInputElement>document.getElementById(id);
    text_metrics(input);
}

/**
 * textareaの入力ボックスを、入力と同じくらいの幅にする
 */
 const textarea_metrics = (textarea: HTMLTextAreaElement) => {
    const div = document.getElementById(textarea.id + "_textareaMetrics");
    if (div == null) return;

    // div.textContent = textarea.value;
    div.textContent = textarea.value + '\u200b';
}

export const textarea_metrics_id = (id: string) => {
    const textarea = <HTMLTextAreaElement>document.getElementById(id);
    textarea_metrics(textarea);
}

export const textarea_metrics_event = (e: Event) => {
    const textarea = <HTMLTextAreaElement>e.target;
    textarea_metrics(textarea);
}