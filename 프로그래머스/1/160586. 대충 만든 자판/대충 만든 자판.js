const solution = (keymap, targets) => {
    const answer = [];
    const shortCountKeyMap = new Map();
    
    
    for(let i = "A".charCodeAt(); i <= "Z".charCodeAt(); i++){
        const char = String.fromCharCode(i);
        
        keymap.forEach(key => {
            if(!shortCountKeyMap.has(char)){
                shortCountKeyMap.set(char, Infinity)
            }
            
            const crntCount = key.indexOf(char);
            
            if(crntCount === -1) return;
            
            shortCountKeyMap.set(char, Math.min(shortCountKeyMap.get(char), crntCount+1));
        })
        
    }
    
    targets.forEach(target => {
        let count = 0;
        for(let i = 0; i < target.length; i++){
            const char = target[i];
            
            count += shortCountKeyMap.get(char);
        }
        
        answer.push(count === Infinity ? -1 : count)
    })
    
    return answer;
}