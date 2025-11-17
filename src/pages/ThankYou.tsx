

const ThankYou = ({name}:{name:string}) => {
  return (
    <div className=" text-center font-Maharlika p-5 flex flex-col gap-2 md:gap-5 mt-10 md:mt-20 ">
      <span className="text-[26px] md:text-[36px] lg:text-[40px]">
        Hi {name} !
        </span><br />
        <span className="text-[32px] md:text-[43px] lg:text-[54px]">
        ThankYou For Your Inquiry!
        </span><br />
        <span className=" text-lg md:text-xl">
            We will get in touch with you Shortly : )
        </span>
    </div>
  )
}

export default ThankYou