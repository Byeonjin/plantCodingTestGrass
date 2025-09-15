const cl = text => console.log(text);

const solution = (n, m, section) => {
    let answer = 0;
    let lastPos = 0;
    
    section.forEach(sectionNumber => {
        if(sectionNumber > lastPos - 1){
            lastPos = sectionNumber + m;
            answer += 1;
        }
    })
    
    return answer;
}