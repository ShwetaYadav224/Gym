import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Pages/home/Home"
import About from "./Pages/about/About"
import Gallary from "./Pages/gallary/Gallary"
import Contacts from "./Pages/contacts/Contacts"
import Plans from "./Pages/plans/Plans"
import Trainer from "./Pages/trainer/Trainer"
import NotFound from "./Pages/notfound/NotFound"
import Navbar from "./components/Navbar" 
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Home></Home>
      <About/>
      <Contacts/>
      <Gallary/>
      <Plans/>
      <Trainer/>
      <NotFound/>
    </BrowserRouter>
  )
}

export default App