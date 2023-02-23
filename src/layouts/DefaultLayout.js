import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Header from "../components/Global/Header"
import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext"
export default function Layout()
{
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

    return(
        <div className={`${darkMode && 'bg-dark'} min-vh-100`}>
        
        <Header/>
        <Container className={`text-center `}>
            {/**Need outlet so it knows where the children routes are going.  */}
             <Outlet />
        </Container>
       

        </div>
    )
}