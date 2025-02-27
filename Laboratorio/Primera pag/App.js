import {useState} from "react"

function App {

    const shinyGa = "/imgenes/gast2.png";
    const normGa = "/imgenes/gast1.png";
    const [gast, setGast] = useState(normGa)

    const shynyGast = () => {
        if (gast == normGa){
            setGast(shinyGa)
        }else{
            setGast(normGa)
        }
    }
}