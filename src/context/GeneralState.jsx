import React, { useReducer } from "react"
import GeneralContext from "./GeneralContext";
import axios from "axios";

const UserState = ({children}) => {

    const initialState = {
        team: [],
    }

    // const [first, setfirst] = useState(initialState)

    const [state, dispatch] = useReducer(UserReducer, initialState);
    
    const getPokemons= async () => {
			const res = await axios.get('https://reqres.in/api/users')

			dispatch({ 
				type: 'GET_USERS',
				payload: res.data.data
		})
		}
    
    // const getProfile = async (id) => {
		// 	const res = await axios.get('https://reqres.in/api/users/' + id)

		// 	dispatch({
		// 		type: 'GET_PROFILE',
		// 		payload: res.data.data
		// 	})
		// }


    return (
			<></>
      // <GeneralContext.Provider value={}>

			// 	{children}

    	// </GeneralContext.Provider>
    )
}

export default UserState;