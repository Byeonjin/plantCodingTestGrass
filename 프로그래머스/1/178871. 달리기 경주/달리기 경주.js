const cl = text => console.log(text);

const swapOrder = (originalPlayers, calling, orderMap) => {
    const indexOfPlayerCalled = orderMap[calling];
    const indexOfBeforePlayerCalled = indexOfPlayerCalled - 1;
    const nameOfBeforePlayerCalled = originalPlayers[indexOfBeforePlayerCalled];
    
    originalPlayers[orderMap[calling]] = nameOfBeforePlayerCalled;
    originalPlayers[orderMap[nameOfBeforePlayerCalled]] = calling;
    
    orderMap[calling] -= 1;
    orderMap[nameOfBeforePlayerCalled] += 1;
    
    return originalPlayers
}

const solution = (players, callings) => {
    let answer = players;
    const orderMap = {};
    
    players.forEach((name, index) => {
        orderMap[name] = index;
    })
    
    callings.forEach(calling => {
        answer = swapOrder(answer, calling, orderMap);
    });
    
    return answer;
}