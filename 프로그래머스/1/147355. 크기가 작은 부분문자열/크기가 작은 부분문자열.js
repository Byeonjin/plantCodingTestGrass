const solution = (t, p) => {
    let answer = 0;
    const convertedP = parseInt(p);
    
    for(let i = 0; i < t.length - p.length + 1; i++){
        const slicedStr = t.slice(i, i + p.length);
        
        const convertedStr = parseInt(slicedStr);
        
        if(convertedStr <= p){
            answer++;
        }
    }
    
    return answer;
}