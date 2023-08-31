import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { MAX_COUNT } from '../constants';


export function useCounter ({ maxCount = MAX_COUNT }) {

    const [counter, setCounter] = useState(5);

    const tl = useRef( gsap.timeline() ); // esto es para que solo se me cree una vez el time line del gsap porque sino, cada vez que el counter cambia, este hará la animación

    /**
     * el useRef hace que no se renderice el componente otra vez y que mantenga su valor aunque lo demás cambie
     * por tanto, voy a usar el useRef para hacer referencia al elemento el cual quiero animar con gsoa y que no haya otro igual 
     * ya que si tengo otro elemento igual, con el mismo id, className o name, me lo va a animar porque está obteniendo el mismo nombre
    */
    const counterElement = useRef<HTMLHeadingElement>(null); // inicializo en null para que no se queje ts


    const handleClickUp = () => {
        // setCounter( counter + 1 ); // forma simple
        if ( counter >= maxCount ) return; // solución valida para tener el máx y que se pare ahí
        setCounter( prev => prev + 1 ); // otra forma de hacerlo
        // otra forma de hacer el max do👇🏼
        // setCounter( prev => Math.min( prev + 1, MAX_COUNT) ); // otra forma de hacerlo en una sola línea eliminando las dos de arriba
    };
    const handleClickDown = () => {
        if( counter <= 0 ) return;
        setCounter( counter - 1 );
    };

    useLayoutEffect(() => { // es igual que el useEffect pero para cunado el layout ya está creado

        if ( !counterElement.current ) return ;

        tl.current.to( counterElement.current ,{ y: -20, duration: 0.5, ease: 'ease.out' } )
            .to( counterElement.current , {y: 0, duration: 0.2, ease: 'bounce.out'} )
            .pause()

    }, []) // dependen vacia para que solo se ejecute la primera vez

    useEffect(() => {
    //   if( counter < 10 ) return;

      // animaciones al llegar al max ( mala práctica en la forma en la cual está construida )
    //   gsap.to( counterElement.current ,{ y: -20, duration: 0.5, ease: 'ease.out' }) // para saber que elemntos tiene, buscar la doc de gspa y como son promesas, puedo usar los .then y .catch
    //     .then( () => {
    //         gsap.to( counterElement.current , {y: 0, duration: 0.2, ease: 'bounce.out'} )
    //     })
        // buena práctica de construcción del gsap
        // const timeLine = gsap.timeline(); // elimino esto porque ya he creado el timeline en el useRef para que solo se ejecute una vez, al inicio

        // tl.current.to( counterElement.current ,{ y: -20, duration: 0.5, ease: 'ease.out' } )
        //     .to( counterElement.current , {y: 0, duration: 0.2, ease: 'bounce.out'} );

        tl.current.play(0); // para que se ejecute en el segundo cero y cada vez que cambie el counter

    }, [counter])

    return {
        counter,
        handleClickDown,
        handleClickUp,
        counterElement,
    }
}