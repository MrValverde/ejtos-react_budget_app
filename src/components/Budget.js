import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency} = useContext(AppContext);

    const totalExpenses= expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const setBudget = (newBudget) =>{
        if (newBudget < totalExpenses) {
            alert ( "You cannot reduce the budget value lower than the spending.")
        } else {
            if (newBudget <= 20000){
                dispatch({
                    type: "SET_BUDGET",
                    payload: newBudget,
                }
                );
            } else {
                if (newBudget >20000){
                    
                    alert ("The value cannot exceed remaining funds £", expenses )
                }
            }
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input
            type="number"
            value={budget}
            step="10"
            onChange={(e) => setBudget(e.target.value)} />
            </span>
        </div>
    );
};

export default Budget;
