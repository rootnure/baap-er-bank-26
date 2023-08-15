// step-1: add event listener to the deposit button
document.querySelector("#btn-withdraw").addEventListener('click', function () {
    // step-2: get the withdraw amount form the withdraw input field
    // For input field use .value to the value inside the input field
    const withdrawField = document.querySelector("#withdraw-field");
    const newWithdrawAmount = parseFloat(withdrawField.value);
    
    // step-3: get the current withdraw total
    const withdrawTotalElement = document.querySelector("#withdraw-total");
    const withdrawPreviousTotal = parseFloat(withdrawTotalElement.innerText);
    
    // step-4: add number to set the total withdraw
    const updatedWithdrawTotal = withdrawPreviousTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = updatedWithdrawTotal;

    // step-5: get ballance current total
    const balanceTotalElement = document.querySelector("#balance-total");
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7: clear the withdraw field
    withdrawField.value = '';
});