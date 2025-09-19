function solution(babbling) {
    let answer = 0;
    const combinationArray = [];
    const wordsCanSpeak = ["aya", "ye", "woo", "ma"];

    const dfs = (targetStr, lastWord) => {
        combinationArray.push(targetStr);
        
        // 문자열 길이가 babbling 중 최대 길이를 초과하면 더 이상 탐색할 필요 없음
        if (targetStr.length > maxLen) return;

        for (let i = 0; i < wordsCanSpeak.length; i++) {
            const word = wordsCanSpeak[i];
            if (lastWord === word) continue;
            dfs(targetStr + word, word);
        }
    };

    const maxLen = Math.max(...babbling.map(v => v.length));
    dfs("", "");

    const wordsSetCanSpeak = new Set(combinationArray);
    babbling.forEach(word => {
        if (wordsSetCanSpeak.has(word)) answer++;
    });

    return answer;
}
