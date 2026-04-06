const cl = text => console.log(text);

const solution = (topping) => {
    let answer = 0;
    const rightCntMap = new Map();
    
    
    for(const i of topping){
        if(!rightCntMap.get(i)){
            rightCntMap.set(i, 1);
        }else{
            rightCntMap.set(i, rightCntMap.get(i) + 1);
        }
    }

    
    const leftSet = new Set();
    
    for(let i = 0; i < topping.length-1; i++){
        rightCntMap.set(topping[i], rightCntMap.get(topping[i])-1);
        
        if(rightCntMap.get(topping[i]) === 0){
            rightCntMap.delete(topping[i]);
        }
        
        leftSet.add(topping[i]);
        
        
        if(leftSet.size === rightCntMap.size){
            answer += 1;
        }
    }
    
    return answer;
}