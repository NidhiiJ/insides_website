
import { Link } from 'react-router-dom';

interface CustomProps{
    paddingTop : boolean | undefined;
    imagePath : string;
    title : string;
    location : string;
    windowSize: number;
    slug: string;
    // paddingBottom : number;
}

const ImageCard = (props:CustomProps) => {
  return (
    <Link to={`/projects/${props.slug}`} className={`${props.paddingTop? 'pt-[50px]': 'pt-[0]'} flex flex-col gap-1 px-3 md:px-6 transition-transform hover:scale-[1.02]`}>
        <img src={props.imagePath} alt="img" className={`${props.windowSize < 768 ? ' h-[220px] min-w-[200px] max-w-none rounded-t-md ':' h-[395px] min-w-[193px] '} object-cover`}/>
        <p className=" leading-normal text-[10px] md:text-[14px] text-[#AEAEAE] ">{props.location.toUpperCase()}</p>
        <span className=" text-[16px] md:text-[28px] font-Maharlika">{props.title.toUpperCase()}</span>
    </Link>
  )
}

export default ImageCard