
interface Route {
    to: string,
    path: string,
    Component: () => JSX.Element
    name: string,
}

export type {
    Route
}