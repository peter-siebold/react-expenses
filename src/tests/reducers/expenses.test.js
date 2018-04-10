import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment"

test("should set default state", () => {
    const state = expensesReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual([]);
})

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})
test("should not remove expenses if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})


test("should add expense", () => {
    const newExpense = {
        id: "4", 
        description: "New Laptop",
        note: "",
        amount: 2500,
        createdAt:  moment(0).add(120, "days").valueOf()
    };
    const action = {
        type: "ADD_EXPENSE",
        expense: newExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense])
})
test("should edit expense", () => {
    const updates = {
        description: "Edited Expense"
    }
    const action = {
        type : "EDIT_EXPENSE",
        id: expenses[1].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toEqual(updates.description)
})
test("should not edit expense if id does not exists", () => {
    const updates = {
        description: "Edited Expense"
    }
    const action = {
        type : "EDIT_EXPENSE",
        id: "-1",
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test("should set expenses", () => {
    const action = {
        type: "SET_EXPENSES",
        expenses:[ expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]])
})