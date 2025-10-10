const cl = text => console.log(text);

function solution(n, t, m, p) {
    let answer = '';
    let prevNumber = "";
    let number = 0;
    
    while(prevNumber.length < t * m){
        let convertedNum = number.toString(n)
        prevNumber += convertedNum;
        number++;
    }
    
    prevNumber = prevNumber.toUpperCase()
    
    for(let i = p - 1; i < prevNumber.length; i += m){
        const char = prevNumber[i];
        answer += char;
        
        if(answer.length === t) break;
    }

    
    return answer;
}