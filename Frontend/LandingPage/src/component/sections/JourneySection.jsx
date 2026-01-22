const JourneySection = ({title,date,heading,descriptionP1,descriptionP2,mainImage,sideImage}) => {
    return (
        <div className="w-640 h-293.5 shrink-0 flex items-center justify-center">
            <div className="w-[95%] h-[90%]">
                <div className=" w-full h-22.5 flex">
                     <div className="w-[50%]">
                        <h1 className="text-8xl font-bold">{title}</h1> 
                    </div>
                </div>
                <div className="w-full h-[90%] flex pt-13">
                    <div className="w-[1406.7px]">
                        <img className='w-full h-[797.91px] object-cover' src={mainImage} alt="" />
                    </div>
                    <div className="w-[602.89px] px-18.25">
                        <div className="w-full h-9 mb-[6.144px] text-[1.2vw] font-semibold">
                            <p>{date}</p>
                        </div>
                        <div className="w-full mb-[55.296px] text-[1.92vw]">
                            <h3>{heading}</h3>
                        </div>
                        <div className="h-auto w-full text-[.79vw] font-semibold">
                            <span>
                                {descriptionP1}
                                <br/>
                                <br/>
                                {descriptionP2}
                            </span>
                        </div>
                    </div>
                    <div className=" w-[401.92px]">
                        <img className='w-full h-[535.89px] object-cover' src={sideImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JourneySection