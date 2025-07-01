import Featured from "../../Components/Featured/Featured"
import Header from "../../Components/Header/Header"
import Navbar from "../../Components/Navbar/Navbar"
import "./home.css"
const Home = () => {
  return (
    
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          {/* <Featured /> */}
        </div>
    </div>
  )
}

export default Home