import './bincert_to_carray.scss';
import { InputFileSystem } from "webpack";

function toHex(v: number) {
    return '0x' + (('00' + v.toString(16).toUpperCase()).substr(-2));
}


function to_carray(str: string) {
    const decoded = Buffer.from(str, "ascii");

    const NUM = 12;
    let ans = "";
    ans += "const unsigned short cert_len = "+decoded.length+";\n";
    ans += "const unsigned char cert[] = {\n";

    let line = "";
    for (let i=0; i<decoded.length; i++) {
        if ((i+1)%NUM == 1) {
            line += "  ";
        }
        else {
            line += " ";
        }

        line += toHex(decoded[i]) + ",";

        if ((i+1)%NUM == 0) {
            ans += line + "\n";
            line = "";
        }
    }

    ans += line.slice(0,-1);
    ans += "\n";
    ans += "};\n";

    return ans;
}


function convert() {
    const fileInput = <any>document.getElementById("js_file_uploaded")!;
    const files = fileInput.files;

    if (files.length === 0) return;

    const reader = new FileReader();

    reader.onload = (file) => {
        const text = file.target?.result;
        if(typeof text !== "string"){
            return;
        }
        console.log(text);
        const ans: string = to_carray(text);

        (document.getElementById("js_textarea_carray")! as HTMLTextAreaElement).value = ans;
    }

    reader.readAsBinaryString(files[0]);  // ファイルの読み込みを実行
}


window.onload = function() {
    const target = document.getElementById("js_btn_convert");
    target?.addEventListener("click", convert, false);
};

