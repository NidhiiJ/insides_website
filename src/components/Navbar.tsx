import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

interface NavItem {
  to: string;
  label: string;
}

const LEFT_LINKS: NavItem[] = [
  { to: "/WhyUs", label: "WHAT WE DO" },
  { to: "/Portfolio", label: "PROJECTS" },
];

const RIGHT_LINKS: NavItem[] = [
  { to: "/WhoAreWe", label: "ABOUT US" },
  { to: "/ContactUs", label: "CONTACT US" },
];

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        className="fixed inset-0 z-40 bg-black/40 md:hidden"
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <nav
        id="mobile-nav"
        className="
          fixed top-0 right-0 h-full w-64
          bg-[#686354e9] text-white
          flex flex-col gap-6 pt-16 pb-10 px-8
          font-semibold
          shadow-xl
          transform transition-transform duration-300 ease-out
          md:hidden
          z-[100]
        "
        aria-label="Mobile navigation"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="absolute top-4 right-4 h-7 w-7 flex items-center justify-center"
        >
          <img src="/svg/close-icon.svg" className="h-6 w-6" alt="Close menu" />
        </button>

        {[...LEFT_LINKS, ...RIGHT_LINKS].map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={onClose}
            className={({ isActive }) =>
              [
                "transition-all",
                "text-sm tracking-wide",
                isActive
                  ? "underline underline-offset-8"
                  : "font-normal hover:font-semibold",
              ].join(" ")
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

interface NavBarInnerProps {
  variant: "main" | "fixed";
  showMenu: boolean;
  toggleMenu: () => void;
}

const NavBarInner: React.FC<NavBarInnerProps> = ({
  variant,
  showMenu,
  toggleMenu,
}) => {
  const isFixed = variant === "fixed";

  return (
    <div
      className={`
        flex flex-row items-center justify-between
        bg-[#00000089] backdrop-blur
        py-3 px-6 md:px-8
        transition-all
        ${isFixed ? "shadow-md" : ""}
      `}
    >
      {/* Left links (desktop) */}
      <nav
        className="hidden md:flex flex-row gap-4 lg:gap-12 ml-[5%]"
        aria-label={isFixed ? "Secondary navigation left" : "Primary navigation left"}
      >
        {LEFT_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              [
                "transition-all",
                "font-normal hover:font-semibold",
                isActive && "underline underline-offset-8",
              ]
                .filter(Boolean)
                .join(" ")
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Logo / Brand */}
      <Link
        to="/"
        className={`
          font-Maharlika
          ${isFixed ? "text-[22px] md:text-[24px]" : "text-[24px] md:text-[26px]"}
          text-[#C4B99D] font-medium tracking-[0.15em]
        `}
        aria-label="Go to homepage"
      >
        INSIDES
      </Link>

      {/* Burger (mobile) */}
      <button
        type="button"
        className="md:hidden h-8 w-8 flex items-center justify-center"
        onClick={toggleMenu}
        aria-label={showMenu ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={showMenu}
        aria-controls="mobile-nav"
      >
        {!showMenu && <img
          src={"/svg/hamburger-menu.svg"}
          className="h-7 w-7 transition-transform duration-200 ease-in-out"
          alt={"Open menu"}
        />}
      </button>

      {/* Right links (desktop) */}
      <nav
        className="hidden md:flex flex-row gap-4 lg:gap-12 mr-[5%]"
        aria-label={isFixed ? "Secondary navigation right" : "Primary navigation right"}
      >
        {RIGHT_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              [
                "transition-all",
                "font-normal hover:font-semibold",
                isActive && "underline underline-offset-8",
              ]
                .filter(Boolean)
                .join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
      </nav>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFixedNav, setShowFixedNav] = useState(false);
  const location = useLocation();

  // Toggle fixed navbar after scrolling ~5rem (~80px)
  useEffect(() => {
    const THRESHOLD = 80; // pixels ≈ 5rem at 16px base

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShowFixedNav(scrollTop > THRESHOLD);
    };

    handleScroll(); // initialize
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  // Close on Esc when menu is open
  useEffect(() => {
    if (!showMenu) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowMenu(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showMenu]);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <>
      {/* MAIN NAVBAR (relative, scrolls away) */}
      <header className="w-full relative z-[51]">
        <NavBarInner
          variant="main"
          showMenu={showMenu}
          toggleMenu={toggleMenu}
        />
      </header>

      {/* FIXED NAVBAR (appears after scroll) */}
      {showFixedNav && (
        <div className="fixed top-0 left-0 w-full z-[60]">
          <NavBarInner
            variant="fixed"
            showMenu={showMenu}
            toggleMenu={toggleMenu}
          />
        </div>
      )}

      {/* Shared mobile menu overlay */}
      <BurgerMenu isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Navbar;
