import { Link, Navigate, useParams } from 'react-router-dom';
import projectdata from '../components/data/projectdata';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectdata.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/Portfolio" replace />;
  }

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative w-full h-screen flex flex-col items-center justify-center px-6 pb-20 md:pb-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${project.galleryImages[0]?.src || project.image})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-[0.30] z-0"></div>
        
        <div className="absolute top-6 left-6 md:top-12 md:left-12 z-10">
          <Link 
            to="/Portfolio" 
            className="text-sm md:text-base font-medium text-[#C4B99D] hover:underline transition-all"
          >
            ← Back to portfolio
          </Link>
        </div>
        
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto z-10 relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-Maharlika mb-4 md:mb-6">
            {project.title}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-Maharlika mb-8 md:mb-12">
            {project.location}
          </h2>
          <p className="text-sm md:text-base animate-bounce">(scroll to explore)</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full px-6 md:px-12 lg:px-24 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-base md:text-lg lg:text-xl text-[#AEAEAE] leading-relaxed">
            {project.description}
          </p>
          <p className="text-base md:text-lg lg:text-xl text-[#AEAEAE] leading-relaxed mt-4 md:mt-6">
            The site size, orientation and sloping nature allowed a design where multiple spaces within the house capture stunning views of the river and city, as well as capture northern sun and prevailing breezes.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full px-4 md:px-8 lg:px-12 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2 lg:gap-4">
            {project.galleryImages.map((galleryImage, index) => {
              // Create varying heights for visual interest (masonry-like effect)
              
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
                >
                  <img
                    src={galleryImage.src}
                    alt={galleryImage.alt}
                    className="w-full h-full object-cover cursor-pointer transition-opacity duration-300 group-hover:opacity-95"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Back to Top / Next Project Section */}
      <div className="w-full px-6 md:px-12 py-8 md:py-12 border-t border-[#333]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link
            to="/Portfolio"
            className="text-sm md:text-base font-medium text-[#C4B99D] hover:underline transition-all"
          >
            ← Back to portfolio
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm md:text-base font-medium text-[#C4B99D] hover:underline transition-all"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
