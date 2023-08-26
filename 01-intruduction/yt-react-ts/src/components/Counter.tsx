import { useState } from 'react';



export const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const sumWithoutTS = () => { 
        setCounter(counter + 1)
    }
    const subWithoutTS = () => {
        if( counter <= 0 ) return
        setCounter(counter - 1)
    }
    const sumWithTS = ( n: number = 1 ):void => { // el tipado de la función es el :void
        // con el n le estoy diciendo que la función va a recibir un parámetro de tipo Number y que por defecto será 1
        setCounter2(counter2 + n)
    }
    const subWithTS = ( n: number = 1 ):void => {
        if( counter2 <= 0 ) return
        setCounter2(counter2 - n )
    }

    return (
        <>
            <h2>Counter: useState</h2>
            <div className="mt-5">
                <h3>Without TS</h3>
                <h4 className='mt-4'>Counter en: {counter}</h4>
                <div>
                    <button onClick={sumWithoutTS} className='btn btn-outline-secondary'>+</button>
                    <button onClick={subWithoutTS} className='btn btn-outline-secondary'>-</button>
                </div>
            </div>
            <div>
                <h3>With TS</h3>
                <h4 className='mt-4'>Counter en: {counter2}</h4>
                <div>
                    <button onClick={() => sumWithTS()} className='btn btn-outline-secondary'>+1</button>
                    <button onClick={() => subWithTS()} className='btn btn-outline-secondary'>-1</button>
                    <button onClick={() => sumWithTS(2)} className='btn btn-outline-secondary'>+2</button>
                    <button onClick={() => subWithTS(2)} className='btn btn-outline-secondary'>-2</button>
                </div>
            </div>
            <div className='mt-4'>
                <button onClick={ () => setCounter(0)} className='btn btn-outline-danger'>Reset</button>
                <button onClick={ () => setCounter2(0)} className='btn btn-outline-danger'>Reset2</button>
            </div>
        </>
    )
}
