const solution = (k, score) => {
    const answer = [-1];
    const hallOfFame = [];
    
    for(let i = 0; i < score.length; i++){
        
            if(hallOfFame.length === k && hallOfFame[k-1] < score[i]){
                hallOfFame.pop();        
                hallOfFame.push(score[i]);
                hallOfFame.sort((a,b) => b-a);
            }else if(hallOfFame.length !== k){
                hallOfFame.push(score[i]);
                hallOfFame.sort((a,b) => b-a);
            }
            
            
            answer.push(hallOfFame[hallOfFame.length-1]);
    }
    
    return answer.slice(1);
}
