
import ContactUs from '../components/ContactUs'
import OurProcess from '../components/OurProcess'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import WhoAreWe from '../components/WhoAreWe'
import  WhyUs  from '../components/WhyUs'
import HeroSection from '../components/HeroSection'

interface HomeProps {
  windowSize : number
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const Home:React.FC<HomeProps> = ({windowSize,setName}) => {

  return (
    <div id='home'  className='flex flex-col gap-14 md:gap-40 '>
      <HeroSection windowSize={windowSize} />
      <div data-aos="fade-up">
        <WhoAreWe/>
      </div>
      <OurProcess/>
      <Portfolio windowSize={windowSize}/>
      <WhyUs/>
      <Testimonials  windowSize={windowSize}/>
      <ContactUs setName={setName}/>
    </div>
  )
}

export default Home