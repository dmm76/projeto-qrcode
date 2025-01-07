async function permitterCharacteres(params) {
  let permitted = [];
  
  if (process.env.UPPERCASE_LETTERS === "true") {
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVXYZ");
  }
  if (process.env.lOWERCASE_LETTERS === "true") {
    permitted.push(..."abcdefghijklmnopqrstuvxyz");
  }
  if (process.env.NUMBERS === "true") {
    permitted.push(..."0123456789");
  }
  if (process.env.SPECIAL_CHARACTERES === "true") {
    permitted.push(..."!@#$%¨&*()_+=-");
  }
  return permitted;
}

async function handle(params) {
  let characters = [];
  let password = "";
  const passwordLength = process.env.PASSWORD_LENGTH;
  characters = await permitterCharacteres();

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  return password;
}

export default handle;
