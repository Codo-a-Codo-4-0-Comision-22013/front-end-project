import React, { useContext, useEffect } from 'react'
import HomeCard from '../../components/cards/HomeCard'
import GeneralContext from '../../context/GeneralContext'

const HomePage = () => {
	const { getPokemonList, pokemons } = useContext(GeneralContext)

  useEffect(()=>{
		getPokemonList();
  },[])

  if( pokemons.length > 1){
		return (
		<>
			<h1 className='text-4xl font-bold text-center'>Choose your team!</h1>
			<div className='grid gap-4 grid-cols-1 place-content-center md:md:grid-cols-3 xl:grid-cols-6 '>
        {pokemons.map(pokemon => <HomeCard key={pokemon.url} name={pokemon.name}/>)}
      </div>
		</>
    )
  }else{ 
    return (
      <>
        <h3>Pokedex</h3>
        <p>Cargando Pokemones....</p>
      </>
    )
  }
}

export default HomePage