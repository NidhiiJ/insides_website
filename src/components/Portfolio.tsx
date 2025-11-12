import React from 'react';
import ImageCard from './ReusableComponents/ImageCard'
import { Link } from 'react-router-dom';
import projectdata from './data/projectdata';

const projects = projectdata

interface PortfolioProps {
  windowSize: number;
}

const Portfolio: React.FC<PortfolioProps> = ({windowSize}) => {

  return (
    <div id='portfolio' className=''>
      <div className='md:flex flex-row gap-3 items-center justify-around px-4 pb-5 md:pb-15'>
        <div className='flex flex-col items-center md:items-start '>
          <div className='text-[15px]'>INSIDE'S</div>
          <div className="text-[32px] md:text-[43px] lg:text-[54px] font-Maharlika">Portfolio</div>
        </div>
        <div className=' hidden md:block w-[368px] text-[14px]'>
          It's about creating unique, inviting spaces that tell your story.  Whether you're redesigning a single room or embarking on a complete
          home makeover, our team of expert designers is here to bring your vision to life.
        </div>
        <div className='flex flex-col items-center'>
          {/* use this button as a component */}
          <button className='border border-white rounded-full hover:bg-[#ffffff18] py-2 px-8 font-inter flex flex-row items-center font-[600] max-md:mt-5'>
            <Link to='/Portfolio' className='pr-4 text-[12px] md:text-[16px]'>VIEW ALL PROJECTS</Link>
            <img src='/images/arrow.png' alt='arrow img'/> 
          </button>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay={400} className='p-5 grid grid-flow-col overflow-x-auto'>
        {windowSize <= 768
        ? projects.slice(0,4).map((project)=> (
          <ImageCard
            key={project.slug}
            windowSize={windowSize}
            paddingTop={false}
            imagePath={project.image}
            title={project.title}
            location={project.location}
            slug={project.slug}
          />
        ))
        : projects.map((project, index)=> (
          <ImageCard
            key={project.slug}
            windowSize={windowSize}
            paddingTop={index % 2 === 0}
            imagePath={project.image}
            title={project.title}
            location={project.location}
            slug={project.slug}
          />
        ))
        }
      </div>
    </div>
  )
}

export default Portfolio