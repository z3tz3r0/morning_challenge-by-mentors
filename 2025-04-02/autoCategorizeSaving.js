"use strict";

class autoCategorizeSavingAccount {
    constructor(expenseRatio = 0.5, foodRatio = 0.3, debtRatio = 0.2) {
        const totalRatio = expenseRatio + foodRatio + debtRatio;
        if (totalRatio !== 1) {
            throw new Error("Total saving ratio must be equal to 1");
        }
        this.savingRatio = {
                expense: expenseRatio,
                food: foodRatio,
                debt: debtRatio
            }
        this.expenseSaving = 0;
        this.foodSaving = 0;
        this.debtSaving = 0;
    }
    get allSaving() {
        return this.expenseSaving + this.foodSaving + this.debtSaving;
    }

    deposit(amount) {
        if (amount <= 0 || typeof amount !== "number") {
            console.error("Error: Please provide a valid positive amount");
            return;
        }

        this.expenseSaving += amount * this.savingRatio.expense;
        this.foodSaving += amount * this.savingRatio.food
        this.debtSaving += amount * this.savingRatio.debt
        console.log(`Deposit successfully`)
        console.log(`You've deposit ${amount.toFixed(2)}`)
        console.log(`----Current Saving----`)
        console.log(`Expense: ${this.expenseSaving.toFixed(2)}`)
        console.log(`Food: ${this.foodSaving.toFixed(2)}`)
        console.log(`Debt: ${this.debtSaving.toFixed(2)}`)
    }
}

const mySaving = new autoCategorizeSavingAccount();

mySaving.deposit(5000)
console.log(mySaving.allSaving);

mySaving.deposit(-100); // Test error handling
mySaving.deposit("invalid"); // Test error handling