const cl = text => console.log(text);

const solution = (elements) => {
    let answer = 0;
    const sumSet = new Set();
    
    for(let i = 0; i < elements.length; i++){
        for(let j = 0; j < elements.length; j++){
            let sum = 0;
            for(let k = j; k <= j+i; k++){
                const idx = k % elements.length;
                sum += elements[idx];
            }
            sumSet.add(sum);
        }
    }
    
    answer = sumSet.size;
    
    return answer;
}