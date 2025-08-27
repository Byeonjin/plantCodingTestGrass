const getDivisorCount = (number) => {
    const squareRoot = Math.floor(Math.sqrt(number));
    
    let divisorCount = 0;
    
    for(let i = 1; i <= squareRoot; i++){
        if(number % i === 0){
            divisorCount++;
        }
    }
    
    divisorCount *= 2;
    
    if(squareRoot*squareRoot === number){
        divisorCount--;
    }
    
    return divisorCount;
}


const solution = (number, limit, power) => {
    let answer = 0;
    
    for(let i = 1; i <= number; i++){
        const weaponPower = getDivisorCount(i);
        
        if(weaponPower > limit){
            answer += power;
        }else{
            answer += weaponPower;
        }
    }
    
    return answer;
}