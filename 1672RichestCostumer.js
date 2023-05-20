/*
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let winnerVal = 0;

    accounts.forEach((customer, i) => {
        let wealth = 0;
        customer.forEach((account, j) =>{
            wealth += account;
        })
        if(wealth > winnerVal) {
            winnerVal = wealth;
        }
    })
    return winnerVal;
};