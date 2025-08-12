const cl = (text) => console.log(text);




function solution(number) {
    let answer = 0;
    let arr = [];
    
    const getCombination = (L, idx) => {
        if(L === 3){
            const sum = arr.reduce((acc, crnt)=>{ return acc + crnt }, 0);
            if(sum === 0) answer += 1;
            return
        }
        
        for(let i = idx; i < number.length; i++){
            const num = number[i];
            arr.push(num);
            getCombination(L+1, i+1)
            arr.pop();
        }
    }
    
    getCombination(0, 0);
    
    return answer;
}