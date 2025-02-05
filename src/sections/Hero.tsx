
import StoreLinks from "../common/StoreLinks";
import Phone from "../assets/app_frame.png";
import HeroImage from "../assets/hero.png";

function Hero() {
    return( 
        <section>
            <div>
                <h1>Start spending the smart way</h1>
                <p>
                    Take Control of Your Finances Anytime, Anywhere with Kobodrop, Discover the Smart Way to Use Your Money!
                </p>

                <StoreLinks />

            </div>
           
            <div>
                <img src={Phone} alt="Kobodrop app frame" />
                <img src={HeroImage} alt="A woman happily using Kobodrop" />
            </div>


           
        </section>
    );
}

export default Hero;

