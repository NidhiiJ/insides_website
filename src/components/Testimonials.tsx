import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "./test.css";
import { Navigation, Pagination } from "swiper/modules";


interface Tcardprops {
  name: string,
  image: string,
  text: string
}

const testimonials = [
  {
    name:'John Doe',
    image: '/images/testimonial-1.jpg',
    text:'Transforming our space into a masterpiece, the interior design expertise of INSIDES exceeded our expectations.',
  },
  {
    name:'Swami Doe',
    image: '/images/testimonial-2.jpg',
    text:'the interior design expertise of INSIDES exceeded our expectations, seamlessly blending creativity and functionality.',
  },
  {
    name:'Honey Singh',
    image: '/images/testimonial-3.jpg',
    text:'Transforming our space into a masterpiece.',
  },
  {
    name:'Adele ',
    image: '/images/testimonial-1.jpg',
    text:'Transforming .',
  }
]

const TestimonialCard = (props: Tcardprops) => {
  return (
    <div className=" grid grid-rows-auto justify-items-center items-start gap-2 h-full w-[280px] lg:w-[350px] bg-white text-black rounded-xl drop-shadow-md p-2 mb-10 lg:mb-0 overflow-y-auto">
      
      <img src="/svg/testimonial-logo.svg" alt="" className="h-9 mt-4 object-contain" />
      <p className="text-[14px] lg:text-[16px] mx-4 mt-4 h-3/4 ">{props.text}</p>
      <div className="flex flex-col items-center pb-5 mt-3">
        <div className="h-[2px] w-1/4 bg-black"></div>
        <img src={props.image} alt="image" className="rounded-full w-[86px] h-[86px] mt-8 " />
        <h2 className="p-2">{props.name}</h2>
      </div>
    </div>
  );
};

interface TestimonialsProps {
  windowSize: number;
}

const Testimonials: React.FC<TestimonialsProps> = ({windowSize}) => {

  return (
    <div id='testimonials' className="">
      <div className=" bg-[#dedbcf] py-10">
        <div className="flex flex-col items-center pb-5">
          <span className="text-black ">OUR</span>
          <span className=" font-Maharlika text-black text-[32px] md:text-[43px] lg:text-[54px]">
            Testimonials
          </span>
        </div>

        <div className="flex justify-center items-center">
          <div className="hidden md:block image-swiper-button-prev hover:cursor-pointer transform rotate-180 p-2 md:p-10">
            <img src="/svg/testimonial-arrow.svg" alt="prev-button" />
          </div>
          <Swiper
            spaceBetween={10}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            pagination={
              windowSize < 786
                ? { enabled: true, clickable: true }
                : { enabled: false }
            }
            modules={[Navigation, Pagination]}
            breakpoints={{
              576: {
                slidesPerView: 1,
                pagination: {
                  enabled: true
                }
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            // slidesPerView={windowWidth < 768 ? 1: 3}
            className=""
          >
            {testimonials.map((x,i)=>
              <SwiperSlide key={i} className="md:h-[400px]">
              <TestimonialCard name={x.name} image={x.image} text={x.text}  />
            </SwiperSlide>
            )}
            
          </Swiper>
          <div className="hidden md:block image-swiper-button-next hover:cursor-pointer p-2 md:p-10">
            <img src="/svg/testimonial-arrow.svg" alt="next-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
