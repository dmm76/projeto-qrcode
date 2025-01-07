import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-squema-qrcode.js";
import handle from "./handle.js";

async function createQRCode(params) {
    prompt.get(promptSchemaQRCode, handle);
    prompt.start();
}

export default createQRCode;