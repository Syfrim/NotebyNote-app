import { ButtonLinkProps } from "./ButtonLink";

function StoreLink({href, logo, upperText, lowerText, className, target}: ButtonLinkProps) 
{ 
    return(
        <a href={href} className={className} target={target}>
                <img src={logo} alt={`${lowerText} logo`} className='w-7'/>
                <div>
                    <p className="text-xs">{upperText}</p>
                    <p>{lowerText}</p>
                </div>
        </a>
  );
}

export default StoreLink;
