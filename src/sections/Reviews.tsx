import Carousel from "../common/Carousel";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";

function Reviews() {
    const slides = [
        {
            src : "https://images.unsplash.com/photo-1561014816-50ce5acb5e73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: '"Ever since I’ve been learning piano here, I made great improvements! The lessons are engaging, and my teacher always encourages me to do my best. I can now play more advanced pieces, and I feel more confident performing!"',
            name: "Ryan Lim",
            age: "13 Years Old, Grade 4"
        }
        ,
        {
            src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: '"I love my piano lessons! My teacher is so patient and makes learning really fun. I was nervous at first, but now I can play songs all by myself. I always look forward to my classes!"',
            name: "Emily Tan",
            age: "9 Years Old, Grade 1"
        }
        ,
        {
            src: "https://images.unsplash.com/photo-1433622070098-754fdf81c929?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: '"The piano tuition has really helped me refine my technique and musical expression. My teacher gives great feedback and always challenges me to grow. Thanks to these lessons, I recently passed my Grade 8 exam with distinction!"',
            name: "Sofia Ng",
            age: "17 Years Old, Grade 8"
        }
    ];
  return (
    <section id="reviews" className="flex max-w-8xl flex-col items-center justify-center lg:m-auto lg:flex-row px-12 pb-10 ">
        
        <Carousel slides={slides}/>
    </section>
  );
}

export default Reviews;
