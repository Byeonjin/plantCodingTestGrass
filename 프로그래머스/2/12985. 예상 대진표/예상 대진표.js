const cl = text => console.log(text);

const solution = (n,A,B) => {
    let answer = 0;
    const [a, b] = [A, B].sort((a, b) => a - b);
    
    const dfs = (a, b, L) => {
        const nextA = Math.ceil(a / 2);
        const nextB = Math.ceil(b / 2);
        
        if(nextA === nextB){
            answer = L;
            return;
        }
        
        dfs(nextA, nextB, L+1);
    }
    
    dfs(a, b, 1)
    
    return answer;
}