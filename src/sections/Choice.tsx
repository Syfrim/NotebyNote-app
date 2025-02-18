
function Choice() {
  return (
    <section id="choice" className="px-4 py-4"> 
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        
        <button 
          onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfUSkJVRB8aGGUxb9XT19qbiXyhgD9ZwMVqNWiAAW4C-q8FuA/viewform?usp=header", "_blank")}   
          className="relative rounded-2xl flex items-center justify-center text-3xl sm:text-5xl text-white bg-cover bg-center transition duration-300 hover:brightness-50 active:brightness-75 p-4 w-[92.5%] sm:w-[48%] aspect-square sm:aspect-[2/1]"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1519076976365-9c64dbd98317?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >
          I am a Student
        </button>

        <button 
          onClick={() => window.open("https://forms.gle/ZcWcVZ1z1ih1WhxR6", "_blank")}  
          className="relative rounded-2xl flex items-center justify-center text-3xl sm:text-5xl text-white bg-cover bg-center transition duration-300 hover:brightness-50 active:brightness-75 p-4 w-[92.5%] sm:w-[48%] aspect-square sm:aspect-[2/1]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512148709442-eee63c4f5326?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >
          I am a Teacher
        </button>

      </div>
    </section>
  );
}

export default Choice;
