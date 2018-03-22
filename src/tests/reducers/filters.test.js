import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
    const state = filtersReducer(undefined, { type : "@@INIT"});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
});
test("should set sortby to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe("amount");
})
test("should set sortby to amount", () => {
    const defaultState = {
        text: "",
        sortBy: "amount",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    }
    const action = { type: "SORT_BY_DATE"};
    const state = filtersReducer(defaultState, action);
    expect(state.sortBy).toBe("date");
})
test("should set text filter", () => {
    const action = {
        type: "SET_TEXT_FILTER",
        text: "testfilter"
    }
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        text: "testfilter",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
});
test("should set start date", () => {

    const startDate = moment()
     const action = {
         type: "SET_START_DATE",
        startDate: moment()
     }
     const state = filtersReducer(undefined, action)
     expect(state.startDate).toEqual(startDate)
})

test("should set end date", () => {

    const endDate = moment()
     const action = {
         type: "SET_END_DATE",
         endDate: moment()
     }
     const state = filtersReducer(undefined, action)
     expect(state.endDate).toEqual(endDate)
})