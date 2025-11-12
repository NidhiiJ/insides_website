import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

interface BurgerProps {
  handleBurgerClick: React.MouseEventHandler;
}

const BurgerMenu: React.FC<BurgerProps> = ({ handleBurgerClick }) => {
  return (
    <nav
      className="absolute p-10 pt-14 top-16 right-0 flex flex-col justify-center items-center gap-6 bg-[#686354e9] font-semibold text-white rounded-l-md z-50 overflow-y-auto"
      style={{ transition: "top 0.5s ease" }}
      onClick={handleBurgerClick}
    >
      <img src="/svg/close-icon.svg" className="hidden absolute top-3 right-5 h-6" onClick={handleBurgerClick}/>
      <Link to='/WhyUs'>WHAT WE DO</Link>
      <Link to='/Portfolio'>PROJECTS</Link>
      <Link to='/WhoAreWe'>ABOUT US</Link>
      <Link to='/ContactUs'>CONTACT US</Link>
    </nav>
  );
};

const Navbar = () => {
  // burger menu
  const [showMenu, setshowMenu] = useState(false);
  // nav sticky
  const [isTop, setIsTop] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setIsTop(scrollTop === 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  const handleBurgerClick = () => {
    setshowMenu(!showMenu);
  };


  return (
    <div className={`flex flex-row justify-between bg-[#00000089] ${isTop ? '' : 'fixed  transition-all'} w-full py-3 px-8 z-[51]`}>
    {/* <div className={`flex flex-row justify-between bg-[#00000089]  w-full py-3 px-8  z-[51]`}> */}
      <div className="hidden md:flex flex-row gap-4 lg:gap-12 ml-[5%]">
      <NavLink to='/WhyUs' className={({isActive})=> isActive ?'transition-all underline underline-offset-8':"transition-all font-normal hover:font-semibold"}>WHAT WE DO</NavLink>
      
      <NavLink to='/Portfolio' className={({isActive})=> isActive ?'transition-all underline underline-offset-8':"transition-all font-normal hover:font-semibold"}>PROJECTS</NavLink>
      </div>
      <NavLink to='/' className=' font-Maharlika text-[26px] text-[#C4B99D] font-medium'>INSIDES</NavLink>

      {showMenu ? (
        <div className="burger md:hidden ">
          <img
            src="/svg/close-icon.svg"
            className="h-7 transition-all ease-in-out"
            alt="close"
            onClick={handleBurgerClick}
          />

          <BurgerMenu handleBurgerClick={handleBurgerClick} />
        </div>
      ) : (
        <div className="burger md:hidden ">
          <img
            src="/svg/hamburger-menu.svg"
            className="h-7 transition-all duration-500 ease-in-out"
            alt="burger menu"
            onClick={handleBurgerClick}
          />
        </div>
      )}

      <div className="hidden md:flex flex-row gap-4 lg:gap-12 mr-[5%]">
      <NavLink to='/WhoAreWe' className={({isActive})=> isActive ?'transition-all underline underline-offset-8':"transition-all font-normal hover:font-semibold"}>ABOUT US</NavLink>
      <NavLink to='/ContactUs' className={({isActive})=> isActive ?'transition-all underline underline-offset-8':"transition-all font-normal hover:font-semibold"}>CONTACT US</NavLink>
      </div>
     
    </div>

  );
};

export default Navbar;
