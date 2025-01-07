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

  export default permitterCharacteres;