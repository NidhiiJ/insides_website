import Whyustextcard from "./ReusableComponents/Whyustextcard"


interface ContentProps {
    heading: string,
    url: string,
    text: string
}
const WhyUs = () => {
    const content:ContentProps[]=[
        {   heading:'heading1',
            url:'/images/whyus-1.png',
            text: 'We manage your property from A to Z: Tenant search, reception, maintenance.'
        },
        {
            heading:'heading2',
            url:'/images/whyus-2.png',
            text: 'Each month, we guarantee your rent, whatever the occupancy rate.'
        },
        { heading:'heading3',
            url:'/images/whyus-3.png',
            text: 'You can recover your property whenever you want, the lease is concluded.'
        },
         { heading:'heading4',
            url:'/images/whyus-1.png',
            text: 'We manage your property from A to Z: Tenant search, reception, maintenance.'
        },
         { heading:'heading5',
            url:'/images/whyus-2.png',
            text: 'Each month, we guarantee your rent, whatever the occupancy rate.'
        },
         { heading:'heading6',
            url:'/images/whyus-3.png',
            text: 'You can recover your property whenever you want, the lease is concluded.'
        },
    ]
    
  return (
    <div id='why-us' className="px-8">
        <div className="text-center text-[32px] md:text-[43px] lg:text-[54px] font-Maharlika pb-7 md:pb-14">Why Choose Us?</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 justify-items-center">
            {content.map((x,i)=>(
                <Whyustextcard key={i} imgurl={x.url} text={x.text} heading={x.heading} />
            ))}
        </div>
    </div>
  )
}

export default WhyUs