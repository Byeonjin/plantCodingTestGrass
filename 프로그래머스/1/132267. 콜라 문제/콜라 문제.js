const buyCokeAndGetBottle = (cost, bundle, own) => {
    const newCoke = parseInt(own / cost) * bundle;
    const restCoke = own % cost;
    
    return [newCoke + restCoke, newCoke];
}

const solution = (a, b, n) => {
    let answer = 0;
    let budget = n;
    
    while(a <= budget){
        const newBudgetAndNewCoke = buyCokeAndGetBottle(a, b, budget);
        
        budget = newBudgetAndNewCoke[0];
        
        answer += newBudgetAndNewCoke[1]
    }
    
    return answer;
}