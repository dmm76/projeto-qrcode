import permitterCharacteres from "./utils/permitted-characteres.js";

//extracted method - refatoração
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
