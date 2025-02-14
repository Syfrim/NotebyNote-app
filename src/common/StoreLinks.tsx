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


            <StoreLink href="https://www.whatsapp.com" lowerText="Whatsapp" logo={WhatsappLogo} target="_blank" className='items-center flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800'/>
            <StoreLink href="https://www.instagram.com" lowerText="Instagram" logo={InstagramLogo} target="_blank" className='items-center flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800'/>

        </div>
  ); }
    if (type === BtnTypes.Variant) {
    return (
        <div className="mt-10 hidden justify-center space-x-2 sm:flex md:justify-normal">


            <StoreLink href="https://www.whatsapp.com" upperText="Contact us on" lowerText="Whatsapp" logo={WhatsappLogo} target="_blank" className='flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800'/>
            <StoreLink href="https://www.instagram.com" upperText="Check us out on" lowerText="Instagam" logo={InstagramLogo} target="_blank" className='flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800'/>

        </div>
  ); }
    if (type === BtnTypes.Choice) {
    return (
        <div className="hidden justify-center sm:flex ">


            <StoreLink href="https://www.whatsapp.com" upperText="Hello" logo={WhatsappLogo} target="_blank" className='items-center justify-center flex bg-zinc-900 w-1/2 h-screen  text-white hover:bg-zinc-950 active:bg-zinc-800' />
            <StoreLink href="https://www.whatsapp.com" upperText="Hello" logo={WhatsappLogo} target="_blank" className='items-center justify-center flex bg-zinc-900 w-1/2 h-screen  text-white hover:bg-zinc-950 active:bg-zinc-800' />

        </div>
  ); }
    
}

export default StoreLinks;
