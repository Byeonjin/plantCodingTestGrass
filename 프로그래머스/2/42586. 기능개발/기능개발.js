const solution = (progresses, speeds) => {
    const answer = [];
    const queue = [...progresses];
    let headIdx = 0;
    
    while(headIdx < queue.length){
        let cnt = 0;
        
        for(let i = headIdx; i < queue.length; i++){
            queue[i] += speeds[i];
        }
        
        while(queue[headIdx] >= 100){
            headIdx += 1;
            cnt += 1;
        }
        
        if(cnt > 0){
            answer.push(cnt)
        }
    }    
    
    return answer;
}