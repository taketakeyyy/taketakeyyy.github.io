import '../scss/text-metrics.scss';
import {input_ids, textarea_ids, aa_font_ids} from "./ids";
import {textarea_metrics_id} from "./text-metrics";

interface DecodedQuerys {
    [key: string]: string
}

/**
 * URLデコードしたクエリ値を取得する
 */
const get_decoded_querys = (): DecodedQuerys => {
    const url: URL = new URL(window.location.href);
    const params: URLSearchParams = url.searchParams;
    console.log(params);

    let dq: DecodedQuerys = {};

    input_ids.forEach(id => {
        const key = id.substring(3);
        const text = params.get(key);
        if (text == null) dq[key] = "";
        else dq[key] = decodeURIComponent(text);
    });

    textarea_ids.forEach(id => {
        const key = id.substring(3);
        const text = params.get(key);
        if (text == null) dq[key] = "";
        else dq[key] = decodeURIComponent(text);
    });

    // AAフォント
    aa_font_ids.forEach(id => {
        const key = id.substring(3);
        const text = params.get(key);
        if (text == null) dq[key] = "";
        else dq[key] = decodeURIComponent(text);
    });

    return dq;
}

/**
 * 表示するテキストを作成する
 */
const generate_text = () => {
    const dq: DecodedQuerys = get_decoded_querys();
    console.log(dq);

    input_ids.forEach(id => {
        const span = document.getElementById(id);
        if (span == null) return;
        span.textContent = dq[id.substring(3)];
    });

    textarea_ids.forEach(id => {
        const textarea = document.getElementById(id);
        if (textarea == null) return;
        textarea.textContent = dq[id.substring(3)];
    });

    // AAフォントの決定
    {
        const container = <HTMLDivElement>document.getElementsByClassName("textareaMetrics-container")[0];
        switch (dq["q21"]) {
            case "0":
                container.style.fontFamily = "monospace";
                break;
            case "1":
                container.style.fontFamily = "none";
                break;
        }
    }

    // textareaの表示/非表示
    {
        const id_textarea = <HTMLTextAreaElement>document.getElementById("id-q100");
        const container = <HTMLDivElement>document.getElementById("id-textareaMetrics-container");
        if (id_textarea.value === "") {
            container.style.display = "none";
        }
        else {
            container.style.display = "block";
        }
    }
}

/**
 * 最初に実行したいイベントを実行する
 */
const run_initial_events = () => {
    textarea_ids.forEach(id => {
        textarea_metrics_id(id);
    });
}

/**
 * エントリポイントということで。
 */
const entry_point = () => {
    generate_text();
    run_initial_events();
}

window.onload = () => {
    entry_point();
}