import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '../../animations/SplitText';
import FadeContent from '../../animations/FadeContent';
import JourneySection from './JourneySection';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const totalWidth = container.scrollWidth - window.innerWidth;

    gsap.to(container, {
      x: -totalWidth,
      ease: 'power5.out',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: 4,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const [show, setShow] = useState(false);

    useEffect(() => {
    const t = setTimeout(() => setShow(true), 2260);
    return () => clearTimeout(t);
    }, []);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden">
      <div ref={containerRef} className="flex mt-24.5">
        <div className="w-640 h-293.5 shrink-0 flex items-center justify-center">
            <div className="w-[95%] h-[90%] ">
                <div className=" w-full h-22.5 flex">
                    <div className="w-[50%]">
                        <SplitText 
                            text="The story so far."
                            tag="h1"
                            className="text-8xl font-bold"
                        />
                        
                    </div>
                    <div className="w-[50%] text-xl font-medium">
                        <SplitText 
                        text="With a mix of wild tales and unforgettable moments, every story spices up our"
                        tag='p'/>
                        <br />
                        <SplitText 
                        text="adventure. We’re not just a corporate machine; we’re the mischievous"
                        tag='p'/>
                        <br />
                        <SplitText 
                        text="narrators of the voices that keep the world buzzing."
                        tag='p'/>
                    </div>
                </div>
                <div className=" mt-10 h-auto flex">
                    <div className="h-full w-141 mr-9 pr-9 border-r">
                        <div className="w-[528.16px]">
                            <FadeContent delay={1.3}>
                            <img className='w-[528.16px] h-[528.16px] object-cover' src="https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FC_Level_depan_FM__1__1xuSz8bB-.jpg&w=1080&q=75" />
                            </FadeContent>
                        </div>
                        <div className="mt-25 w-130">
                            {show && (
                                <>
                            <div className='text-4xl font-bold'>
                                <SplitText 
                                text={"Cornerstone"}
                                tag='p'
                                />
                            </div>
                            <div className='text-2xl italic'>
                                <SplitText 
                                text={"2019-2020"}
                                tag='h1'
                                />
                            </div>
                            </>
                            )}
                        </div>
                        <div className="mt-2 w-130 text-2xl ">
                            <FadeContent delay={2.4}>
                            <p>"From a humble studio, we carved our mark in Indonesia’s digital media landscape, fueled by hope and ambition."</p>
                            </FadeContent>
                        </div>
                    </div>
                    <div className="h-full w-141 mr-9 pr-9 border-r">
                        <div className="w-[528.16px]">
                            <FadeContent delay={1.6}>
                            <img className='w-[528.16px] h-[528.16px] object-cover' src="https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FCondfe_Ogs_sF1pktnjY.png&w=1080&q=75" />
                            </FadeContent>
                        </div>
                        <div className="mt-25 w-130">
                            {show && (
                                <>
                            <div className='text-4xl font-bold'>
                                <SplitText 
                                text={"Growth"}
                                tag='p'
                                />
                            </div>
                            <div className='text-2xl italic'>
                                <SplitText 
                                text={"2021-2022"}
                                tag='h1'
                                />
                            </div>
                            </>
                            )}
                        </div>
                        <div className="mt-2 w-130 text-2xl ">
                            <FadeContent delay={2.5}>
                            <p>We experienced remarkable growth, building on that foundation while relentlessly pushing to sustain our momentum.</p>
                            </FadeContent>
                        </div>
                    </div>
                    <div className="h-full w-141 mr-9 pr-9 border-r">
                        <div className="w-[528.16px]">
                            <FadeContent delay={1.9}>
                            <img className='w-[528.16px] h-[528.16px] object-cover' src="https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FGrowth_2q-aUv5Wb.jpg&w=1080&q=75" />
                            </FadeContent>
                        </div>
                        <div className="mt-25 w-130">
                            {show && (
                                <>
                            <div className='text-4xl font-bold'>
                                <SplitText 
                                text={"Effective"}
                                tag='p'
                                />
                            </div>
                            <div className='text-2xl italic'>
                                <SplitText 
                                text={"2023"}
                                tag='h1'
                                />
                            </div>
                            </>
                            )}
                        </div>
                        <div className="mt-2 w-130 text-2xl ">
                            <FadeContent delay={2.6}>
                            <p>Our strategy worked, optimizing along the way. We stayed relevant and achieved milestones that defined our success this year.</p>
                            </FadeContent>
                        </div>
                    </div>
                    <div className="h-full w-141 mr-9 pr-9 border-r">
                        <div className="w-[528.16px]">
                            <FadeContent delay={2.2}>
                            <img className='w-[528.16px] h-[528.16px] object-cover' src="https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FPalnus_1_5KfTEbYBC.png&w=1080&q=75" />
                            </FadeContent>
                        </div>
                        <div className="mt-25 w-130">
                            {show && (
                                <>
                            <div className='text-4xl font-bold'>
                                <SplitText 
                                text={"Impact"}
                                tag='p'
                                />
                            </div>
                            <div className='text-2xl italic'>
                                <SplitText 
                                text={"2024"}
                                tag='h1'
                                />
                            </div>
                            </>
                            )}
                        </div>
                        <div className="mt-2 w-130 text-2xl ">
                            <FadeContent delay={2.7}>
                            <p>Our intuition sparked a significant impact, driving positive change that rippled far beyond our immediate circle.</p>
                            </FadeContent>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <JourneySection title={"All aboard"} date={"4th September 2020"} heading={"First things first"} descriptionP1={"The first year of Cretivox has been nothing short of an adventure—an exciting blend of challenges, growth, and vision. We’ve faced every obstacle head-on, turning potential setbacks into stepping stones, and emerged stronger, more dynamic, and ready for what’s next. With every hurdle, our team has expanded, not just in numbers but in spirit, ambition, and creativity. Together, we’ve fostered an environment where ideas flow freely and innovation thrives."} descriptionP2={"One of the standout moments of this year was the launch of the Cretivox Internship Experience, an initiative that perfectly embodies our commitment to nurturing talent and pushing boundaries. It’s not just about growing a business; it’s about growing a community, where every voice matters, and every idea has the potential to spark something extraordinary. In just twelve months, we’ve evolved from a startup with a dream into a brand that’s making waves, a brand that people want to be a part of."} mainImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FJaknet_vaGGI3Ikn.png&w=1080&q=75"} sideImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FCIE_BATCH_2__1__5b8gqjSSU.jpg&w=1080&q=75"} />
      </div>
    </section>
  );
};

export default Hero;