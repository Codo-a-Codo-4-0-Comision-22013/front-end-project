import React, { useState } from 'react'
import { useEffect } from 'react';

const Card = ({pokemon, url}) => {
    const [pokemonData, setPokemonData] = useState();

    const getPokemonData = async ( ) => {
        const res = await fetch(url);
        const data = await res.json();
        setPokemonData(data);
    };

    useEffect(()=>{
        getPokemonData();
    }, [])

    if(pokemonData){     
        {console.log("Datos pokemon:",pokemonData.id)}   
        return (
            <div className='shadow hover:shadow-2xl max-w-sm rounded overflow-hidden flex flex-col justify-center items-center shadow-lg m-2 px-0.5 py-2 border border-gray-300'>
                <img className="w-full w-72 h-72" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`} alt="pokemon"></img>
                <div className="px-6 py-4 text-center">
                    <div className="font-bold text-xl mb-2">{pokemon}</div>
                    <p className="text-lime-600 text-base italic">
                        {pokemonData.types[0].type.name}
                    </p>
                </div>

                <div className="flex items-center px-6 pt-4 pb-2">
                    {pokemonData.types.map((e) => (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{e.type.name}</span>) )}
                </div>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to my team
                </button>
            </div>)
    }else {
        return(<p>Cargando...</p>)
    }

}

export default Card