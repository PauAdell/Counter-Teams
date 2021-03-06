import { useSelect, useDispatch } from '@wordpress/data';
import { v4 as uuid } from 'uuid';
import { Counter } from './counter';

export const CounterList = () => {
	const counterIds = useSelect( ( select ) =>
		select( 'react-example/counters' ).getCounterIds()
	);

	const { addCounter } = useDispatch( 'react-example/counters' );
	const afegircomptador = () => addCounter( uuid() );

	return (
		<div>
			{ counterIds.map( ( id ) => (
				<Counter key={ id } counterId={ id } />
			) ) }
			<button onClick={ afegircomptador }>Add Counter</button>
		</div>
	);
};
