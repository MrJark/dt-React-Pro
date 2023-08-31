import { useReducer } from 'react'
import { INITIAL_STATE } from '../constants'
import { CounterState } from '../typings/interfaces'
import { CounterAction } from '../typings/types';

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0,
            }
        case 'increaseBy':
            return {
                changes: state.changes + 1,
                counter: state.counter + action.payload.value,
                previous: state.counter,
            }
        case 'decreaseBy':
            return {
                changes: state.changes + 1,
                counter: state.counter - action.payload.value,
                previous: state.counter,
            }
        }
    return state;
}

export const CounterReducerComponentRefactor = () => {

    // const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE); // puedo desestructurar del state
    const [ counterState , dispatch] = useReducer(counterReducer, INITIAL_STATE); // puedo desestructurar del state

    const handleReset = () => {
        // setCounter( counter + 1 ); // forma simple
        // setCounter( prev => prev + 1 ); // otra forma de hacerlo
        dispatch( { type: 'reset' } )
    };
    const handleClickUp = ( value: number ) => {
        // setCounter( counter - 1 );
        dispatch({ type: 'increaseBy', payload: { value } })
    };
    const handleClickDown = ( value: number ) => {
        // if( counter <= 0 ) return;
        // setCounter( counter - 1 );
        dispatch({ type: 'decreaseBy', payload: { value } })
    };

    return (
        <>
            <h2>Counter Reducer:</h2>
            <pre>{JSON.stringify( counterState, null, 2)}</pre>

            <button onClick={() => handleClickUp(1)}>+1</button>
            <button onClick={() => handleClickUp(5)}>+5</button>
            <button onClick={() => handleClickUp(10)}>+10</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={() => handleClickDown(1)}>-1</button>
            <button onClick={() => handleClickDown(5)}>-5</button>
            <button onClick={() => handleClickDown(10)}>-10</button>
            {/* <button onClick={handleClickDown}>-1</button> */}
            
        </>
    )
}
