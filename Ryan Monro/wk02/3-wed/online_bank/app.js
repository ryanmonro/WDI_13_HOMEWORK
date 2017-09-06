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

var withdraw = function(account, input){
  var amount = Number(input.value);
  if (account.balance < amount) {
    alert("Insufficient funds")
  }
  else {
    account.balance -= amount;
    updateBalance();
  }
  input.value = "";
};

var deposit = function(account, input){
  var amount = Number(input.value);
  account.balance += amount;
  updateBalance();
  input.value = "";
}


savingsWithdrawButton.addEventListener('click', function(){
  withdraw(savingsAccount, savingsInput);
  console.log(savingsAccount.balance);
});

savingsDepositButton.addEventListener('click', function(){
  deposit(savingsAccount, savingsInput);
});

chequingWithdrawButton.addEventListener('click', function(){
  withdraw(chequingAccount, chequingInput);
});

chequingDepositButton.addEventListener('click', function(){
  deposit(chequingAccount, chequingInput);
});

updateBalance();