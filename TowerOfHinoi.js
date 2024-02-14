var noOfMove = 0;
var towerOfHinoi = function(n, from_rod, to_rod, aux_rod){


    if (n === 0){
        return;
    }
    noOfMove++;
    towerOfHinoi(n-1, from_rod, aux_rod, to_rod);// A to B using C
    console.log("Move disk "+n+" From "+from_rod+" to "+to_rod);
    towerOfHinoi(n-1, aux_rod, to_rod, from_rod); // B to C using A
}
towerOfHinoi(4, 'A', 'C', 'B');
console.log("Number of Move "+noOfMove);