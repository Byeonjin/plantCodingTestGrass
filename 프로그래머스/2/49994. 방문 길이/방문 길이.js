const solution = (dirs) => {
    let answer = 0;
    
    
    const dirObj = {"U": [0, 1], "D": [0, -1], "R": [1, 0], "L": [-1, 0]};
    
    const visitedSet = new Set();
    
    let  [x, y] = [0, 0];
    
    const isReachable = (x, y) => {
        if(x < -5 || x > 5 || y < -5 || y > 5){
            return false;
        }
        
        return true;
    }
    
    const getCoord = (x, y) => `${x},${y}`;
    
    const hasVisited = (movement) => {
        if(visitedSet.has(movement)){
            return true;
        }
        
        return false;
    }
    
    const getMovement = (from, to) => {
        return `${from}-${to}`
    }
    
    for(const dir of dirs){
        const dirVec = dirObj[dir];
        const nextX = x + dirVec[0];
        const nextY = y + dirVec[1];
        
        const coord = getCoord(x, y);
        const nextCoord = getCoord(nextX, nextY);
        const movement = getMovement(coord, nextCoord);
        const reverseMovement = getMovement(nextCoord, coord);
        
        if(!isReachable(nextX, nextY)){
            continue;
        }else{
            if(!hasVisited(movement) && !hasVisited(reverseMovement)){
                answer += 1;
                
                visitedSet.add(movement);
                visitedSet.add(reverseMovement);
            }
            
            x = nextX;
            y = nextY;
        }
    }
    
    return answer;
}