import './App.css'
import {Navbar} from './Navbar/Navbar.jsx'
import './Navbar/Navbar.css'
import {EntryImages} from './EntryImages/EntryImages.jsx'
import {About} from './About/About.jsx'
import {Contact} from './Contact/Contact.jsx'
import {Footer} from './Footer/Footer.jsx'


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




