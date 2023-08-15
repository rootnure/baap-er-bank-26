/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number using parseFloat

3. Ge previous withdraw total

4. calculate total withdraw amount
4-5. set total withdraw amount

5. get the previous balance total
6. calculate new balance total
6-5. set the new balance total

7. clear the input field
*/

// step-1:
document.querySelector("#btn-withdraw").addEventListener('click', function () {
    // step-2:
    const withdrawField = document.querySelector("#withdraw-field");
    // step-2-5:
    const newWithdrawAmount = parseFloat(withdrawField.value);
    
    // step-7:
    withdrawField.value = '';
    
    if(isNaN(newWithdrawAmount) || newWithdrawAmount <= 0) {
        alert('Please provide a positive number');
        return;
    }
    
    // step-3:
    const withdrawTotalElement = document.querySelector("#withdraw-total");
    const withdrawPreviousTotal = parseFloat(withdrawTotalElement.innerText);
    
    // step-5:
    const balanceTotalElement = document.querySelector("#balance-total");
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    
    if(previousBalanceTotal < newWithdrawAmount) {
        alert('Account e eto taka nai');
        return;
    }
    
    // step-4:
    const updatedWithdrawTotal = withdrawPreviousTotal + newWithdrawAmount;
    // step-4-5:
    withdrawTotalElement.innerText = updatedWithdrawTotal;
    
    // step-6:
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // step-6-5:
    balanceTotalElement.innerText = currentBalanceTotal;
});