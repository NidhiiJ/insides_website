import { Link } from "react-router-dom";

interface HeroImageProps {
  leftOrRight: "left" | "right";
  imageSectionDimensions: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ ...props }) => {
  return (
    <div
      className={`hidden md:block ${
        props.leftOrRight === "left" ? "-ml-[5%] " : "-mr-[5%]"
      } self-start relative ${props.imageSectionDimensions}`}
    >
      <img
        src="/images/ourprocess-img.jpg"
        alt=""
        className={`rounded-tl-[46%] rounded-br-[46%] brightness-75 ${props.imageSectionDimensions} object-cover `}
      />
      <div
        className={`border-[#C4B99D] absolute ${
          props.leftOrRight === "left"
            ? "top-3 left-3 border-[1.5px] rounded-tl-[46%] rounded-br-[46%]"
            : "-top-3 -left-3 border-[1.5px] rounded-tl-[46%] rounded-br-[46%]"
        }  h-full w-full -z-10`}
      ></div>
    </div>
  );
};

interface HeroProps{
  windowSize: number
}

const HeroSection:React.FC<HeroProps> = ({windowSize}) => {
  var imageSectionDimensions =
    "h-full w-full md:max-w-[18rem] lg:max-w-[370px] xl:max-w-[400px] md:h-[24rem] lg:h-[529px] 3xl:max-w-[490px]";

  return (
    <div id='hero-section' className="relative bg-cover bg-center mt-10 md:mt-20" style={{backgroundImage: windowSize < 768 ? 'url(/images/ourprocess-img.jpg)': 'none'}}>
      <div className="absolute md:hidden inset-0 bg-gradient-to-b from-[#031212] to-[#0312127b] "></div>
      <div className="relative pt-5 pb-8 md:flex flex-row justify-between items gap-10 items-center w-full h-full overflow-x-hidden z-10 ">
      
        <HeroImage
          leftOrRight="left"
          imageSectionDimensions={imageSectionDimensions}
        />
        {/* <div className="h-full">
          <span className="absolute top-40">yo</span>
          <div className="absolute bottom-52"><img src="/svg/homepage-arrow.svg" alt="arrow img" className="h-[85px]"/></div>
        </div> */}
        <div className="flex flex-col items-center mx-10 md:mx-14 lg:mx-18 p-3 " > 
          <span className="text-center text-[24px] md:text-[34px] lg:text-[48px] font-Maharlika ">
            Build your dream Home curated and personalized  by <br />
            <span className=" text-[32px] md:text-[43px] lg:text-[54px]  text-[#C4B99D] font-medium">
              INSIDES
            </span>
          </span>
          <br />
          <span className=" text-md md:text-lg md:font-thin py-4 text-center">Elevating spaces with timeless elegance and innovative design solutions,, where every corner tells a story of refined craftsmanship and personalized style.</span>
          <Link to="/ContactUs" className="border border-white rounded-full hover:bg-[#ffffff18] py-2 px-8 font-inter flex flex-row items-center font-[600] max-md:mt-5" >
            <span className="pr-4 text-[14px] md:text-[20px] font-Maharlika">
              Schedule a Call
            </span>
            <img src="/images/arrow.png" alt="arrow img" />
          </Link>
        </div>
        {/* <div className="h-full">
          <span className="absolute top-40">yo</span>
          <div className="absolute right-[350px] bottom-80"><img src="/svg/homepage-arrow.svg" alt="arrow img" className=" transform rotate-180 h-[70px] "/></div>
        </div> */}
        <HeroImage
          leftOrRight="right"
          imageSectionDimensions={imageSectionDimensions}
        />
      </div>
    </div>
  );
};

export default HeroSection;
