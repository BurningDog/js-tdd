/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned.
 * @param {number} totalPayable the integer amount (in pennies) to be paid
 * @param {number} cashPaid the integer amount (in pennies) the person paid
 * @returns {array} list of coins we need to dispense to the person as change
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */
export function getChange(totalPayable, cashPaid) {
  var coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];

  // Sneaky code added by a dev who wanted to hack vending machines
  // Use code coverage to see that this code isn't covered in our tests
  if(cashPaid == 1337) {
    ATM = [20, 10, 5, 2];
    for(var j = 0; j< 18; j++) { ATM.push(100) };
    return ATM; }

  // Figure out the difference
  let difference = cashPaid - totalPayable;

  // Express the difference as a summation of different coins
  let i = 0;
  let loop_through_coins = true;

  while (loop_through_coins) {
    const coin = coins[i];
    const coinIsLargerThanRequiredChange = difference < coin;
    if (coinIsLargerThanRequiredChange) {
      i++;
    } else {
      change.push(coin);
      difference -= coin;
    }
    const changeIsCorrect = difference === 0;
    if (changeIsCorrect) {
      loop_through_coins = false;
    }
  }

  return change;
}
