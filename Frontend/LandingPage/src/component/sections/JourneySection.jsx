const JourneySection = ({title,date,heading,descriptionP1,descriptionP2,mainImage,sideImage}) => {
    return (
        <section className="w-354  2xl:w-640 2xl:h-293.5 shrink-0 flex items-center justify-center ">
            <div className="w-[95%] h-[90%]">
                <div className=" w-full 2xl:h-22.5 flex ">
                     <div className="w-[50%]">
                        <h1 className="text-5xl 2xl:text-8xl font-bold">{title}</h1> 
                    </div>
                </div>
                <div className="w-full h-[90%] flex pt-10 2xl:pt-13">
                    <div className="w-200 2xl:w-[1406.7px] ">
                        <img className='w-full h-95.25 2xl:h-[797.91px] object-cover' src={mainImage} alt="" />
                    </div>
                    <div className=" w-70 2xl:w-[602.89px] px-10 2xl:px-18.25 ">
                        <div className="2xl:w-full 2xl:h-9 mb-[6.144px] 2xl:text-[31px] font-semibold">
                            <p>{date}</p>
                        </div>
                        <div className="w-full mb-5.75 2xl:mb-[55.296px] text-2xl 2xl:text-[49px]">
                            <h3>{heading}</h3>
                        </div>
                        <div className="h-auto w-full text-[8.90px] 2xl:text-[20px] 2xl:font-semibold">
                            <span>
                                {descriptionP1}
                                <br/>
                                <br/>
                                {descriptionP2}
                            </span>
                        </div>
                    </div>
                    <div className="w-50 2xl:w-[401.92px] ">
                        <img className='w-full 2xl:h-[535.89px] object-cover' src={sideImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JourneySection