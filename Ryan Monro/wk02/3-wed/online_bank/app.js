var savingsAccount = {balance: 100};
var chequingAccount = {balance: 200};

var savingsWithdrawButton = document.querySelector("#savingsWithdraw");
var savingsDepositButton = document.querySelector("#savingsDeposit");
var savingsBalanceDiv = document.querySelector("#savingsBalance");
var savingsInput = document.querySelector("#savingsInput");

var chequingWithdrawButton = document.querySelector("#chequingWithdraw");
var chequingDepositButton = document.querySelector("#chequingDeposit");
var chequingBalanceDiv = document.querySelector("#chequingBalance");
var chequingInput = document.querySelector("#chequingInput");

var updateBalance = function(){
  savingsBalanceDiv.textContent = "$" + savingsAccount.balance.toFixed(2); 
  chequingBalanceDiv.textContent = "$" + chequingAccount.balance.toFixed(2); 
};

var withdraw = function(account, input, overdraw){
  var amount = Number(input.value);
  // if balance is lower than withdrawal amount
  if (account.balance < amount) {
    // see if there are sufficient extra funds in other account
    if (account.balance + overdraw.balance >= amount){
      // overdraw from other account
      amount -= account.balance;
      account.balance = 0;
      overdraw.balance -= amount;
      updateBalance();
    } else {
      alert("Insufficient funds");
    }
  } else {
    // withdraw from account
    account.balance -= amount;
    updateBalance();
  }
  // clear input on page
  input.value = "";
};

var deposit = function(account, input){
  var amount = Number(input.value);
  account.balance += amount;
  updateBalance();
  input.value = "";
}


savingsWithdrawButton.addEventListener('click', function(){
  withdraw(savingsAccount, savingsInput, chequingAccount);
  console.log(savingsAccount.balance);
});

savingsDepositButton.addEventListener('click', function(){
  deposit(savingsAccount, savingsInput);
});

chequingWithdrawButton.addEventListener('click', function(){
  withdraw(chequingAccount, chequingInput, savingsAccount);
});

chequingDepositButton.addEventListener('click', function(){
  deposit(chequingAccount, chequingInput);
});

updateBalance();