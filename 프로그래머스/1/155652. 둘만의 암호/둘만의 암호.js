const cl = (text) => console.log(text);

const solution = (s, skip, index) =>{
    let answer = '';
    const charNumber = 'z'.charCodeAt() - 'a'.charCodeAt() + 1;
    const skipCharSet = new Set(skip.split("").map(ele => ele.charCodeAt()));
    const inputCharArr = s.split("");
    
    
    inputCharArr.forEach((char) => {
        let crntCharCode = char.charCodeAt();
        
        for(let i = 1; i <= index; i++){
            crntCharCode += 1;
            
            crntCharCode = (crntCharCode - "a".charCodeAt()) % 26 + "a".charCodeAt();
            while(skipCharSet.has(crntCharCode)){
                crntCharCode += 1;
                crntCharCode = (crntCharCode - "a".charCodeAt()) % 26 + "a".charCodeAt();
            }
            
            
        }
        
        cl(("z".charCodeAt() + 3 - "a".charCodeAt()) % 26 + "a".charCodeAt())
        cl("z".charCodeAt())
        
        answer += String.fromCharCode(crntCharCode);
    })
    
    
    
    
    
    return answer;
}