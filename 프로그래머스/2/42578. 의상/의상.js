const cl = text => console.log(text);

const solution = (clothes) => {
    let answer = 0;
    const clothesMap = new Map();
    
    clothes.forEach(([name, kind]) => {
        if(!clothesMap.get(kind)){
            clothesMap.set(kind, [name])
        }else{
            clothesMap.set(kind, [...clothesMap.get(kind), name])
        }
    })
    
    const clothesCntArr = [];
    
    for(let [kind, nameArr] of clothesMap){
        clothesCntArr.push(nameArr.length+1);
    }
    
    const combinationCnt = clothesCntArr.reduce((acc, crnt) => {
        return acc === 0 ? crnt : acc * crnt;
    }, 0)
    
    answer = combinationCnt - 1;
    
    return answer;
}