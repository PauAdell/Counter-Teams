// Import dependencies
import { render } from '@wordpress/element';
import { Counter, CounterS, Text, Infoequip } from './components/counter';

//Declaració de variables
let estat = {
	equipActiu: 'yyy',
	equips: {
		xxx: { id: 'xxx', nom: 'CapriSun', partits: 1, punts: 0 },
		yyy: { id: 'yyy', nom: 'Pistacho', partits: 3, punts: 2 },
		zzz: { id: 'zzz', nom: 'Baguette', partits: 2, punts: 1 },
		www: { id: 'www', nom: 'hola', partits: 2, punts: 1 },
	},
};

//Funcions
function setEquipActiu( equipActiu ) {
	estat = { ...estat, equipActiu };
	refresh();
}

function setPartits( partits ) {
	estat = {
		...estat,
		equips: {
			...estat.equips,
			[ estat.equipActiu ]: {
				...estat.equips[ estat.equipActiu ],
				partits,
			},
		},
	};
	refresh();
}

function setPunts( punts ) {
	estat = {
		...estat,
		equips: {
			...estat.equips,
			[ estat.equipActiu ]: {
				...estat.equips[ estat.equipActiu ],
				punts,
			},
		},
	};
	refresh();
}

// Render component in DOM
const wrapper = document.getElementById( 'react-example-wrapper' );
function refresh() {
	const equip = estat.equips[ estat.equipActiu ];
	const opcions = Object.values( estat.equips ).map( ( { id, nom } ) => ( {
		value: id,
		label: nom,
	} ) );
	render(
		<div>
			<Infoequip
				opcions={ opcions }
				equip={ equip }
				setEquip={ setEquipActiu }
				incPartits={ () => setPartits( equip.partits + 1 ) }
				incPunts={ () => setPunts( equip.punts + 1 ) }
				decPunts={ () => setPunts( equip.punts - 1 ) }
			/>
		</div>,
		wrapper
	);
}
refresh();