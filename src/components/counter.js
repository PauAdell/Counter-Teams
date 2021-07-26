import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';

const Counter = ( { value, onDelete, onIncrease, onDecrease } ) => (
  <div>
    <div>Counter: <strong>{ value }</strong></div>
    <button onClick={ onIncrease }>+</button>
    <button onClick={ onDecrease }>-</button>
    <button onClick={ onDelete }>Delete</button>
  </div>
);

const withValue = withSelect( ( select, { counterId } ) => {
  const { getCounterValue } = select( 'react-example/counters' );
  return {
    value: getCounterValue( counterId ),
  };
} );

const withActions = withDispatch( ( dispatch, { counterId, value } ) => {
  const {
    setCounterValue,
    removeCounter,
  } = dispatch( 'react-example/counters' );
  return {
    onIncrease: () => setCounterValue( counterId, value + 1 ),
    onDecrease: () => setCounterValue( counterId, value - 1 ),
    onDelete: () => removeCounter( counterId ),
  };
} );

export default compose( withValue, withActions )( Counter );
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