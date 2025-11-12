import ContactForm from "./ContactForm";

interface ContactUsProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const ContactUs:React.FC<ContactUsProps>  = ({setName}) => {
  return (
    <div id='contact-us' className="flex flex-col flex-wrap justify-center items-center p-2">
      <div className='flex flex-col text-center'>
      <span className=" text-[11px] md:text-[12.5px] lg:text-[14px]">
        HAVE A PROJECT IN MIND?
      </span>
      <span className="pb-5 font-Maharlika text-[32px] md:text-[43px] lg:text-[54px]">
        Contact Us
      </span>
      </div>
      <div className=" lg:h-[38em] lg:w-[80%] bg-white rounded-2xl grid grid-rows-auto md:grid-cols-3">
        <div id='contact-card' className=" h-full w-full p-3">
          <div className="bg-contactus-image bg-cover h-full w-full rounded-lg flex flex-col gap-5 items-start p-2">
            <div className=" md:block md:basis-1/4 pl-2 pt-6 font-semibold text-lg md:text-2xl">
              Contact Information
            </div>
            <div className="flex flex-col text-gray-300 gap-4 md:gap-6 grow px-2">
              <span>
                Number:
                <br /> <p className="text-gray-400">+91 76483927</p>
              </span>
              <span className="">
                Email:
                <br /> <p className="text-gray-400">johndoe@example.com</p>{" "}
              </span>
              <span className="">
                Address:
                <br />{" "}
                <p className="text-gray-400">Rose road, Mumbai 4000-032</p>
              </span>
            </div>

            <div className="content-end flex flex-row gap-4 px-2 pb-4">
              <a href="" id="twitter">
                <img src="/svg/twitter.svg" className="h-4 " alt="twitter" />
              </a>
              <a href="" id="instagram">
              <img src="/svg/instagram.svg" className="h-4" alt="instagram" />
              </a>
              {/* <i>icon3</i> */}
            </div>
          </div>
        </div>
        <div className="md:col-span-2 text-black m-8 ">
          <ContactForm setName={setName}/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
