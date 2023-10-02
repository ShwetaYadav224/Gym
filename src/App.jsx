import React from "react"
import Home from "./Pages/home/Home"
import About from "./Pages/about/About"
import Gallary from "./Pages/gallary/Gallary"
import Contacts from "./Pages/contacts/Contacts"
import Plans from "./Pages/plans/Plans"
import Trainer from "./Pages/trainer/Trainer"
import NotFound from "./Pages/notfound/NotFound"
function App() {
  return (
    <div>
      <Home></Home>
      <About/>
      <Contacts/>
      <Gallary/>
      <Plans/>
      <Trainer/>
      <NotFound/>
    </div>
  )
}

export default App