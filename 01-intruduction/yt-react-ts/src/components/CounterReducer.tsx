import { useReducer } from "react";

// para el manejo del estado necesito un elemento más complejo que un número, por eso hago el obj
const initialState = {
    counter: 0
};

type ActionType = // estos son los tipos de action que quiero tener y el pipe, |, siginifica ' o '
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'custom', payload: number}

// un reducer siempre va a retornar un nuevo state y nunca se va a modificar el initial, siempre se hará una copia del mismo y esta será la que se modifique
const counterReducer = ( state: typeof initialState, action: ActionType) => { // le digo que tipo de forma debe tener tanto el action como el state
    
    switch ( action.type ) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'custom':
            return {
                ...state,
                counter: action.payload
            }
        default:
            return state
    }

    return state;
}


export const CounterReducer = () => {

    const [ counterState, dispatch ] = useReducer(counterReducer, initialState )

    return (
        <>
            <h2>useReducer</h2>
            <hr />
            <h3>Counter: { counterState.counter }</h3>
            <div>
                <button className=" btn btn-outline-secondary" onClick={() => dispatch({ type: 'increment' })}>+1</button>
                <button className=" btn btn-outline-secondary" onClick={() => dispatch({ type: 'decrement' })}>-1</button>
            </div>
        </>
    )
}
