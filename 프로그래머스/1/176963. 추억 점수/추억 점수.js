const solution = (name, yearning, photo) => {
    let answer = [];
    
    const scoreMap = new Map();
    
    for(let i = 0; i < name.length; i++){
        const crntName = name[i];
        const crntScore = yearning[i];
        
        if(!scoreMap.has(crntName)){
            scoreMap.set(crntName, crntScore);
        }
    }

    photo.forEach(onePhoto => {
        const scoreSum = onePhoto.reduce((acc, name) => { 
            if(scoreMap.has(name)){
                return acc + scoreMap.get(name);    
            }else{
                return acc;
            }
        }, 0)
        
        answer.push(scoreSum)
    })
    
    return answer;
}