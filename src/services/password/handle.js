

async function handle(params) {
    let characters = [];
    let password = "";
    const passwordLength = process.env.PASSWORD_LENGTH

    if(process.env.UPPERCASE_LETTERS==="true"){
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUVXYZ");        
    }
    if(process.env.lOWERCASE_LETTERS==="true"){
        characters.push(..."abcdefghijklmnopqrstuvxyz");               
    }
    if(process.env.NUMBERS==="true"){
        characters.push(..."0123456789");               
    }
    if(process.env.SPECIAL_CHARACTERES==="true"){
        characters.push(..."!@#$%¨&*()_+=-");               
    }

    

}

export default handle;