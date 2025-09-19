const solution = (s) => {
    let answer = 0;
    let targetChar = s[0]
    let targetCount = 0;
    let nontargetCount = 0;
    
    for(let i = 0; i < s.length; i++){
        const crntChar = s[i];
        
        if(crntChar === targetChar){
            targetCount++;
        }else{
            nontargetCount++;
        }
        
        if(targetCount === nontargetCount){
            answer += 1;
            targetCount = 0;
            nontargetCount = 0;
            targetChar = s[i+1];
        }
    }
    
    if(targetCount !== nontargetCount){
        answer += 1;
    }
    
    return answer;
}