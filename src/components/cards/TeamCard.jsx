import React, { useContext, useState, useEffect } from 'react'
import GeneralContext from '../../context/GeneralContext';

const TeamCard = ({name}) => {
    const [pokemon, setPokemon] = useState();
		const { getPokemon, addToTeam }= useContext(GeneralContext)

    const getPokemonData = async () => {
				const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
        const data = await getPokemon(url);
        setPokemon(data);
    };

    useEffect(()=>{
        getPokemonData();
    }, [])

    if(pokemon){     
        return (
            <div className='shadow hover:shadow-2xl max-w-sm rounded overflow-hidden flex flex-col justify-center items-center shadow-lg m-2 px-0.5 py-2 border border-gray-300'>
                <img className="w-full w-72 h-72" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="pokemon"></img>
                <div className="px-6 py-4 text-center">
                    <div className="font-bold text-xl mb-2">{pokemon.name}</div>
                    <p className="text-lime-600 text-base italic">
                        {pokemon.types[0].type.name}
                    </p>
                </div>

                <div className="flex items-center px-6 pt-4 pb-2">
                    {pokemon.types.map((e) => (<span key={e.type.name} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{e.type.name}</span>) )}
                </div>

								<ul>
									{pokemon.stats.map( (e, index) => <li key={index}><span className='bold'>{e.stat.name}</span> {e.base_stat}</li>)}
								</ul>
            </div>)
    }else {
        return(<p>Cargando...</p>)
    }

}

export default TeamCard