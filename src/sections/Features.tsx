import Why from "../assets/notebynote_why.jpg"
import How from "../assets/notebynote_howitworks.jpg"
import Convinience from "../assets/notebynote_convinience.jpg"
import Flexibility from "../assets/notebynote_flexibility.jpg"

import ShieldCheck from "../assets/icons/check.png"
import Coins from "../assets/icons/coins.png"
import Payment from "../assets/notebynote_payment.png"

function Features() {
  return (
    <section id="features" className="flex max-w-7xl flex-col gap-10 px-8 pt-10 lg:px-12 xl:m-auto xl:pt-20 pb:10">
        <article className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full">
            <h2 className="mb-4 text-4xl text-gray-800">Connecting passionate students with talented musicians</h2>
            <p>
                Great teaching with affordable costs
            </p>
        </article>

        <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
           

            <div className="m-auto md:w-2/5">
                <img  src={Why} alt="NotebyNote App Frame" className="justify-center"/> 
            </div>
            <div className="m-auto md:w-2/5">
                <img  src={How} alt="NotebyNote App Frame" className="justify-center"/> 
            </div>
        

           
        </article>
        <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
           

            <div className="m-auto md:w-2/5">
                <img  src={Flexibility} alt="NotebyNote App Frame" className="justify-center"/> 
            </div>
            <div className="m-auto md:w-2/5">
                <img  src={Convinience} alt="NotebyNote App Frame" className="justify-center"/> 
            </div>
        

           
        </article>
        
    </section>
  );

}

export default Features;


