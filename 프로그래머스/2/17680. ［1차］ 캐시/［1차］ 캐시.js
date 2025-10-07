const cl = text => console.log(text)

const solution = (cacheSize, cities) => {
    let answer = 0;
    let cache = [];
    
    const addCache = (city) => {
        if(cache.includes(city)){
            cache.splice(cache.indexOf(city), 1);
        }
        
        if(cache.length >= cacheSize){
            cache.shift();
        }
        
        if(cache.length + 1 <= cacheSize){
            cache.push(city);    
        }
        
    }
    
    const isHit = (city) => cache.includes(city);
    
    cities.forEach(city => {
        if(isHit(city.toLowerCase())){
            answer += 1;
        }else{
            answer += 5;
        }
        addCache(city.toLowerCase());
    })
    
    return answer;
}