import ScrollStack, { ScrollStackItem } from '../../animations/ScrollStack';

const CultureSection = () => {
    return (
        <div className="w-full h-auto 2xl:h-320 flex justify-center ">
        <div className="w-[95%] h-auto">
          <div className="2xl:mb-[92.16px] mb-7.5 pt-[110.16px] text-[40px] 2xl:text-[92px]">
            <h2>The DNA inside</h2>
            <p>all of us</p>
          </div>
          <div className="flex">
            <div className=" 2xl:h-auto w-[20%] 2xl:text-2xl">
              <ul>
                <li>Culture</li>
                <li>Internship</li>
                <li>Cultivating</li>
                <li>Telapak</li>
              </ul>
            </div>
            <div className="2xl:-mt-50 -mt-60 mr-20 2xl:mr-0 h-[1000.59px] w-[1580.05px]">
              <ScrollStack>
                <ScrollStackItem>
              <div className="">
                <img src="https://cretivox.com/_next/image?url=%2Fculture%2FCulture_1.png&w=1920&q=75" alt="" />
              </div>
                </ScrollStackItem>
                <ScrollStackItem>
              <div className="">
                <img src="https://cretivox.com/_next/image?url=%2Fculture%2FCulture_2.png&w=1920&q=75" alt="" />
              </div>
                </ScrollStackItem>
                <ScrollStackItem>
              <div className="">
                <img src="https://cretivox.com/_next/image?url=%2Fculture%2FCulture_3.png&w=1920&q=75" alt="" />
              </div>
                </ScrollStackItem>
                <ScrollStackItem>
              <div className="">
                <img src="https://cretivox.com/_next/image?url=%2Fculture%2FCulture_4.png&w=1920&q=75" alt="" />
              </div>
                </ScrollStackItem>
              </ScrollStack>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CultureSection