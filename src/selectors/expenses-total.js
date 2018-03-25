/**
 * selectExpensesTotal
 */
export default(expenses) => {
    if(!expenses){
        return 0;
    }
    let arr = Array.prototype.concat(expenses);
    return arr.reduce((
    acc, val) => {
        return acc + val.amount; 
    }, 0);
}

