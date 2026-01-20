import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '../component/SplitText';

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
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
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
                            className="text-6xl font-bold"
                        />
                        
                    </div>
                    <div className="w-[50%] text-xl font-bold">
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
                <div className=" mt-10 h-[80%] flex">
                    <div className="h-full w-[25%] bg-amber-50">
                        <div className="">
                            <img className='w-[520px] h-[540px] object-cover' src="https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FC_Level_depan_FM__1__1xuSz8bB-.jpg&w=1080&q=75" />
                        </div>
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-640 h-293.5 shrink-0 flex items-center justify-center">
            <div className="w-[95%] h-[90%] ">
                <div className=" w-full h-22.5 flex">
                    <div className="w-[50%]">
                        <SplitText 
                            text="The story so far."
                            tag="h1"
                            className="text-6xl font-bold"
                            delay={100}
                        />
                        
                    </div>
                    <div className="w-[50%] text-xl font-bold">
                        <SplitText
                        text="With a mix of wild tales and unforgettable moments, every story spices up our"
                        tag='p'
                        />
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
                <div className=" mt-10 h-[80%] flex">
                    <div className="h-full w-[25%] bg-amber-50">
                        <div className="">
                            <img className='w-[520px] h-[540px] object-cover' src="https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FC_Level_depan_FM__1__1xuSz8bB-.jpg&w=1080&q=75" />
                        </div>
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;