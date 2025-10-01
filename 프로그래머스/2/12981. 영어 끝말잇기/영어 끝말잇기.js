const cl = (text) => console.log(text);

const solution = (n, words) => {
    let answer = [0, 0];
    const wordSet = new Set();
    
    wordSet.add(words[0]);

    for(let i = 1; i < words.length; i++){
        const crntWord = words[i];
        const canConnect = words[i][0] === words[i-1][words[i-1].length-1]
        
        if(wordSet.has(crntWord) || !canConnect){
            const turn = parseInt(i / n) + 1;
            const number = (i % n) + 1;
            
            answer[0] = number;
            answer[1] = turn;
            break;
        }
        
        wordSet.add(crntWord)
    }

    return answer;
}