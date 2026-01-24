import FadeContent from "../../animations/FadeContent";
import {CrevtivoxHeader} from "../icons/Crevtivox";


const Navbar = () => {
    return (
        <>
        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
            <nav className="w-full h-24.5 flex justify-center items-center max-w-640 mx-auto">
                <div className="w-[95%] h-ful flex justify-between items-center text-xl">
                    <div className="flex gap-6 ">
                        <a href="" className="border-b" >ABOUT</a>
                        <a href="" className="border-b" >WORK</a>
                        <a href="" className="border-b" >PLATFROM</a>
                    </div>
                    <div className="">
                        <CrevtivoxHeader />
                    </div>
                    <div className="flex gap-6">
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