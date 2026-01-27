import { useEffect, useRef, useState } from 'react';
import '@fontsource/lora';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '../../animations/SplitText';
import JourneySection from '../sections/JourneySection';
import JourneyCard from '../sections/JourneyCard';
import CultureSection from '../sections/CultureSection';
import NetworkSection from '../sections/NetworkSection';
import DepartmentsSection from '../sections/DepartmentsSection';
import LeadershipSection from '../sections/LeadershipSection';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    
    const viewportWidth = Math.min(window.innerWidth);
    const totalWidth = container.scrollWidth - viewportWidth;

    gsap.to(container, {
      x: -totalWidth,
      ease: 'power10.out',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: 6,
        pin: true,
        anticipatePin: 1,
      },
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden flex justify-center font-lora items-center ">
      <div className="flex flex-col h-auto w-full max-w-640 mx-auto">
      <div ref={containerRef} className="flex mt-12 2xl:mt-24.5">
        <div className="2xl:w-640 w-351.5 h-130 2xl:h-293.5 shrink-0 flex items-center justify-center">
            <div className="w-[95%] h-[90%]">
                <div className=" w-full h-22.5 flex">
                    <div className="w-[50%]">
                        <SplitText 
                            text="The story so far."
                            tag="h1"
                            className="text-5xl 2xl:text-8xl font-semibold"
                        />
                        
                    </div>
                    <div className="w-[50%] text-sm 2xl:text-xl font-medium">
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
                <div className=" 2xl:mt-10 h-auto flex">
                    <JourneyCard delayImage={1.3} delayText={2.4} mainImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FC_Level_depan_FM__1__1xuSz8bB-.jpg&w=1080&q=75"} title={"Cornerstone"} date={"2019-2020"} description={'"From a humble studio, we carved our mark in Indonesia’s digital media landscape, fueled by hope and ambition."'} />
                    <JourneyCard delayImage={1.6} delayText={2.5} mainImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FCondfe_Ogs_sF1pktnjY.png&w=1080&q=75"} title={"Effective"} date={"2023"} description={'Our strategy worked, optimizing along the way. We stayed relevant and achieved milestones that defined our success this year.'} />
                    <JourneyCard delayImage={1.9} delayText={2.6} mainImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FGrowth_2q-aUv5Wb.jpg&w=1080&q=75"} title={"Growth"} date={"2021-2022"} description={'We experienced remarkable growth, building on that foundation while relentlessly pushing to sustain our momentum.'} />
                    <JourneyCard delayImage={2.2} delayText={2.7} mainImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FPalnus_1_5KfTEbYBC.png&w=1080&q=75"} title={"Impact"} date={"2024"} description={'Our intuition sparked a significant impact, driving positive change that rippled far beyond our immediate circle.'} />
                </div>
            </div>
        </div>
        <JourneySection title={"All aboard"} date={"4th September 2020"} heading={"First things first"} descriptionP1={"The first year of Cretivox has been nothing short of an adventure—an exciting blend of challenges, growth, and vision. We’ve faced every obstacle head-on, turning potential setbacks into stepping stones, and emerged stronger, more dynamic, and ready for what’s next. With every hurdle, our team has expanded, not just in numbers but in spirit, ambition, and creativity. Together, we’ve fostered an environment where ideas flow freely and innovation thrives."} descriptionP2={"One of the standout moments of this year was the launch of the Cretivox Internship Experience, an initiative that perfectly embodies our commitment to nurturing talent and pushing boundaries. It’s not just about growing a business; it’s about growing a community, where every voice matters, and every idea has the potential to spark something extraordinary. In just twelve months, we’ve evolved from a startup with a dream into a brand that’s making waves, a brand that people want to be a part of."} mainImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FJaknet_vaGGI3Ikn.png&w=1080&q=75"} sideImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FCIE_BATCH_2__1__5b8gqjSSU.jpg&w=1080&q=75"} />
        <JourneySection title={"Moving up"} date={"4th September 2021"} heading={"New home, new people"} descriptionP1={"This year, inspired by the grace of a swan—gliding effortlessly while working tirelessly beneath the surface—Cretivox embodies elegance and relentless hustle. As we celebrate our second anniversary, we boldly advance our exploration across multiple fields, marking our evolution into a dynamic force."} descriptionP2={"Our new, larger office reflects our rapid growth and the confidence that drives us forward. This milestone symbolizes not just physical expansion, but also our thriving potential and ambition for the future."} mainImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FBatch_5_E3ZZC-w9k.png&w=1080&q=75"} sideImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FFix_Logo_2_OCT24il69.png&w=1080&q=75"} />
        <JourneySection title={"Stronger together"} date={"4th September 2022"} heading={"Together in 3"} descriptionP1={"In our third year, Cretivox finds inspiration in the small yet mighty ant, a creature that symbolizes tireless dedication, quiet strength, and unbreakable unity. Like the ant, we move with purpose, never faltering, always working together in harmony—each step guided by the belief that together, we can achieve more. These values are the heartbeat of Cretivox, and we carry them with us as we continue our journey."} descriptionP2={"We also recognize that there are parts of us yet to be polished, places where our voice can ring louder and clearer. But isn’t that the beauty of growth? To look back with pride at what we’ve accomplished while embracing the challenges that lie ahead with an open heart. We’re here to keep evolving, learning, and becoming more—one step at a time, hand in hand."} mainImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FKE3_-_2_VgaET3pPC.png&w=1080&q=75"} sideImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FKE3_-_3_ZVXq0Ob_j.png&w=1080&q=75"} />
        <JourneySection title={"The cunning pack"} date={"4th September 2023"} heading={"4 years strong"} descriptionP1={"This year has been a chapter full of beautiful milestones, where Cretivox has blossomed into a company that’s not only more refined but also more professional. We’ve grown in ways that go beyond numbers and achievements—we’ve matured in spirit, vision, and responsibility. This year, we also marked the conclusion of the Cretivox Internship Experience, closing with Batch X (Finale). Through this journey, we didn’t just teach; we learned how powerful collaboration can be. We discovered that when people come together, united by a shared goal, they can create something truly meaningful."} descriptionP2={"As we enter our fourth year, we embrace the responsibility to be more resilient, unified, and stronger—much like a pack of wolves hunting together with precision and purpose. Four years strong, we stand ready to face the challenges ahead, guided by the wisdom of our experiences and a collective vision for the future."} mainImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FKE4_-_IMAGE_RudFLvzz9.png&w=1080&q=75"} sideImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FKE4_-_LOGO_w8J6pOkIz.png&w=1080&q=75"} />
        <JourneySection title={"Doing good, giving good"} date={"4th September 2024"} heading={"On the right 5"} descriptionP1={"In our fifth year, we’ve made a significant impact with the Cretivox Internship Experience, now in its second season after nine batches. We've also established the Cretivox Creative Community to nurture and connect young Indonesians."} descriptionP2={"Like a colony of bees, we work together intelligently and passionately, transforming challenges into opportunities. Our mission is to create meaningful change through collaboration and innovation. We believe that even small actions can create lasting waves of change, inspiring others along the way."} mainImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FKE5_-_IMAGE_9kXh6YiEf.png&w=1080&q=75"} sideImage={"https://cretivox.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcretivox%2FKE5_-_LOGO_dXafbAgxx.png&w=1080&q=75"} />
      </div>
      <div className="">
        <CultureSection />
      </div>
      <div className="">
        <NetworkSection />
      </div>
      <div className="">
        <LeadershipSection />
      </div>
      <div className="">
        <DepartmentsSection />
      </div>
    </div>
    </section>
  );
};

export default Hero;