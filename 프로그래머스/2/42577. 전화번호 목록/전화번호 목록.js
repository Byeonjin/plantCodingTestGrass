const cl = text => console.log(text);

const checkNumber = (pn, pnSet) => {
    let tmpPn = ""
    
    for(let i = 0; i < pn.length-1; i++){
        const digit = pn[i];
        
        tmpPn += digit;
        
        if(pnSet.has(tmpPn)){
            return false;
        }
    }
    
    return true;
}

const solution = (phone_book) => {
    let answer = false;
    const pnSet = new Set();
    
    for(const pn of phone_book){
        pnSet.add(pn);
    }
    
    for(const pn of phone_book){
        answer = checkNumber(pn, pnSet);
        if(answer === false){
            break;
        }
    }
    
    return answer;
}