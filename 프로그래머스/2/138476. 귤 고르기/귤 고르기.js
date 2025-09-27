const cl = text => console.log(text);

const solution = (k, tangerine) => {
    let answer = 0;
    const sortedTangerine = tangerine.sort((a,b) => a - b);
    const crntArr = [0];
    let crntTangerine = sortedTangerine[0];
    let idx = 0;
    
    sortedTangerine.forEach((tangerine) => {
        if(crntTangerine === tangerine){
            crntArr[idx] += 1;
        }else{
            idx++;
            crntArr[idx] = 1;
            crntTangerine = tangerine;
        }
    })
    
    const sortedCrntArr = crntArr.sort((a, b) => b-a);
    
    let sum = 0;
    for(let i = 0; i < sortedCrntArr.length; i++){
        sum += sortedCrntArr[i];
        answer += 1;
        
        if(sum >= k){
            break;
        }
    }
    
    
    return answer;
}