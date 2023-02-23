import React, {createContext, useState} from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props){
    const [darkMode, setDarkMode] = useState(false);
    // Define a function named toggleDarkMode that toggles the value of darkMode state variable
    const toggleDarkMode = () => {
        setDarkMode(() => !darkMode)
    }
    // Render the component with a div element as the wrapper and the DarkModeContext.Provider component that takes in the value prop of an object containing the darkMode state and toggleDarkMode function as its value
    return(
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
    )
}

export {DarkModeContext, DarkModeProvider}