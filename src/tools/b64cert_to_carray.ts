import './b64cert_to_carray.scss';

function toHex(v: number) {
    return '0x' + (('00' + v.toString(16).toUpperCase()).substr(-2));
}


function to_carray(encoded: string) {
    const decoded = Buffer.from(encoded, 'base64');

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
    const textarea = (document.getElementById("js_textarea_cert")! as HTMLTextAreaElement).value;

    const ans:string = to_carray(textarea);

    (document.getElementById("js_textarea_carray")! as HTMLTextAreaElement).value = ans;
}


window.onload = function() {
    const target = document.getElementById("js_btn_run");
    target?.addEventListener("click", convert, false);
};

