const cl = (text) => console.log(text);

const getAlphaIndex = (char) => {
    return char.charCodeAt() - "a".charCodeAt();
}

function solution(s) {
    let answer = new Array(s.length)
    const dpArr = new Array("z".charCodeAt() - "a".charCodeAt() + 1).fill('empty') 
    
    
    for(let i = 0; i < s.length; i++){
        const character = s[i]
        
        if(dpArr[getAlphaIndex(character)] === "empty"){
            answer[i] = -1;
        }else{
            answer[i] = i - dpArr[getAlphaIndex(character)];
        }
        
        dpArr[getAlphaIndex(character)] = i;
    }
    
    cl(dpArr)
    
    return answer;
}