import { Link } from "react-router-dom"
import "../components/styles.css"
function Home(){


    return(
        <>
         <div className="head">
         <Link to="/">Main</Link> 
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      
       

        <h1>this is home page</h1>
        </div>
        
        </>
    )
}

export default Home