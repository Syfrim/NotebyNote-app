import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { Disclosure, DisclosureButton } from '@headlessui/react';
import  Kobodrop  from "../assets/logos/kobodrop_logo.svg";
import ButtonLink from '../common/ButtonLink';
import { Children } from 'react';
import NotebyNoteLogo from "../assets/NotebyNoteLogo_sized.png"
export { NotebyNoteLogo };
function Nav() {
    const textLinkClasses = "text-gray-500 hover:text-gray-900 active:text-gray-400";

    const navLinks = [
        
        {href: "#features", children: "Features"},
        {href: "#reviews", children: "Reviews"},
        {href: "#choice", children: "Apply"},
    ];
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] max-w-7xl items-center justify-between px-8 xlm:-auto lg:px-12">   
            <div className="flex">
             
                <ButtonLink href="#" children={<img src={NotebyNoteLogo} alt="NotebyNote logo"/>}/>                
                <div className='sm:flex hidden items-center space-x-4 ml-4 lg:ml-8 lg:space-x-8'>

                    {navLinks.map((link, index) => (
                        <ButtonLink key={index} href={link.href} children={link.children} className={textLinkClasses}/>
                    ))}
                    

                </div>
            </div>
            <ButtonLink href="https://whatsapp.com" target="_blank" children={"Contact Us"} className='active: bg hidden bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900 active:bg-gray-600 sm:flex'></ButtonLink>
            
            <DisclosureButton className="sm:hidden rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white">
                {open ? (
                    <XMarkIcon className='block h-6 w-6'/>
                ) : (
                    <Bars3Icon className='block h-6 w-6'/>
                )}
            </DisclosureButton>
          </div>
          <Disclosure.Panel className="space-y-1 px-4 sm:hidden ">
            {navLinks.map((link, index) => (
                            <DisclosureButton className="block" as="a" href="#features" key={index}> 
                                {link.children}   
                            </DisclosureButton>
                        ))}  
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;