import { CounterState } from "../../typings/interfaces"
import { CounterAction } from "../../typings/types"



export const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

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
        default:
            return state
    }
}
