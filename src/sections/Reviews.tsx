import Carousel from "../common/Carousel";

function Reviews() {
    const slides = [
        {
            src : "https://images.unsplash.com/photo-1561014816-50ce5acb5e73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: '“I was looking for a piano teacher for my son, and this platform made the search so convenient. Within days, we found a patient and experienced instructor who comes to our home. My son enjoys his lessons, and we’re seeing great progress!”',
            name: "Jason Lim",
            age: "40 Years Old, Parent of a Young Learner"
        }
        ,
        {
            src: "https://cdn.pixabay.com/photo/2019/06/24/00/59/piano-4294992_1280.jpg",
            text: '“Finding a reliable and patient piano teacher for my kids used to be stressful, but this platform made it effortless. The matching process was smooth, and the teacher is experienced and engaging. Highly recommended!”',
            name: "Sophia Lee",
            age: "45 Years Old, Mother of Two"
        }
        ,
        {
            src: "https://cdn.pixabay.com/photo/2019/03/27/00/21/keyboard-4083960_1280.jpg",
            text: '“I’ve tried different ways to learn piano, but this is by far the best. The platform made it so easy to find a skilled teacher who fits me”',
            name: "Michelle Ng",
            age: "50 Years Old, Music Enthusiast"
        }
    ];
  return (
    <section id="reviews" className="flex max-w-8xl flex-col items-center justify-center lg:m-auto lg:flex-row px-12 pb-10 ">
        
        <Carousel slides={slides}/>
    </section>
  );
}

export default Reviews;
