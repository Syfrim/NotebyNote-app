import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Phone1 from "../assets/phone1.png";
import Piano1 from "../assets/piano1.jpg";

function Hero() {
    return( 
        <section className="relative items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[100vh] mt-4 flex h-fit max-w-7xl flex-col md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
            <div className="sm:w-full md:w-3/6">
                <h1 className="mx-auto mb-8 w-[12ch] text-center text-4xl text-black sm:text-5xl md:mx-0 md:text-left">Where Every Note Finds It's Perfect Match</h1>
                <p className="m-auto sm:w-[28ch] xl:w-[32ch] text-center text-black md:m-0 md:text-left text-xl overflow-auto">
                 Find your perfect piano teacher<br /> fast and easy!
                </p>
                
                <StoreLinks type={BtnTypes.Standard}/>

            </div>
           
            <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden">
                <img className="right-0 m-auto w-72 xl:absolute xl:left-6 xl:right-0 xl:mt-32 xl:w-80" src={Phone1} alt="NotebyNote app frame" />
                <img className="hidden rounded-2xl xl:flex " src={Piano1} alt="A woman happily using Kobodrop" />
            </div>


           
        </section>
    );
}

export default Hero;

