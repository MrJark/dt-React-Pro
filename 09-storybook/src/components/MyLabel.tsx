import './CSS/MyLabel.css'

// Para modificar el comportamiento lo hago a través de las props
// la sintaxis de /** */ y el contenido es una especie de titulo para las props que se ve en storybook en la parte de los docs
/**
 * * Tarea crear y que funcione:
 * allCaps?: boolean,
 * color?: 3 son las selecciones que podría tener que son los que hay en el css
 * fontColor: string este se tiene que aplicar al color del texto del span
 */
interface Porps {
    /**
     * Text to display
     */
    label: string,

    /**
     * Label size
     */
    size?: 'h1' | 'h2' | 'h3' | 'p', // esta es una de las clases que están definidas en el archivo css pero también se podría poner de tipo string pero estaría dando pie al user a que ponga lo que quiera y solo tienes las clases que están definidas en el css

    /**
     * All Caps
     */
    allCaps?: boolean,
    
    /**
     * All Caps
     */
    toRounded?: boolean,

    /**
     * Rounded Style
     */
    roundedStyle?: 'background-rounded',

    /**
     * The Background
     */
    theBackground?: string, 

    /**
     * Font Color
     */
    fontColor?: string,
}

export const MyLabel = ({ 
    // estos elementos que ponga aquí son los que aparecen en la fila 'default' de story y si no pongo nada, no aparece nada en default
    label, 
    size = 'h1',
    roundedStyle,
    fontColor,
    toRounded = false,
    theBackground,
    allCaps = false,
}: Porps) => {
    return (
        <span 
            className={`
                ${size} 
                ${ toRounded ? roundedStyle : ''}
            `}
            style={{ color: fontColor, backgroundColor: theBackground }}
            
        >{ allCaps ? label.toUpperCase() : label }</span>
    )
}
