async function permitterCharacteres() {
  let permitted = [];

  if (process.env.UPPERCASE_LETTERS === "true") {
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVXYZ");
  }
  if (process.env.LOWERCASE_LETTERS === "true") {
    permitted.push(..."abcdefghijklmnopqrstuvxyz");
  }
  if (process.env.NUMBERS === "true") {
    permitted.push(..."0123456789");
  }
  if (process.env.SPECIAL_CHARACTERES === "true") {
    permitted.push(..."!@#$%¨*()_+=-");
  }
  return permitted;
}

async function handle() {
  let characters = [];
  let password = "";
  const passwordLength = process.env.PASSWORD_LENGTH;
  // me trará para a variavel todos os caracteres permitido em .env
  characters = await permitterCharacteres();

  for (let i = 0; i < passwordLength; i++) {
    // Gerar índice aleatório para um array
    const index = Math.floor(Math.random() * characters.length);
    //colocara em password o caractere correspondente no indice do array de caracteres "character"
    password += characters[index];
  }
  return password;
}

export default handle;
