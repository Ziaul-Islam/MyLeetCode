/*
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    /*let sum =  0;
     let count = 0;
     for(sal of salary){
         sum += sal;
         console.log(sal);
         count++;
     }
     return sum/count;*/
 
     //let sum = salary.reduce((acc, cur)=> acc + cur);
     //console.log(sum);
     //return sum/salary.length;
     //let minSal = Math.min(...salary);
     //console.log(minSal);
     /*
     let min = salary.reduce(((acc, cur)=> (acc < cur)? acc:cur));
     let max = salary.reduce(((acc, cur)=> (acc > cur)? acc:cur));
     let sum = salary.reduce((acc, cur)=> acc + cur);
     sum -=(min+max);
     return sum/(salary.length-2);
     */
 
     return salary.sort((a,b)=>a - b)
                     .slice(1, salary.length-1)
                     .reduce((acc, cur) => acc + cur)
                     /(salary.length-2);
 };