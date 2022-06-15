import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import Badge from 'react-bootstrap/Badge'
import { AppContext } from '../context/AppContext';

export const ExpenseItem = ({id, name, cost}) => {
  const {dispatch} = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id
    });
  };
  
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {name}
        <div>
            <Badge pill variant="primary">${cost}</Badge>{" "}
            <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
        </div>
    </li>
  )
}
