import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="isActive" to="/" exact={true}>Dashboard</NavLink>
        <NavLink activeClassName="isActive" to="/create">Create Expense</NavLink>
    </header>
)

export default Header;