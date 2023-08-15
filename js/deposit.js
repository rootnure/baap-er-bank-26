// step-1: add event listener to the deposit button
document.querySelector("#btn-deposit").addEventListener('click', function () {
    // step-2: get the deposit amount form the deposit input field
    // For input field use .value to the value inside the input field
    const depositField = document.querySelector("#deposit-field");
    const newDepositAmount = parseFloat(depositField.value);

    // step-7: clear the deposit field
    depositField.value = '';

    if (isNaN(newDepositAmount) || newDepositAmount <= 0) {
        alert('Please provide a positive number');
        return;
    }

    // step-3: get the current deposit total
    const depositTotalElement = document.querySelector("#deposit-total");
    const depositPreviousTotal = parseFloat(depositTotalElement.innerText);

    // step-4: add number to set the total deposit
    const updatedDepositTotal = depositPreviousTotal + newDepositAmount;
    depositTotalElement.innerText = updatedDepositTotal;

    // step-5: get ballance current total
    const balanceTotalElement = document.querySelector("#balance-total");
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
});
