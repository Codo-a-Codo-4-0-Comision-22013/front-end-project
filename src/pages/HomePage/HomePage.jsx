import React, { useContext, useEffect } from 'react'
import Card from '../../components/card/Card'
import GeneralContext from '../../context/GeneralContext'

const HomePage = () => {
	const { getPokemonList, pokemons } = useContext(GeneralContext)

  useEffect(()=>{
		getPokemonList();
  },[])

  if( pokemons.length > 1){
		return (
			<div className='grid gap-4 grid-cols-1 place-content-center md:md:grid-cols-3 xl:grid-cols-6 '>
        {pokemons.map(pokemon => <Card key={pokemon.url} url={pokemon.url}/>)}
      </div>
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