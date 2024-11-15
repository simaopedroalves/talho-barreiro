import './App.css'
import {Navbar} from './Components/Navbar/Navbar.jsx'
import './Components/Navbar/Navbar.css'
import {EntryImages} from './EntryImages/EntryImages.jsx'
import {About} from './Components/About/About.jsx'
import { Contact } from './Contact/Contact.jsx'
import { Footer } from './Components/Footer/Footer.jsx'


function App () {
  return (
    <>
    <Navbar />
    <EntryImages />
    <About />
    <Contact />
    <Footer />
    </>
  );
}

export default App




