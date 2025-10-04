const cl = text => console.log(text);

const solution = (want, number, discount) => {
    let answer = 0;
    const cntMap = {};
    
    want.forEach((stuff, idx) => {
        cntMap[stuff] = number[idx];
    })
    
    for(let i = 0; i <= discount.length - 10; i++){
        const discountStuffs = discount.slice(i, i+10);
        const discountMap = {};
        
        discountStuffs.forEach((stuff) => {
            discountMap[stuff] = discountMap[stuff] ? discountMap[stuff] + 1 : 1;
        })
        
        let isAllSame = true;
        
        for(const stuff in cntMap){           
            if(cntMap[stuff] !== (discountMap[stuff] || 0)){
                isAllSame = false;
                break;
            }
        }
        
        if(isAllSame){
            answer += 1;
        }
    }
    
    return answer;
}