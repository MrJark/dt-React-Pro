import { useReducer } from 'react'
import { INITIAL_STATE } from '../constants'

import { counterReducer } from './states/counterReducer';

// cuando importas muchos elementos, muchas veces 
import { doDecreaseBy, doIncreaseBy, doReset } from './actions/actions';

export const CounterReducerComponentRefactor = () => {

    // const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE); // puedo desestructurar del state
    const [ counterState , dispatch] = useReducer(counterReducer, INITIAL_STATE); // puedo desestructurar del state

    const handleReset = () => {
        // setCounter( counter + 1 ); // forma simple
        // setCounter( prev => prev + 1 ); // otra forma de hacerlo
        dispatch( doReset() ) // cambió el {type: 'reset'} a uma función
    };
    const handleClickUp = ( value: number ) => {
        // setCounter( counter - 1 );
        // dispatch({ type: 'increaseBy', payload: { value } })
        dispatch( doIncreaseBy(value) )
    };
    const handleClickDown = ( value: number ) => {
        // if( counter <= 0 ) return;
        // setCounter( counter - 1 );
        // dispatch({ type: 'decreaseBy', payload: { value } })
        dispatch( doDecreaseBy(value) )
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
