import { useEffect, useState } from "react";
import FadeContent from "../../animations/FadeContent";
import SplitText from "../../animations/SplitText";

const JourneyCard = ({mainImage,title,date,description,delayImage,delayText,}) => {
const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true),2250 );
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="h-full w-auto mr-6 pr-7 2xl:mr-9 2xl:pr-9 border-r">
      <div className="w-70.25 2xl:w-[528.16px]">
        <FadeContent delay={delayImage}>
          <img
            className="w-70.25 2xl:w-[528.16px] h-70.25 2xl:h-[528.16px] object-cover"
            src={mainImage}
          />
        </FadeContent>
      </div>
      <div className="2xl:mt-25 2xl:w-130 mt-3 text-sm">
        {show && (
          <>
            <div className="2xl:text-4xl font-bold">
              <SplitText text={title} tag="p" />
            </div>
            <div className="2xl:text-2xl italic">
              <SplitText text={date} tag="h1" />
            </div>
          </>
        )}
      </div>
      <div className="2xl:mt-2 2xl:w-130 2xl:text-2xl text-sm">
        <FadeContent delay={delayText}>
          <p>{description}</p>
        </FadeContent>
      </div>
    </div>
  );
};

export default JourneyCard;
