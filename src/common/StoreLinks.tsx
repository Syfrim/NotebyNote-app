import WhatsappLogo from "../assets/logos/whatsapp-svgrepo-com (1).svg";
import  InstagramLogo  from "../assets/logos/instagram-1-svgrepo-com.svg";
import StoreLink from "../common/StoreLink";
import GooglePlayBright from "../assets/logos/google_play_bright.svg";
interface StoreLinksProps {
    type: BtnTypes;
}

export enum BtnTypes {
    Standard, Variant, Choice
}


function StoreLinks({type}) {
    if (type === BtnTypes.Standard) {
    return (
        <div className="mt-10 hidden justify-center space-x-2 sm:flex md:justify-normal">


            <StoreLink href="https://wa.me/6596527576?text=Hello%2C%20I%E2%80%99m%20looking%20for%20a%20piano%20teacher%20for%20my%20child.%20Could%20you%20help%20me%20find%20the%20right%20match%3F" lowerText="Whatsapp" logo={WhatsappLogo} target="_blank" className='items-center flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800'/>
            <StoreLink href="https://www.instagram.com/notebynote.co/" lowerText="Instagram" logo={InstagramLogo} target="_blank" className='items-center flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800'/>

        </div>
  ); }
    if (type === BtnTypes.Variant) {
    return (
        <div className="mt-10 hidden justify-center space-x-2 sm:flex md:justify-normal">


            <StoreLink href="https://wa.me/6596527576?text=Hello%2C%20I%E2%80%99m%20looking%20for%20a%20piano%20teacher%20for%20my%20child.%20Could%20you%20help%20me%20find%20the%20right%20match%3F" upperText="Contact us on" lowerText="Whatsapp" logo={WhatsappLogo} target="_blank" className='flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800'/>
            <StoreLink href="https://www.instagram.com/notebynote.co/" upperText="Check us out on" lowerText="Instagam" logo={InstagramLogo} target="_blank" className='flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800'/>

        </div>
  ); }
    if (type === BtnTypes.Choice) {
    return (
        <div className="hidden justify-center sm:flex ">


            <StoreLink href="https://www.whatsapp.com" upperText="Hello" logo={""} target="_blank" className='items-center justify-center flex bg-zinc-900 w-1/2 h-screen  text-white hover:bg-zinc-950 active:bg-zinc-800' />
            <StoreLink href="https://www.whatsapp.com" upperText="Hello" logo={""} target="_blank" className='items-center justify-center flex bg-zinc-900 w-1/2 h-screen  text-white hover:bg-zinc-950 active:bg-zinc-800' />

        </div>
  ); }
    
}

export default StoreLinks;
