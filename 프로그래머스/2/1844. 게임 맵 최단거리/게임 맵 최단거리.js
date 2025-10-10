const cl = text => console.log(text);

const solution = (maps) => {
    let answer = 0;
    const visited = Array.from({length: maps.length}, () => Array.from({length: maps[0].length}, () => false));
    const distMap = Array.from({length: maps.length}, () => Array.from({length: maps[0].length}, () => Infinity));
    const dirVector = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    const queue = [[0, 0]];
    visited[0][0] = true;
    distMap[0][0] = 1;
    
    
    const bfs = () => {
        while(queue.length){
            const [y, x] = queue.shift();
            
            for(const [dirY, dirX] of dirVector){
                const [nextY, nextX] = [y + dirY, x + dirX];

                if(nextX < 0 || nextX >= maps[0].length || nextY < 0 || nextY >= maps.length){
                    continue;
                }

                if(visited[nextY][nextX] ){
                    continue;
                }
                
                if(maps[nextY][nextX] === 0){
                    continue;
                }
                
                queue.push([nextY, nextX]);
                distMap[nextY][nextX] = distMap[y][x] + 1;
                visited[nextY][nextX] = true;
            }
        }
    }
    
    bfs();
    
    const [N, M] = [maps.length - 1, maps[0].length - 1]
    answer = distMap[N][M] === Infinity ? -1 : distMap[N][M];
    
    return answer;
}