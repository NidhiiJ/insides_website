export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  image: string;
  title: string;
  location: string;
  slug: string;
  description: string;
  galleryImages: GalleryImage[];
}

// Helper function to capitalize words
const capitalizeWords = (str: string): string => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// Helper function to get location from folder name
const getLocation = (folderName: string): string => {
  const parts = folderName.split('-');
  const location = parts[parts.length - 1];
  return location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();
};

const projectdata: Project[] = [
  {
    image: '/images/project-images/bhushi-lonavala/img1.jpeg',
    title: capitalizeWords('bhushi-lonavala'),
    location: getLocation('bhushi-lonavala'),
    slug: 'bhushi-lonavala',
    description: 'The client brief was to design a home that can cater for smaller numbers, but also for times where family return home for large gatherings or extended stays.',
    galleryImages: [
      { src: '/images/project-images/bhushi-lonavala/img1.jpeg', alt: 'Bhushi Lonavala project image 1' },
      { src: '/images/project-images/bhushi-lonavala/img2.jpeg', alt: 'Bhushi Lonavala project image 2' },
      { src: '/images/project-images/bhushi-lonavala/img3.jpeg', alt: 'Bhushi Lonavala project image 3' },
      { src: '/images/project-images/bhushi-lonavala/img4.jpeg', alt: 'Bhushi Lonavala project image 4' },
      { src: '/images/project-images/bhushi-lonavala/img5.jpeg', alt: 'Bhushi Lonavala project image 5' },
      { src: '/images/project-images/bhushi-lonavala/img6.png', alt: 'Bhushi Lonavala project image 6' },
      { src: '/images/project-images/bhushi-lonavala/img7.jpeg', alt: 'Bhushi Lonavala project image 7' },
      { src: '/images/project-images/bhushi-lonavala/img8.jpeg', alt: 'Bhushi Lonavala project image 8' },
      { src: '/images/project-images/bhushi-lonavala/img9.jpeg', alt: 'Bhushi Lonavala project image 9' },
    ]
  },
  {
    image: '/images/project-images/lalbaug-mumbai/img1.jpg',
    title: capitalizeWords('lalbaug-mumbai'),
    location: getLocation('lalbaug-mumbai'),
    slug: 'lalbaug-mumbai',
    description: 'The client brief was to design a home that can cater for smaller numbers, but also for times where family return home for large gatherings or extended stays.',
    galleryImages: [
      { src: '/images/project-images/lalbaug-mumbai/img1.jpg', alt: 'Lalbaug Mumbai project image 1' },
      { src: '/images/project-images/lalbaug-mumbai/img2.jpg', alt: 'Lalbaug Mumbai project image 2' },
      { src: '/images/project-images/lalbaug-mumbai/img3.jpg', alt: 'Lalbaug Mumbai project image 3' },
      { src: '/images/project-images/lalbaug-mumbai/img4.jpg', alt: 'Lalbaug Mumbai project image 4' },
      { src: '/images/project-images/lalbaug-mumbai/img5.jpg', alt: 'Lalbaug Mumbai project image 5' },
      { src: '/images/project-images/lalbaug-mumbai/img6.jpg', alt: 'Lalbaug Mumbai project image 6' },
      { src: '/images/project-images/lalbaug-mumbai/img7.jpg', alt: 'Lalbaug Mumbai project image 7' },
      { src: '/images/project-images/lalbaug-mumbai/img8.jpeg', alt: 'Lalbaug Mumbai project image 8' },
      { src: '/images/project-images/lalbaug-mumbai/img9.jpeg', alt: 'Lalbaug Mumbai project image 9' },
      { src: '/images/project-images/lalbaug-mumbai/img10.jpg', alt: 'Lalbaug Mumbai project image 10' },
    ]
  },
  {
    image: '/images/project-images/Malad-Mumbai/img1.jpg',
    title: capitalizeWords('Malad-Mumbai'),
    location: getLocation('Malad-Mumbai'),
    slug: 'malad-mumbai',
    description: 'The client brief was to design a home that can cater for smaller numbers, but also for times where family return home for large gatherings or extended stays.',
    galleryImages: [
      { src: '/images/project-images/Malad-Mumbai/img1.jpg', alt: 'Malad Mumbai project image 1' },
      { src: '/images/project-images/Malad-Mumbai/img2.jpg', alt: 'Malad Mumbai project image 2' },
      { src: '/images/project-images/Malad-Mumbai/img3.jpg', alt: 'Malad Mumbai project image 3' },
      { src: '/images/project-images/Malad-Mumbai/img4.jpg', alt: 'Malad Mumbai project image 4' },
      { src: '/images/project-images/Malad-Mumbai/img5.jpg', alt: 'Malad Mumbai project image 5' },
      { src: '/images/project-images/Malad-Mumbai/img6.jpg', alt: 'Malad Mumbai project image 6' },
      { src: '/images/project-images/Malad-Mumbai/img7.jpg', alt: 'Malad Mumbai project image 7' },
      { src: '/images/project-images/Malad-Mumbai/img8.jpg', alt: 'Malad Mumbai project image 8' },
      { src: '/images/project-images/Malad-Mumbai/img9.jpg', alt: 'Malad Mumbai project image 9' },
    ]
  },
  {
    image: '/images/project-images/manyavar-santacruz/img1.jpg',
    title: capitalizeWords('manyavar-santacruz'),
    location: getLocation('manyavar-santacruz'),
    slug: 'manyavar-santacruz',
    description: 'The client brief was to design a home that can cater for smaller numbers, but also for times where family return home for large gatherings or extended stays.',
    galleryImages: [
      { src: '/images/project-images/manyavar-santacruz/img7.jpg', alt: 'Manyavar Santacruz project image 7' },
      { src: '/images/project-images/manyavar-santacruz/img1.jpg', alt: 'Manyavar Santacruz project image 1' },
      { src: '/images/project-images/manyavar-santacruz/img2.jpg', alt: 'Manyavar Santacruz project image 2' },
      { src: '/images/project-images/manyavar-santacruz/img3.jpg', alt: 'Manyavar Santacruz project image 3' },
      { src: '/images/project-images/manyavar-santacruz/img4.jpg', alt: 'Manyavar Santacruz project image 4' },
      { src: '/images/project-images/manyavar-santacruz/img5.jpg', alt: 'Manyavar Santacruz project image 5' },
      { src: '/images/project-images/manyavar-santacruz/img6.jpg', alt: 'Manyavar Santacruz project image 6' },
    ]
  },
]

export default projectdata
