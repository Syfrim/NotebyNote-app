import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { Disclosure, DisclosureButton } from '@headlessui/react';
import ButtonLink from '../common/ButtonLink';

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
          <div className="flex h-[15vh] max-w-7xl items-center justify-between xlm:-auto lg:px-3">   
            <div className="flex pl-4">
             
                <p>NotebyNote</p>                
                <div className='sm:flex hidden items-center space-x-4 ml-4 lg:ml-8 lg:space-x-8'>

                    {navLinks.map((link, index) => (
                        <ButtonLink key={index} href={link.href} children={link.children} className={textLinkClasses}/>
                    ))}
                    

                </div>
            </div>
            <ButtonLink href="https://wa.me/6596527576?text=Hello%2C%20I%E2%80%99m%20looking%20for%20a%20piano%20teacher%20for%20my%20child.%20Could%20you%20help%20me%20find%20the%20right%20match%3F" target="_blank" children={"Contact Us"} className='active: bg hidden bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900 active:bg-gray-600 sm:flex '></ButtonLink>
            
            <DisclosureButton className="sm:hidden rounded-md p-6 text-gray-500 hover:bg-gray-700 hover:text-white">
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