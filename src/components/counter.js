import { compose } from '@wordpress/compose';
import { useSelect, useDispatch } from '@wordpress/data';

export const Counter = ( { counterId } ) => {
	const value = useSelect( ( select ) =>
		select( 'react-example/counters' ).getCounterValue( counterId )
	);
	const { removeCounter, setCounterValue } = useDispatch(
		'react-example/counters'
	);
	const onIncrease = () => setCounterValue( counterId, value + 1 );
	const onDecrease = () => setCounterValue( counterId, value - 1 );
	const onDelete = () => removeCounter( counterId );

	return (
		<div>
			<div>
				Counter: <strong>{ value }</strong>
			</div>
			<button onClick={ onIncrease }>+</button>
			<button onClick={ onDecrease }>-</button>
			<button onClick={ onDelete }>Delete</button>
		</div>
	);
};