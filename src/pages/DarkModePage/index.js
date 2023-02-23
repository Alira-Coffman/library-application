import { Alert, Button } from "react-bootstrap"
import { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"

function DarkMode()
{
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
    console.log('yoyou')
    return(
        <div>
            <Alert variant={darkMode ? 'dark' : 'light'}>
                I am an alert box. 
            </Alert>
            <Button onClick = {toggleDarkMode} variant={darkMode ? 'dark' : 'light'}>Switch to {darkMode? 'light' : 'dark'} mode</Button>
        </div>
    )
}
export default DarkMode