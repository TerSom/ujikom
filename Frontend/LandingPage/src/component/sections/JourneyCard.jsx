import { useEffect,useState } from 'react';
import FadeContent from '../../animations/FadeContent';
import SplitText from '../../animations/SplitText';
    
const JourneyCard = ({mainImage,title,date,description,delayImage,delayText}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
    const t = setTimeout(() => setShow(true), 2360);
    return () => clearTimeout(t);
    }, []);

    return (
        <div className="h-full w-141 mr-9 pr-9 border-r">
                        <div className="w-[528.16px]">
                            <FadeContent delay={delayImage}>
                            <img className='w-[528.16px] h-[528.16px] object-cover' src={mainImage} />
                            </FadeContent>
                        </div>
                        <div className="mt-25 w-130">
                            {show && (
                                <>
                            <div className='text-4xl font-bold'>
                                <SplitText 
                                text={title}
                                tag='p'
                                />
                            </div>
                            <div className='text-2xl italic'>
                                <SplitText 
                                text={date}
                                tag='h1'
                                />
                            </div>
                            </>
                            )}
                        </div>
                        <div className="mt-2 w-130 text-2xl ">
                            <FadeContent delay={delayText}>
                            <p>{description}</p>
                            </FadeContent>
                        </div>
                    </div>
    )
}

export default JourneyCard