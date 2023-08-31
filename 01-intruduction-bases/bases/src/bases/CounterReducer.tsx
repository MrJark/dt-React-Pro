import { useReducer } from 'react'
import { INITIAL_STATE } from '../constants'
import { CounterState } from '../interfaces'
import { CounterAction } from '../types';

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0,
            }
        }
        
    return state;
}

export const CounterReducerComponent = () => {

    // const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE); // puedo desestructurar del state
    const [ { counter } , dispatch] = useReducer(counterReducer, INITIAL_STATE); // puedo desestructurar del state

    const handleClickUp = () => {
        // setCounter( counter + 1 ); // forma simple
        // setCounter( prev => prev + 1 ); // otra forma de hacerlo
        dispatch( { type: 'reset' } )
    };
    // const handleClickDown = () => {
    //     if( counter <= 0 ) return;
    //     setCounter( counter - 1 );
    // };

    return (
        <>
            <h2>Counter Reducer: { counter }</h2>

            <button onClick={handleClickUp}>Reset</button>
            {/* <button onClick={handleClickDown}>-1</button> */}
            
        </>
    )
}
