import React, { useReducer } from "react"
import GeneralContext from "./GeneralContext";
import axios from "axios";
import GeneralReducer from "./GeneralReducer";

const GeneralState = ({children}) => {

    const initialState = {
				pokemons: [],
				selectedPokemon: null,
        team: [],
				theme: "light"
    }

    const [state, dispatch] = useReducer(GeneralReducer, initialState);
    
    const getPokemonList= async () => {
			const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20')

			dispatch({ 
				type: 'GET_POKEMON_LIST',
				payload: res.data.results
			})
		}

		const getPokemon = async (url) => {
			const res = await axios.get(url)
			return res.data
		}

		const getPokemonDetails = async (url) => {
			const res = await axios.get(url)

			dispatch({ 
				type: 'GET_POKEMON',
				payload: res.data.results
			})
		}
    
		const addToTeam = async (pokemon) => {
			dispatch({
				type: 'ADD_POKEMON',
				payload: pokemon
			})
		}

		const removeFromTeam = async (name) => {

			const newTeam = state.team.filter( pokemon => pokemon.name !== name  )
			
			dispatch({
				type: 'REMOVE_POKEMON',
				payload: newTeam
			})
		}

    return (
      <GeneralContext.Provider value={{
				getPokemonList, 
				getPokemon, 
				addToTeam,
				removeFromTeam,
				pokemons: state.pokemons,
				selectedPokemon: state.selectedPokemon,
				team: state.team, 
				theme: state.theme  
			}}>

				{children}

    	</GeneralContext.Provider>
    )
}

export default GeneralState;