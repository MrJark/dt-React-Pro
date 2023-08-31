import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { MAX_COUNT } from '../constants';


export function useCounter () {

    const [counter, setCounter] = useState(5);

    /**
     * el useRef hace que no se renderice el componente otra vez y que mantenga su valor aunque lo demás cambie
     * por tanto, voy a usar el useRef para hacer referencia al elemento el cual quiero animar con gsoa y que no haya otro igual 
     * ya que si tengo otro elemento igual, con el mismo id, className o name, me lo va a animar porque está obteniendo el mismo nombre
    */
    const counterElement = useRef<HTMLHeadingElement>(null); // inicializo en null para que no se queje ts


    const handleClickUp = () => {
        // setCounter( counter + 1 ); // forma simple
        if ( counter >= MAX_COUNT ) return; // solución valida para tener el máx y que se pare ahí
        setCounter( prev => prev + 1 ); // otra forma de hacerlo
        // otra forma de hacer el max do👇🏼
        // setCounter( prev => Math.min( prev + 1, MAX_COUNT) ); // otra forma de hacerlo en una sola línea eliminando las dos de arriba
    };
    const handleClickDown = () => {
        if( counter <= 0 ) return;
        setCounter( counter - 1 );
    };

    useEffect(() => {
      if( counter < 10 ) return;

      // animaciones al llegar al max ( mala práctica en la forma en la cual está construida )
    //   gsap.to( counterElement.current ,{ y: -20, duration: 0.5, ease: 'ease.out' }) // para saber que elemntos tiene, buscar la doc de gspa y como son promesas, puedo usar los .then y .catch
    //     .then( () => {
    //         gsap.to( counterElement.current , {y: 0, duration: 0.2, ease: 'bounce.out'} )
    //     })
        // buena práctica de construcción del gsap
        const timeLine = gsap.timeline();

        timeLine.to( counterElement.current ,{ y: -20, duration: 0.5, ease: 'ease.out' } )
                .to( counterElement.current , {y: 0, duration: 0.2, ease: 'bounce.out'} );


    }, [counter])

    return {
        counter,
        handleClickDown,
        handleClickUp,
        counterElement,
    }
}