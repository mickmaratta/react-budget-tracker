import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4 } from 'uuid';

export const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

  return (
    <form onSubmit={onSubmit}>
        <div className='row d-flex align-items-flex-start'>
            <div className='col-sm'>
                <input 
                    required='required'
                    type='text'
                    className='form-control mt-3'
                    id='name'
                    placeholder='Name...'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                ></input>
            </div>
            <div className='col-sm'>
                <input 
                    required='required'
                    type='text'
                    className='form-control mt-3'
                    id='cost'
                    placeholder='Cost...'
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                ></input>
            </div>
            <div className='col-sm'>
                <button type='submit' className='btn btn-primary mt-3'>
                    Save
                </button>
            </div>
        </div>
    </form>

  )
}
