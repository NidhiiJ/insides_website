import { Link } from 'react-router-dom';
import projectdata, { Project } from './../components/data/projectdata'




// interface PortfolioProps {
//   windowSize: number;
// }
const PorfolioPageImage = ({ imageObj }: { imageObj: Project }) => {
    return(
        <Link to={`/projects/${imageObj.slug}`} className='flex flex-col p-5 transition-transform hover:scale-[1.01]'>
            <img src={imageObj.image} alt="" className=' h-[300px] w-[320px] md:h-[400px] md:w-[400px] object-cover rounded-t-md pb-2' />
            <p className='text-[10px] md:text-[14px] text-[#AEAEAE]'>{imageObj.location}</p>
            <p className='text-[16px] md:text-[28px] font-Maharlika'>{imageObj.title}</p>
        </Link>
    )
}

const PortfolioPage= () => {

  return (
    <div id='portfolio' className=''>
      <div className='md:flex flex-row gap-3 items-center justify-around mt-10 md:mt-20 px-4 pb-5 md:pb-15'>
        <div className='flex flex-col items-center md:items-start '>
          <div className='text-[15px]'>INSIDE'S</div>
          <div className="text-[32px] md:text-[43px] lg:text-[54px] font-Maharlika">Portfolio</div>
        </div>
        <div className=' hidden md:block w-[368px] text-[14px]'>
          It's about creating unique, inviting spaces that tell your story.  Whether you're redesigning a single room or embarking on a complete
          home makeover, our team of expert designers is here to bring your vision to life.
        </div>
      </div>
      <div className='md:pt-5 grid grid-cols-1 md:grid-cols-3 gap-2 place-items-center'>
        {projectdata.map((x)=>(
           < PorfolioPageImage key={x.slug} imageObj={x} />
        )
        )}
      </div>
    </div>
  )
}

export default PortfolioPage