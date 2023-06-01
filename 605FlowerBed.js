/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    /*let total = 0;
    if((flowerbed.length % 2) == 0){
        total = Math.floor(flowerbed.length/2);
    }
    else{
        let index = flowerbed.indexOf(1);
        if(index !== -1){
            if((index % 2) == 0)
            total = Math.ceil(flowerbed.length/2);
            else
            total = Math.floor(flowerbed.length/2)
        }
        else
        total = Math.ceil(flowerbed.length/2);
    }
    let total_flower = flowerbed.filter((ele) => ele == 1).length;
    console.log("total_flower : "+total_flower);
    console.log("total : "+total);
    return total >= (total_flower + n);
    */
    //the idea is to check for [i] = 0 and [i-1] = 0 and [i+1] = 0
    //then you can place the flower.
    
    for(let i = 0; i < flowerbed.length; i++){
        if((flowerbed[i] === 0) && (i === 0 || flowerbed[i - 1] === 0) 
        && ((i === flowerbed.length - 1) || flowerbed[i+1] === 0)){
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;
        
};