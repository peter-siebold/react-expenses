import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startAddExpense, addExpense, editExpense, removeExpense} from "../../actions/expenses";
import expenses from "../fixtures/expenses";

const creaeMockStore = configureMockStore([ thunk ]);

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
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
});


test("should add expense to db and store", (done) => {
    const store = creaeMockStore({});
    const expenseData = {
        description: "Mouse",
        amount: 3000,
        note: "This one is better",
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        done();
    })

})

// test("should setup an add expense action object with defaults", () => {
//     const expenseData = {
//         description : "", 
//         note : "", 
//         amount : 0, 
//         createdAt : 0 
//     }
//     const action = addExpense()
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//            ...expenseData,
//            id: expect.any(String)
//         }
//     })
// });