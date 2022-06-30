import React, { useContext } from 'react'
import TeamCard from '../../components/cards/TeamCard';
import GeneralContext from '../../context/GeneralContext'

const TeamPage = () => {

	const { team } = useContext(GeneralContext);

	if (team.length >= 1) {
		return (
			<div className='max-w-7xl min-h-full flex mx-auto p-1 md:p-12 rounded-xl shadow-2xl items-center justify-center'>
				<div className='grid gap-4 grid-cols-1 place-content-center md:md:grid-cols-3 xl:grid-cols-3'>
					{
						team.map((pokemon, index) => (<TeamCard key={index} name={pokemon.name} />))
					}
				</div>
			</div>
		)
	} else {

		return (
			<div className='max-w-3xl min-h-full flex flex-col mx-auto p-6 md:p-12 rounded-xl shadow-2xl items-center'>
				No hay pokemones en tu equipo
			</div>
		)

	}


}

export default TeamPage