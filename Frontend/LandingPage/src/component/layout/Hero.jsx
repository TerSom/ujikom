import { useEffect, useRef, useState } from "react";
import "@fontsource/lora";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../animations/SplitText";
import JourneySection from "../sections/JourneySection";
import JourneyCard from "../sections/JourneyCard";
import CultureSection from "../sections/CultureSection";
import NetworkSection from "../sections/NetworkSection";
import DepartmentsSection from "../sections/DepartmentsSection";
import LeadershipSection from "../sections/LeadershipSection";
import dummy1 from "../icons/dummy1.jpg";
import dummy2 from "../icons/dummy2.jpg";
import dummy3 from "../icons/dummy3.jpg";
import dummy4 from "../icons/dummy4.jpg";

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
      ease: "power10.out",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 6,
        pin: true,
        anticipatePin: 1,
      },
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden flex justify-center font-lora items-center "
    >
      <div className="flex flex-col h-auto w-full max-w-640 mx-auto">
        <div ref={containerRef} className="flex mt-12 2xl:mt-24.5">
          <div className="2xl:w-640 w-351.5 h-130 2xl:h-293.5 shrink-0 flex items-center justify-center">
            <div className="w-[95%] h-[90%]">
              <div className=" w-full h-22.5 flex">
                <div className="w-[50%]">
                  <SplitText
                    text="Our Journey"
                    tag="h1"
                    className="text-5xl 2xl:text-8xl font-semibold"
                  />
                </div>
                <div className="w-[50%] text-sm 2xl:text-xl font-medium">
                  <SplitText
                    text="Kami mengerjakan setiap proyek dengan pendekatan yang terencana dan eksekusi yang jelas."
                    tag="p"
                  />
                  <br />
                  <SplitText
                    text="Alih-alih mengikuti tren secara membabi buta, kami fokus menciptakan solusi kreatif yang relevan, tepat guna,"
                    tag="p"
                  />
                  <br />
                  <SplitText text="dan efektif bagi setiap brand." tag="p" />
                </div>
              </div>
              <div className=" 2xl:mt-10 h-auto flex">
                <JourneyCard
                  delayImage={1.3}
                  delayText={2.4}
                  mainImage={dummy1}
                  title={"Tahap Awal"}
                  date={"2023"}
                  description={
                    "Darman Creative memulai perjalanan sebagai studio kreatif kecil yang fokus pada desain yang jelas dan fungsional."
                  }
                />
                <JourneyCard
                  delayImage={1.6}
                  delayText={2.5}
                  mainImage={dummy2}
                  title={"Pengembangan Proses"}
                  date={"2024"}
                  description={
                    "Kami menyempurnakan alur kerja dan mengeksplorasi berbagai pendekatan kreatif."
                  }
                />
                <JourneyCard
                  delayImage={1.9}
                  delayText={2.6}
                  mainImage={dummy3}
                  title={"Perluasan Layanan"}
                  date={"2025"}
                  description={
                    "Layanan kami berkembang mencakup branding, desain digital, dan konten kreatif."
                  }
                />
                <JourneyCard
                  delayImage={2.2}
                  delayText={2.7}
                  mainImage={dummy4}
                  title={"Fokus Berkelanjutan"}
                  date={"2026"}
                  description={
                    "Kami terus berfokus pada konsistensi dan kualitas dalam setiap proyek."
                  }
                />
              </div>
            </div>
          </div>
          <JourneySection
            title={"Bertumbuh"}
            date={"2024"}
            heading={"Building momentum"}
            descriptionP1={
              "Seiring bertambahnya proyek, kami mulai memperkuat kolaborasi dan ritme kerja tim."
            }
            descriptionP2={
              "Diskusi dan pertukaran ide menjadi bagian penting dari proses kreatif kami."
            }
            mainImage={
              "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=900&q=70"
            }
            sideImage={
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=70"
            }
          />

          <JourneySection
            title={"Penguatan"}
            date={"2025"}
            heading={"Refining the craft"}
            descriptionP1={
              "Kami memperdalam fokus pada kualitas desain dan ketelitian dalam eksekusi."
            }
            descriptionP2={
              "Setiap detail menjadi perhatian untuk menghasilkan karya yang lebih matang."
            }
            mainImage={
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=70"
            }
            sideImage={
              "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=70"
            }
          />

          <JourneySection
            title={"Present"}
            date={"2026"}
            heading={"Moving forward"}
            descriptionP1={
              "Darman Creative terus berkembang sebagai creative agency yang adaptif dan kolaboratif."
            }
            descriptionP2={
              "Kami bergerak maju dengan pendekatan yang lebih strategis dan terarah."
            }
            mainImage={
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=70"
            }
            sideImage={
              "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=70"
            }
          />
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
