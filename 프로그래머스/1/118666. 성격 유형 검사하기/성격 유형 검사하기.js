const cl = text => console.log(text)

const getScore = (choice) => {
    const getModifiedScore = Math.abs(choice - 4);
    
    return getModifiedScore;
}

const getPersonality = (choice, characteristic) => {
    if(choice < 4){
        return characteristic[0];
    }else if(choice > 4){
        return characteristic[1];
    }else {
        return false;
    }
}

const getResultPersonality = (personalityObj) => {
    let answer = "";
    const categoryPair = [["R", "T"], ["C", "F"], ["J", "M"], ["A", "N"]];
    
    categoryPair.forEach(pair => {
        const [category1, category2] = pair;
        
        if(personalityObj[category1] > personalityObj[category2]){
            answer += category1;
        }else if(personalityObj[category1] < personalityObj[category2]){
            answer += category2;
        }else{
            answer += pair.sort()[0]
        }
    })
    
    return answer;
}

const solution = (survey, choices) => {
    let answer = '';
    const personalityObj = {R: 0, T: 0, C:0, F:0, J:0, M:0, A:0, N:0};
    
    
    survey.forEach((characteristic, idx) => {
        const choice = choices[idx]
        const personality = getPersonality(choice, characteristic);
        const score = getScore(choice)
        
        if(!personality){
            return;
        }
        
        personalityObj[personality] += score;
    })
    
    answer = getResultPersonality(personalityObj)
    
    return answer;
}