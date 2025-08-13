const solution = (foodArr) => {
    let answer = '';
    
    for(let i = 1; i < foodArr.length; i++){
        const foodCount = foodArr[i];
        
        const cutDownCount = parseInt(foodCount / 2);
        
        if(cutDownCount <= 0){
            continue;
        }else{
            answer += `${i}`.repeat(cutDownCount);
        }
    }
    
    const splitedStringArr = answer.split('');
    const reversedStr = splitedStringArr.reverse().join('');
    
    answer += "0";
    answer += reversedStr
    
    return answer;
}