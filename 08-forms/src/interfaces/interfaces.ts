

interface InitialValue {
    name: string,
    email: string ,
    password: string ,
    secondPassword: string ,
}

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export type {
    InitialValue,
    FormValues,
}