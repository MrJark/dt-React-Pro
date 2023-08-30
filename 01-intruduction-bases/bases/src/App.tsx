
import { Counter, CounterBy, CounterEffect } from "./bases";



function App () {
    return (
        <>
            <h1>React</h1>
            <hr />
            <Counter initialValue={15}/>
            <CounterBy initialValue={5} />
            <CounterEffect />
        </>
    )
}

export default App;