import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import { Routes,Route } from "react-router-dom"
import Shop from "./pages/Shop"
import Categories from "./pages/Categories"
import Footer from "./components/Footer"
 
 const App = () => {
   return (
     <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/shop" element={<Shop/>}/>

      </Routes>
      <Footer/>
     </div>
   )
 }
 
 export default App