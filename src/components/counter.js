import { Component, useState } from '@wordpress/element';
/*
export const Counter = ( { count, setCount } ) => {
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Suma
      </button>
      <button onClick={() => setCount(count - 1)}>
        Resta
      </button>
    </div>
  );
};
*/
export const Text = ( { text } ) => <h1>{ text }</h1>;

/*
export const CounterS = () => {

  const [ state, setState ]= useState( {valor : 3, nom: 'Pau'} );
  return (
    <div>
      <p>You clicked {state.valor} times. Hola, {state.nom} </p>
      <button onClick={() => {
        setState( {
          ...state,
          valor : state.valor + 1 });
        
      }}>
        Suma
      </button>
    </div>
  );
};
*/