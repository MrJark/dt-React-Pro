import { InitialValue } from "../interfaces/interfaces"



const initialValue: InitialValue = {
    name: '',
    email: '',
    password: '',
    secondPassword: '',
}

const initialValuesToDynamicForm: { [x: string]: any } = {};

export {
    initialValue,
    initialValuesToDynamicForm,
}