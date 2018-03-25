import React from "react";
import {ExpensesSummary} from "../../components/ExpensesSummary";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";



test("should render ExpensesSummary with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
})
test("should render ExpensesSummary with multiple expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={120} expensesTotal={235456456} />);
    expect(wrapper).toMatchSnapshot();
})
