import Navbar from '../component/layout/Navbar'
import Hero from '../component/sections/Hero'

function App() {

  return (
    <>
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      <Navbar></Navbar>
    </div>
      <Hero></Hero>
    </>
  )
}

export default App
