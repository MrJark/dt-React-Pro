
import { Counter, CounterBy, CounterEffect, CounterHook, CounterReducerComponent } from "./bases";



function App () {
    return (
        <>
            <h1>React</h1>
            <hr />
            <Counter initialValue={15}/>
            <CounterBy initialValue={5} />
            <CounterEffect />
            <CounterHook />
            <CounterReducerComponent initialValue={15}/>
        </>
    )
}

export default App;