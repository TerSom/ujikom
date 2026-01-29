import FadeContent from "../../animations/FadeContent";
import logoCreative from "../icons/DarmanBlack.png"


const Navbar = () => {
    return (
        <>
        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
            <nav className="w-full h-15 2xl:h-24.5 flex justify-center items-center max-w-640 mx-auto">
                <div className="w-[95%] h-ful flex justify-between items-center text-sm 2xl:text-xl">
                    <div className="md:flex gap-6 hidden ">
                        <a href="" className="border-b" >ABOUT</a>
                        <a href="" className="border-b" >WORK</a>
                        <a href="" className="border-b" >PLATFROM</a>
                    </div>
                    <div className="w-full flex justify-between md:w-auto">
                        <img src={logoCreative} alt="Logo Creative" className="h-12"/>
                        <div className="md:hidden flex justify-center items-center text-2xl">
                            <i className='bx bx-menu'></i>
                        </div>
                    </div>
                    <div className="md:flex gap-6 hidden">
                        <a href="" className="border-b" >NEWS</a>
                        <a href="" className="border-b" >JOBS</a>
                        <a href="" className="border-b" >CONTACT</a>
                    </div>
                </div>
            </nav>
        </FadeContent>
        </>
    )
}

export default Navbar