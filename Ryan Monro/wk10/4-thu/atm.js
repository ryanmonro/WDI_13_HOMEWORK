class ATM{
  constructor(type){
    this.type = type
    this.balance = 0
    this.transactionHistory = []
  }

  showBalance(){
    console.log(`Balance: $${this.balance}`)
  }

  withdraw(amount){
    this.balance -= amount
    this.recordTransaction(amount, 'withdrawal')
    return this.balance
  }

  deposit(amount){
    this.balance += amount
    this.recordTransaction(amount, 'deposit')
    return this.balance
  }

  recordTransaction(amount, type){
    var transaction = {
      type: type,
      amount: amount,
      balanceAfter: this.balance
    }
    this.transactionHistory.push(transaction)
  }

  listTransactions(){
    console.log("Transaction History: ")
    this.transactionHistory.forEach((tr) => console.log(tr))
  }
}

var atm = new ATM('savings')
atm.showBalance()
atm.deposit(100)
atm.withdraw(23)
atm.showBalance()
atm.listTransactions()