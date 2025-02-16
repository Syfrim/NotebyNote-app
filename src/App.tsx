import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";
import Choice from "./sections/Choice";
import WhatsappIcon from "../src/assets/whatsapp-svgrepo-com (1).png"

function App() {
  return(
    <>
        <Nav />
        <Hero />
        <Features />
        <Reviews />
        <Choice />
        <Footer />
        <button className="fixed bottom-6 right-8 size-14 z-50" onClick={() => window.open("https://wa.me/6596527576?text=Hello%2C%20I%E2%80%99m%20looking%20for%20a%20piano%20teacher%20for%20my%20child.%20Could%20you%20help%20me%20find%20the%20right%20match%3F", "_blank")} >
        <img 
          src={WhatsappIcon}
          alt="WhatsApp" 
          className="w-full h-full"
        />
        </button>
    </>
  );
}

  
export default App;