import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const EditBudgetForm = () => {
  const { dispatch, budget } = useContext(AppContext)

  let newBudget;  
  const onSubmit = event => {
    event.preventDefault();
    dispatch({
        type: "EDIT_BUDGET",
        payload: newBudget
    })
    
  }
    return (
    <form onSubmit={onSubmit} className='alert alert-secondary d-flex align-items-center justify-content-between'>
        <div className='col-xs-2'>
        <input 
            required='required'
            type='number'
            className='form-control col-xs-2'
            id='name'
            placeholder='Budget...'
            value={newBudget}
            onChange={(event) => newBudget = event.target.value}
        ></input>
        </div>
        
        <button type='submit' className='btn btn-primary'>
          Save
        </button>
    </form>
  )
}
