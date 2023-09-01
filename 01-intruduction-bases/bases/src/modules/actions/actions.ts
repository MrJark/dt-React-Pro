import { CounterAction } from "../../typings/types"



// const doReset = ():CounterAction => { // forma larga
//     return {
//         type: 'reset'
//     }
// }
const doReset = ():CounterAction => ({ type: 'reset' }); // forma corta. Los paréntesis en este tipo de funciones significa un returno implícito y podemos omitir el retutn

// Tarea: hacer el doIncreaseBy ✅
const doIncreaseBy = ( value:number ):CounterAction => ( { type: 'increaseBy', payload: { value } })
const doDecreaseBy = ( value:number ):CounterAction => ( { type: 'decreaseBy', payload: { value } })

export {
    doReset,
    doIncreaseBy,
    doDecreaseBy,
}