import CardUi from "./layout/CardUi"
import Header from "./layout/Header"
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./pages/Home"
import About from "./pages/About"
const App = () => {
  return (
   <>
      <Header />
      {/* <Home/> */}
      <About/>
    </>
  )
}

export default App