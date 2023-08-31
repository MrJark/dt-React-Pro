import { CounterState } from "./interfaces";

const MAX_COUNT = 10;

const INITIAL_STATE: CounterState = {
    counter: 10,
    previous: 0,
    changes: 0
}



export {
    MAX_COUNT,
    INITIAL_STATE,
    
}