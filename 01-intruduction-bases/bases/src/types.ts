

type CounterAction = 
    | { type: 'increaseBy', payload: { value: number }}
    | { type: 'reset' }


export type {
    CounterAction,
}