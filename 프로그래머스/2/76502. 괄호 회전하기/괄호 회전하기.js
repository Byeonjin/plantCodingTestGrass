const cl = text => console.log(text);

const isCorrect = (str) => {
    const stack = [];
    const leftBracket = "[({";
    const rightBracket = "])}";
          
    for(let char of str){
        if(leftBracket.includes(char)){
            stack.push(char);
        }
        const rightBracketIndex = rightBracket.indexOf(char);
        
        if(rightBracketIndex !== -1){
            if(stack[stack.length-1] === leftBracket[rightBracketIndex]){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    
    return stack.length === 0 ? true : false;
}

function solution(s) {
    let answer = 0;
    let bracket = s;

    for(let i = 0; i < s.length; i++){
        const firstChar = bracket[0];
        bracket = bracket.slice(1) + firstChar;
                
        if(isCorrect(bracket)){
            answer += 1;
        }
    }
    
    return answer;
}