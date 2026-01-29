import ScrollStack, { ScrollStackItem } from "../../animations/ScrollStack";

const CultureSection = () => {
  return (
    <div className="w-full h-auto 2xl:h-320 flex justify-center ">
      <div className="w-[95%] h-auto">
        <div className="2xl:mb-[92.16px] mb-7.5 pt-[110.16px] text-[40px] 2xl:text-[92px]">
          <h2>Apa yang menggerakkan kami</h2>
        </div>
        <div className="flex">
          <div className=" 2xl:h-auto w-[20%] 2xl:text-2xl">
            <ul>
              <li>Budaya</li>
              <li>Kolaborasi</li>
              <li>Kualitas Karya</li>
              <li>Pertumbuhan</li>
            </ul>
          </div>
          <div className="2xl:-mt-50 -mt-60 mr-20 2xl:mr-0 h-[1000.59px] w-[1580.05px]">
            <ScrollStack>
              <ScrollStackItem>
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=70"
                  alt="Team culture"
                />
              </ScrollStackItem>

              <ScrollStackItem>
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=70"
                  alt="Team collaboration"
                />
              </ScrollStackItem>

              <ScrollStackItem>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=70"
                  alt="Creative craft"
                />
              </ScrollStackItem>

              <ScrollStackItem>
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=70"
                  alt="Team growth"
                />
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureSection;
