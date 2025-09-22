const cl = text => console.log(text);

const solution = (X, Y) => {
    let answer = '';
    const XCnt = new Array(10).fill(0);
    const YCnt = new Array(10).fill(0);
    
    X.split('').forEach(x => XCnt[x] += 1);
    Y.split('').forEach(y => YCnt[y] += 1);
    
    const cntArr = new Array(10);
    
    for(let i = 0; i < 10; i++){
        cntArr[i] = Math.min(XCnt[i], YCnt[i]);
    }
    
    for(let i = 9; i >= 0; i--){
        if(cntArr[i] > 0){
            answer += `${i}`.repeat(cntArr[i]);
        }
    }
    
    if(answer[0] === "0"){
        return "0";
    }else if(answer === ""){
        return "-1";
    }else{
        return answer;
    }
}