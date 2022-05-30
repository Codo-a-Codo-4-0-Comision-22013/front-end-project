import ThemeContext from '../../context/ThemeContext';
import React from "react";

const ThemeProvider = ({children}) => {
    const [dark, setDark] = React.useState(false);
    
    const toggleDark = (e, dark2) => {
      
        let dark = !dark2
        setDark(dark)
        console.log('toggle to: ' + dark)
    }
    
    
    return (
      <ThemeContext.Provider value={{dark, toggleDark}}>
          {children}
      </ThemeContext.Provider>
    )
  }

  export default ThemeProvider;