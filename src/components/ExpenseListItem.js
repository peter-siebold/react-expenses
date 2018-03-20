import React from "react";
import {connect} from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) => (
    <div >
        <h4>{description}</h4>
        <p>Amount: {amount} -  created at: {createdAt}</p>
        <button onClick={ () => {
            console.log(id)
            dispatch(removeExpense({id}))
            } }>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);