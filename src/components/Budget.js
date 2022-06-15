import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Budget = () => {
  const { budget, dispatch, editBudget } = useContext(AppContext); 
  
  let newBudget; 

  const onSubmit = event => {
    event.preventDefault();
    dispatch({
        type: "SAVE_BUDGET",
        payload: newBudget
    })
    dispatch({
      type: "EDIT_BUDGET",
      payload: !editBudget
    })
  }

  const handleEditClick = (event) => {
    dispatch({
      type: "EDIT_BUDGET",
      payload: !editBudget
    })
  }
  

  if (!editBudget) {
    return (
      <div className='alert alert-secondary d-flex align-items-center justify-content-between'>
          <span>Budget: ${budget}</span>
          <button type='submit' className='btn btn-primary btn-sm' onClick={handleEditClick}>
            Edit
          </button>
      </div>
  )} else {
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
          
          <button type='submit' className='btn btn-primary btn-sm'>
            Save
          </button>
      </form>
    )
  }

}

