
import { Counter, CounterBy, CounterEffect, CounterHook, CounterReducerComponent } from "./bases";
import { CounterReducerComponentRefactor } from "./modules/CounterReducerRefactor";



function App () {
    return (
        <>
            <h1>React</h1>
            <hr />
            <Counter initialValue={15}/>
            <CounterBy initialValue={5} />
            <CounterEffect />
            <CounterHook />
            {/* <CounterReducerComponent initialValue={15}/> */}
            <CounterReducerComponentRefactor />
        </>
    )
}

export default App;