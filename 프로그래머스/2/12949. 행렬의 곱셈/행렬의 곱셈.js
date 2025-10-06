const cl = (text) => console.log(text);

function solution(arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < arr1.length; i++){
        const arr1Row = arr1[i];
        const tmpRow = [];
        for(let k = 0; k < arr2[0].length; k++){
            let tmpNumber = 0;
            for(let j = 0; j < arr1Row.length; j++){
                const arr1RowNumber = arr1Row[j];
                const arr2RowNumber = arr2[j][k];
                const multipliedNumber=arr1RowNumber * arr2RowNumber;
                
                tmpNumber += multipliedNumber;
            }
            
            tmpRow.push(tmpNumber);
        }
        answer.push(tmpRow)
    }
    
    return answer;
}