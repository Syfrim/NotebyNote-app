
import StoreLinks, { BtnTypes } from "../common/StoreLinks";

function Choice() {
  return (
    <section id="choice">
       

         <div className="flex items-center justify-center flex-col sm:flex-row">


            <button 
            onClick={() => window.open("https://www.whatsapp.com", "_blank")}   
            className="relative w-full flex h-screen items-center justify-center text-5xl text-white bg-cover bg-center transition duration-300 hover:brightness-50 active:brightness-75"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519076976365-9c64dbd98317?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
            >
            I am a Student
            </button>
            <button 
            onClick={() => window.open("https://www.whatsapp.com", "_blank")}  
            className="relative w-full flex h-screen items-center justify-center text-5xl text-white bg-cover bg-center transition duration-300 hover:brightness-50 active:brightness-75"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512148709442-eee63c4f5326?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
            >
            I am a Teacher
            </button>
            
        </div>
    </section>
  );

}

export default Choice;


