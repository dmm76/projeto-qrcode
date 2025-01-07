import prompt from "prompt";
import createQRCode from "./services/qr-code/create.js";

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, choose) =>{
    if(choose.select == 1) await createQRCode();
    if(choose.select == 2) await createPassword();
  });
  prompt.start();
}

main();
