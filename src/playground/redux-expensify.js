import { createStore, combineReducers } from "redux";
import uuid from "uuid"

// Actions

// ADD_EXPENSE
const addExpense = (
    { 
        description = "", 
        note = "", 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id,
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

// SET_TEXT_FILTER

const setTextFilter = (text) => ({
    type: "SET_TEXT_FILTER",
    text
})
// SORT_BY_DATE
const sortByDate= () => ({
    type: "SORT_BY_DATE",
})


// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
})
// SET_START_DATE

const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(({id}) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map(expense => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
}

const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_DATE": 
        return {
            ...state,
            sortBy: "date"
        }
        case "SORT_BY_AMOUNT": 
            return {
                ...state,
                sortBy: "amount"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
            case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}
// Filtering redux data
// Get visible expenses

const getVisibileExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = typeof text === "string" && expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        console.log("sortBy", sortBy)
        if(sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

const store = createStore(
    combineReducers({
        expenses : expensesReducer,
        filters: filterReducer
    })
);


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({
    description: "Coffee",
    amount: 200000,
    createdAt: -21000
}))

const expenseTwo = store.dispatch(addExpense({
    description: "Travels",
    amount: 5000,
    createdAt: -1000
}))

// store.dispatch(removeExpense({
//     id: expenseOne.expense.id
// }))

// store.dispatch(editExpense(expenseTwo.expense.id, {
//     amount : 70000
// }))


// store.dispatch(setTextFilter("Coffee"));
// store.dispatch(setTextFilter(""));

// store.dispatch(sortByDate());
store.dispatch(sortByAmount());


// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const blueprint = {
    expenses: [
        { 
            id: 'guid', 
            description: "short description (e.g. January rent, Summer vactions, etc.)",
            note: "optional note field with a longer description on the expenses",
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: "rent",
        sortBy: "date", // date|amount
        startDate: undefined,
        endDate: undefined
    }
};
