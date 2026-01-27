import Footer from '../component/layout/Footer'
import Navbar from '../component/layout/Navbar'
import Hero from '../component/layout/Hero'

function Home() {
  return (
    <>
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      <Navbar></Navbar>
    </div>
      <Hero></Hero>
      <Footer></Footer>
    </>
  );
}

export default Home;
