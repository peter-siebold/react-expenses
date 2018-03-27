import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";
import thunk from "redux-thunk";


const compoeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses : expensesReducer,
            filters: filterReducer
        }), 
        compoeEnhancers(applyMiddleware(thunk))
    );
    return store;
}