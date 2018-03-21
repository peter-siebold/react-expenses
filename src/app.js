import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore";

import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibileExpenses from "./selectors/expenses";

import "normalize.css/normalize.css"
import "./styles/styles.scss";

const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
    console.log("visibleExpenses: ", visibleExpenses);
})

const waterBill = store.dispatch(addExpense({
    description: "Water Bill",
    amount: 200000,
    createdAt: 1522231200000
}))
const gasBill = store.dispatch(addExpense({
    description: "Gas Bill",
    amount: 2000,
    createdAt: 1520161200000
}))
const rent = store.dispatch(addExpense({
    description: "Rent",
    amount: 1000,
    createdAt: 2000
}))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));

