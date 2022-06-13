import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../../components/card/Card'

const HomePage = () => {

  const [pokemonList, setPokemonList] = useState([]);


  const getPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
    const data = await res.json();
    setPokemonList(data.results);
  }

  useEffect(()=>{
    getPokemons();
  },[])

  if(pokemonList.length > 1){
    return (
      <div className='flex flex-wrap justify-center'>
        {pokemonList.map(pokemon => <Card key={pokemon.url} pokemon={pokemon.name} url={pokemon.url}/>)}
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