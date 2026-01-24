import ScrollStack, { ScrollStackItem } from '../../animations/ScrollStack';

const CultureSection = () => {
    return (
        <div className="w-full h-320 flex justify-center">
        <div className="w-[95%] h-auto">
          <div className="mb-[92.16px] pt-[110.16px] text-[92px]">
            <h2>The DNA inside</h2>
            <p>all of us</p>
          </div>
          <div className="flex">
            <div className=" h-auto w-[20%] text-2xl">
              <ul>
                <li>Culture</li>
                <li>Internship</li>
                <li>Cultivating</li>
                <li>Telapak</li>
              </ul>
            </div>
            <div className="-mt-50 h-[1000.59px] w-[1580.05px]">
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