const cl = text => console.log(text)

const solution = (k, dungeons) => {
    let answer = -1;
    const visited = new Array(dungeons.length).fill(false);
    
    
    const dfs = (fatigue, cnt) => {
        
        dungeons.forEach(([min, use], idx) =>{
            if(visited[idx] || min > fatigue){
                answer = Math.max(cnt, answer);
                return;
            }
            
            visited[idx] = true;
            
            dfs(fatigue - use, cnt + 1);
            
            visited[idx] = false;
        })
    }
    
    dfs(k,0)

    cl(answer)
    return answer;
}