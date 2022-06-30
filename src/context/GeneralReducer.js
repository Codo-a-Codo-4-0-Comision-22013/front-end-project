import { GET_POKEMON_LIST, GET_POKEMON, ADD_POKEMON, REMOVE_POKEMON } from "./types";

const GeneralReducer = (state, action) => {
    const {payload, type} = action;

    switch(type) {
        case GET_POKEMON_LIST:
					return {
						...state,
						pokemons: payload
					}

				case GET_POKEMON:
					return {
						...state,
						selectedPokemon: payload
					}
					
				case ADD_POKEMON:
					return {
						...state,
						team: [...state.team, payload]
					}
				case REMOVE_POKEMON:
					return {
						...state,
						team: payload
					}

				default: 
				 return state;
    }
}

export default GeneralReducer;
