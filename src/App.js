import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext} from 'react';

//Components
import { Budget } from './components/Budget';
import { Remaining } from './components/Remaining';
import { ExpenseTotal } from './components/ExpenseTotal'
import { ExpenseList } from './components/ExpenseList';
import { AddExpenseForm } from './components/AddExpenseForm'

//App Context
import { AppContext, AppProvider } from './context/AppContext';
import { EditBudgetForm } from './components/EditBudgetForm';



function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1>My Budget Planner</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
          <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>
        <h2 className='mt-3'>Expenses</h2>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h2 className='mt-3'>Add Expense</h2>
        <div className='row mt-3'>
          <AddExpenseForm />
        </div>
      </div>
    </AppProvider>
    
  );
}

export default App;
