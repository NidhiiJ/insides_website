
interface allproptypes{
  num : number
}
interface CardContent{
  [index: number]: string;
 }

const cardContent: CardContent= {
  1: 'After our first interaction through mail or telephone, we organize a visit to your property.',
  2: 'hey  this is the second point and its damn pointless so dont waste time reading this',
  3: 'this is the third line of the card and it is a long one'
}

const TextCard = ({num}: allproptypes) =>{
  return(
    <div className="flex flex-row justify-between items-start py-3 px-5">
      <div className="pl-2 text-[#C4B99D] font-Maharlika text-[32px] md:text-[43px] lg:text-[54px]">
        {num}
        {/* <div className="bg-slate-500 w-[50px] h-[50px] rounded-full"></div>
        <div>{num}</div> */}
      </div>
      <div className="flex flex-col basis-4/5">   
        <div className=" font-Poppins text-[16px] md:text-[20px] lg:text-[22px] font-semibold">We Meet</div>
        <div className="text-wrap text-[#d4d3d3]">{cardContent[num]}</div>
      </div>
    </div>
  )
}

const OurProcess = () => {
  // w-[532px] h-[447px]
  return (
    <div id='our-process' className="flex flex-col items-center ">
        <div className="">
          <div className="text-center lg:text-start text-[32px] md:text-[43px] lg:text-[54px] font-Maharlika pb-6">Our Process</div>
          <div className="relative">
          <div data-aos="fade-down" className=" lg:absolute w-full lg:w-[480px] bg-[#3f3c33] lg:bg-[#00000090] backdrop-blur-lg  lg:rounded-[15px] lg:left-[30em] lg:top-[-6em] z-20 mt-5 py-5">
            <TextCard num ={1}/>
            <TextCard num ={2}/>
            <TextCard num={3}/>
          </div>
          </div>
          
          <div className=" relative max-w-[990px] max-h-[530px] pt-3 m-2 lg:m-0 lg:pt-0">
              <img src="/images/ourprocess-img.jpg" className="w-full h-full object-cover rounded-[15px] relative z-10 brightness-75 " alt="img" />
              <div className="w-full h-full border-b-2 lg:border-r-2 border-[#C4B99D] absolute rounded-[15px] top-[3%] lg:top-[39px] lg:left-[16px] z-0"></div>
          </div>
        </div>
    </div>
  )
}

export default OurProcess

