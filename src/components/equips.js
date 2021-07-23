import { Component, useState } from '@wordpress/element';

export const Infoequip = ( {
	opcions,
	equip,
	setEquip,
	incPartits,
	incPunts,
	decPunts,
} ) => {
	return (
		<div>
			<p>Estadistiques del equip:</p>

			{ opcions.map( ( { value, label } ) => (
				<button
					onClick={ () => setEquip( value ) }
					disabled={ value === equip.id }
				>
					{ label }
				</button>
			) ) }

			<p>Nom: { equip.nom } </p>
			<p>Partits jugats: { equip.partits } </p>
			<p>punts: { equip.punts } </p>

			<button
				onClick={ function ( event ) {
					incPunts();
					incPartits();
				} }
			>
				Juga i guanya partit + punt
			</button>
			<button onClick={ decPunts }> Penalitza punt</button>
		</div>
	);
};
