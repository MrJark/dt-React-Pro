import { useCounter } from '../hooks'




export const CounterHook = () => {

    // me llevo todo el contenido al hook
    const { counter, handleClickDown, handleClickUp, counterElement } = useCounter()

    return (
        <>
            <h2>CounterHook:</h2>
            <h3 ref={ counterElement } > { counter } </h3>

            <button onClick={handleClickUp}>+1</button>
            <button onClick={handleClickDown}>-1</button>
            
        </>
    )
}
