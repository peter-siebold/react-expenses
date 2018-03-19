import { createStore, combineReducers } from "redux";

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