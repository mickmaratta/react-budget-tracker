import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            };
        case "SAVE_BUDGET":
            return {
                ...state,
                budget: action.payload
            };
        case "EDIT_BUDGET":
            return {
                ...state,
                editBudget: action.payload
            };
        default:
            return state;
    }
}

const initialState = {
    budget: 0,
    expenses: [],
    editBudget: false
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider 
            value={{
                budget: state.budget,
                expenses: state.expenses,
                editBudget: state.editBudget,
                dispatch 
        }}>
            {props.children}
        </AppContext.Provider>
    );
}