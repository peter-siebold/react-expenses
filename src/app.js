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
}))
const gasBill = store.dispatch(addExpense({
    description: "Gas Bill",
}))

store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));

setTimeout(() => {
    store.dispatch(setTextFilter("Gas"));
}, 3000)
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));

