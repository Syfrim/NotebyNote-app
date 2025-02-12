import Why from "../assets/notebynote_why.jpg"
import How from "../assets/notebynote_howitworks.jpg"
import ShieldCheck from "../assets/icons/check.png"
import Coins from "../assets/icons/coins.png"
import Payment from "../assets/notebynote_payment.png"

function Features() {
  return (
    <section id="features" className="flex max-w-7xl flex-col gap-10 px-8 pt-10 lg:px-12 xl:m-auto xl:pt-20">
        <article className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full">
            <h2 className="mb-4 text-4xl font-semibold text-gray-800">Connecting passionate students with talented musicians</h2>
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
        <article className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row">


            <div className="flex flex-col justify-center gap-4 rounded-2xl bg-gray-100 p-10 xl:w-1/3">
                <div className="w-fit rounded-full bg-gray-200 p-4">
                    <img src={Coins} alt="" />
                </div>
                <h2 className="text-3xl font-semibold text-gray-800">Quality and Affordability</h2>
                <p className="text-gray-500 ">
                Amazing prices without compromise in quality                </p>
            </div>

            <div className="flex flex-col gap-8 overflow-hidden rounded-2xl bg-gray-200 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
                <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left md:mt-0">
                    <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
                        Send and receive money
                    </h2>
                    <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
                        Transfers are all done easily through Cash, Paynow or Paylah!
                    </p>
                </div>

                <div className="m-auto  mx-10 -translate-x-6">
                   <img src={Payment} alt="Frame displaying logos of payment solutions" /> 
                </div>
            </div>
        </article>
    </section>
  );
  
}

export default Features;


