import StoreLinks, { BtnTypes } from "../common/StoreLinks";
{/*import Twitter from"../assets/logos/icons8-twitterx.svg";
import Facebook from"../assets/logos/icons8-facebook.svg";
import Linkedin from"../assets/logos/icons8-linkedin.svg";
import ButtonLink from "../common/ButtonLink";
import { NotebyNoteLogo } from "./Nav";*/}
import { InstagramLogo } from "../common/StoreLinks";
import { WhatsappLogo } from "../common/StoreLinks";



function Footer() {
  return (
    <section className="bg-gray-800">
        <div className="flex max-w-7xl flex-col px-8 py-8 text-gray-300 lg:px-12 xl:m-auto">
            <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
                <div>
                    <p className="translate-y-12">NotebyNote</p> 

                    
                </div>
                {/*
                <div className="flex gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-400">Product</p>
                        <a href="#">Overview</a>
                        <a href="#">Features</a>
                        <a href="#">Solutions</a>
                        <a href="#">Contact</a>
                        <a href="#">Releases</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-400">Resources</p>
                        <a href="#">Blog</a>
                        <a href="#">Newsletter</a>
                        <a href="#">Events</a>
                        <a href="#">Help Center</a>
                        <a href="#">Support</a>
                    </div>
                </div>
                */}
                <div className="w-fit">
                    
                    <StoreLinks type={BtnTypes.Variant}/>
                </div>
            </div>
              
            <div className="mt-14 flex justify-between border-t-2 border-t-gray-700 pt-10">
                <p className="w-[16ch] sm:w-[4ch] text-gray-400 md:w-full">&copy; 2025 NotebyNote. All Rights Reserved.</p>

                   {/* 
                    <div className="flex gap-6">
                        <a href="https://twitter.com" target="_blank">
                        <img src={Twitter} alt="Twitter logo" />
                        </a>
                        <a href="https://facebook.com" target="_blank">
                        <img src={Facebook} alt="Facebook logo" />
                        </a>
                        <a href="https://linkedin.com" target="_blank">
                        <img src={Linkedin} alt="Linkedin logo" />
                        </a>
                    </div>
                    */}
                   {
                    <div className="flex gap-6 w-[10ch] xl:hidden">
                        <a href="https://www.instagram.com/notebynote.co/" target="_blank">
                        <img src={InstagramLogo} alt="Twitter logo" />
                        </a>
                        <a href="https://wa.me/6596527576?text=Hello%2C%20I%E2%80%99m%20looking%20for%20a%20piano%20teacher%20for%20my%20child.%20Could%20you%20help%20me%20find%20the%20right%20match%3F" target="_blank">
                        <img src={WhatsappLogo} alt="Facebook logo" />
                        </a>
                        
                    </div>
                    }

            </div>
           
        </div>
    </section>

  );
}

export default Footer;
