import Carousel from "../common/Carousel";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";

function Reviews() {
    const slides = [
        {
            src : "https://images.unsplash.com/photo-1561014816-50ce5acb5e73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: '"Kobodrop has helped me send and receive money with little to no complications. It´s what everyone who wants to be on top of their money needs!"',
            name: "Haruka Sato",
            country: "Japan"
        }
        ,
        {
            src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: '"Using Kobodrop has streamlined my financial transactions like never before. Highly recommended for anyone looking to simplify their finances!"',
            name: "Elena Rodriguez",
            country: "Spain"
        }
        ,
        {
            src: "https://images.unsplash.com/photo-1433622070098-754fdf81c929?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: '"Kobodrop has been a game changer for my daily financial dealings. It allows for quick and secure money transfers, which saves me a lot of time and effort."',
            name: "Thomas Morgan",
            country: "USA"
        }
    ];
  return (
    <section id="reviews" className="flex max-w-8xl flex-col items-center justify-center lg:m-auto lg:flex-row px-12 pb-10 ">
        
        <Carousel slides={slides}/>
    </section>
  );
}

export default Reviews;
