

export const LazyPage1 = () => {
    return (
        <>
            <h1>Page 1</h1>
        </>
    )
}

// Tengo que hacer este tipo de export mediante el default si quiero usar el lazy de React ya que el export const o export function no funciona hy a la vez dejar el export const si quiero tenerlo en un archivo de barril
export default LazyPage1;