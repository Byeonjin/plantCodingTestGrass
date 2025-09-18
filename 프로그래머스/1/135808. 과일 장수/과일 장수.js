const cl = text => console.log(text);

const solution = (k, m, score) => {
    let  answer = 0;
    
    const ascendingScore = score.sort((a,b)=> a - b)
    
    for(let i = ascendingScore.length - m; i >= 0; i -= m){        
        const minScore = ascendingScore[i];
        
        answer += minScore * m;
    }
    
    return answer;
}