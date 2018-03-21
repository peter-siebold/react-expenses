import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
});
test("should setup edit expense action object", () => {
    const action = editExpense("123abc", {
        description : "test expense",
        amount: "500"
    });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            description : "test expense",
            amount: "500"
        }
    })
});

test("should setup an add expense action object", () => {
    const expenseData = {
        description: "Test Expense",
        amount: 5.00,
        note: "this is a test note",
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
           ...expenseData,
           id: expect.any(String)
        }
    })
});

test("should setup an add expense action object with defaults", () => {
    const expenseData = {
        description : "", 
        note : "", 
        amount : 0, 
        createdAt : 0 
    }
    const action = addExpense()
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
           ...expenseData,
           id: expect.any(String)
        }
    })
});