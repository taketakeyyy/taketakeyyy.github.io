import '../scss/text-metrics.scss';
import {text_metrics_event, text_metrics_id, textarea_metrics_event, textarea_metrics_id} from "./text-metrics";
import {input_ids, textarea_ids, aa_font_ids, radio_aa_font_ids} from "./ids";
import {TemplateInput, template1, template2, template3, template4} from "./template";

interface Params {
    [key: string]: string
}

const generate_url = () => {
    let params: Params = {};
    input_ids.forEach(id => {
        const elem = <HTMLInputElement>document.getElementById(id)!;
        params[id.substring(3)] = encodeURIComponent(elem.value);
    });

    textarea_ids.forEach(id => {
        const elem = <HTMLTextAreaElement>document.getElementById(id)!;
        params[id.substring(3)] = encodeURIComponent(elem.value);
    });

    // AAフォント
    radio_aa_font_ids.forEach(id => {
        const elem = <HTMLInputElement>document.getElementById(id)!;
        if (!elem.checked) return;

        switch (elem.id) {
            case "id-radio_use_monospace":
                params["q21"] = encodeURIComponent("0");
                break;
            case "id-radio_use_none":
                params["q21"] = encodeURIComponent("1");
                break;
        }
    });

    const urlSearchParam =  new URLSearchParams(params).toString();
    // q1=%E3%81%82&q2=%E3%81%82

    return "./bh.html?" + urlSearchParam;
}

const add_text_metrics_event = () => {
    input_ids.forEach(id => {
        const target = document.getElementById(id);
        if (target == null) return;
        target.addEventListener("input", text_metrics_event);
    });
}

const add_textarea_metrics_event = () => {
    textarea_ids.forEach(id => {
        const target = document.getElementById(id);
        if (target == null) return;
        target.addEventListener("input", textarea_metrics_event);
    })
}

const go_to_page = () => {
    const url: string = generate_url();
    window.open(url, '_blank');
}

const add_go_to_page_event = () => {
    const target = document.getElementById("id-gen-page")!;
    target.addEventListener("click", go_to_page);
}

const change_select_template = (e: Event) => {
    const select = <HTMLSelectElement>e.target;

    switch (select.options[select.selectedIndex].value) {
        case "sample1":
            read_template_input(template1);
            break;
        case "sample2":
            read_template_input(template2);
            break;
        case "sample3":
            read_template_input(template3);
            break;
        case "sample4":
            read_template_input(template4);
            break;
    }

    run_all_text_metrics();
    run_input_aa_font();
}

const add_change_select_template_event = () => {
    const select = document.getElementById("id-template_select");
    if (select == null) return;
    select.addEventListener("change", change_select_template);
}

/**
 * AAフォント用のラジオボックスの値によってイベントを実行する
 */
const run_input_aa_font = () => {
    radio_aa_font_ids.forEach(id => {
        const input = <HTMLInputElement>document.getElementById(id);
        if (input == null) return;
        if (input.checked) change_input_aa_font(input);
    });
}

/**
 * AAフォント用のラジオボックスイベントの実装
 */
const change_input_aa_font = (input: HTMLInputElement) => {
    if (input == null) return;
    if (!input.checked) return;

    const container = <HTMLDivElement>document.getElementsByClassName("textareaMetrics-container")[0];
    switch (input.id) {
        case "id-radio_use_monospace":
            container.style.fontFamily = "monospace";
            break;
        case "id-radio_use_none":
            container.style.fontFamily = "none";
            break;
    }
}

/**
 * AAフォントのラジオボックス用イベント
 */
const change_input_aa_font_event = (e: Event) => {
    const input = <HTMLInputElement>e.target!;
    change_input_aa_font(input);
}

/**
 * AAフォントのラジオボックスにイベントを追加する
 */
const add_change_input_aa_font_event = () => {
    radio_aa_font_ids.forEach(id => {
        const input = document.getElementById(id);
        input?.addEventListener("change", change_input_aa_font_event);
    });
}

/**
 * イベント追加の初期化関数
 */
const add_events = () => {
    add_text_metrics_event();
    add_textarea_metrics_event();
    add_go_to_page_event();
    add_change_select_template_event();
    add_change_input_aa_font_event();
}

/**
 * テンプレート入力を読み込む
 */
const read_template_input = (template: TemplateInput) => {
    input_ids.forEach(id => {
        const input = <HTMLInputElement>document.getElementById(id);
        if (input == null) return;
        input.value = template[id.substring(3)];
    });

    textarea_ids.forEach(id => {
        const textarea = <HTMLTextAreaElement>document.getElementById(id);
        if (textarea == null) return;
        textarea.value = template[id.substring(3)];
    });

    // AAフォント
    const aa_font_select = document.getElementById("id-q21");
    switch (template["q21"]){
        case "0":
            (<HTMLInputElement>document.getElementById("id-radio_use_monospace")).checked = true;
            break;
        case "1":
            (<HTMLInputElement>document.getElementById("id-radio_use_none")).checked = true;
            break;
    }
}

const run_all_text_metrics = () => {
    input_ids.forEach(id => {
        text_metrics_id(id);
    });

    textarea_ids.forEach(id => {
        textarea_metrics_id(id);
    });
}

const entry_point = () => {
    add_events();
    read_template_input(template1);
    run_all_text_metrics();
    run_input_aa_font();
}

window.onload = () => {
    entry_point();
}