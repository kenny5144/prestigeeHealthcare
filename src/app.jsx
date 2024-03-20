import Footer from "./component/footer/Footer";
import Main from "./component/main/main";
import Navbar from "./component/navbar/navbar";
import Ourservice from "./component/services/Ourservice";
import Contact from "./component/contact/Contact"
import Ourmission from "./component/Ourmission/Ourmission";


export function App() {

  return (
    <>
    <div className="bg-main">

      <Navbar/>
      <Main/>
      <Ourmission/>
      <Ourservice/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}
