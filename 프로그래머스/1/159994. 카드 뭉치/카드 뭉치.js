

const solution = (cards1, cards2, goal) => {
    let answer = "No";
    
    const bfs = (idx1, idx2, targetArr) => {
        if(idx1 > cards1.length || idx2 > cards2.length) return;
        
        const crntArr = [...targetArr];
        
        if(targetArr.join('') === goal.join('')){
            answer = "Yes"
        }
        
        crntArr.push(cards1[idx1]);
        bfs(idx1 + 1, idx2, crntArr);
        crntArr.pop();
        
        crntArr.push(cards2[idx2]);
        bfs(idx1, idx2+1, crntArr);
        crntArr.pop();    
    }
    
    
    bfs(0,0,[]);
    
    
    return answer;
}