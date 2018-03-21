import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../../actions/filters";
import moment from "moment";

test("should setup text filter action object", () => {
    const action = setTextFilter("Test");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "Test"
    })
});

test("should setup text filter action object with default", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: undefined
    })
}); 
test("should setup sortByDate action object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE",
    })
});

test("should setup sortByAmount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT",
    })
});

test("should setup setStartDate action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
});

test("should setup setEndDate action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
});
