import { useEffect, useState } from "react";


export const GoToTopButton = () => {

    const [goToTopVisible, setgoToTopVisible] = useState(false)

    useEffect(() => {
      const handleScroll = ()=>{
        if(window.scrollY >= 200){
            setgoToTopVisible(true)
        }
        else{
            setgoToTopVisible(false)
        }
      }
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
    

    const handleGoToTop =()=>{
        window.scroll({
            top: 0,
            behavior: 'smooth' // Add smooth scrolling behavior
        });
    }

  return (
    <div id='got-to-top-button' className={`${goToTopVisible?'transition ease-in-out delay-200 ':'hidden transition ease-in-out delay-1000'} flex justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-[#686354b9] text-black cursor-pointer`} onClick={handleGoToTop}>
        <img src="/images/up-arrow.png" alt="" className=" p-3 md:p-4" />
    </div>
  )
}
