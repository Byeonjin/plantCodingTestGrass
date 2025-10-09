const solution = (gems) => {
    let answer = [];
    const gemsMap = new Map();
    const gemsTypes = new Set(gems).size;
    let minLength = gems.length + 1;
    let st = 0;
    
    for(let et = 0; et < gems.length; et++){
        gemsMap.set(gems[et], (gemsMap.get(gems[et]) || 0) + 1);
        
        while(gemsMap.size === gemsTypes){
            if(et - st < minLength){
                minLength = et - st;
                answer = [st + 1, et + 1];
            }
            
            gemsMap.set(gems[st], gemsMap.get(gems[st]) - 1);
            if(gemsMap.get(gems[st]) === 0){
                gemsMap.delete(gems[st]);
            }
            st += 1;
        }
    }
    
    return answer;
}