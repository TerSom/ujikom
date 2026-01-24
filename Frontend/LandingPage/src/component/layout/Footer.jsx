import { CrevtivoxFooter } from "../icons/Crevtivox"
import '@fontsource/arimo'
import 'boxicons/css/boxicons.min.css'

const Footer = () => {
    return (
        <>
        <div className="h-auto w-full flex justify-center items-center font-sans max-w-640 mx-auto bg-black">
            <div className=" h-157.75 w-[95%] flex text-white gap-46">
                <div className=" py-15 w-[31%] flex flex-col justify-between">
                    <div className="text-2xl ">
                        <p>Cretivox is a leading digital media company and creative agency established in 2019, dedicated to fostering a creative community for young people and embodying the Voice of People.</p>
                    </div>
                    <div className="h-24 flex flex-col gap-1">
                        <CrevtivoxFooter />
                        <br />
                        <p className="text-xl">© 2026 CRETIVOX BROADCASTING NETWORK  |  <a href="">PRIVACY POLICY</a></p>
                    </div>
                </div>
                <div className="py-15 w-[6%] text-left text-3xl font-bold">
                    <a href=""><h3>NEWS</h3></a>
                </div>
                <div className="py-15 w-[7%] text-left flex flex-col gap-7">
                    <h3 className="text-3xl font-bold">CONTACT</h3>
                    <a href="" className="text-2xl">Contact Form</a>
                </div>
                <div className="py-15 w-[7%] text-left text-xl flex flex-col gap-7">
                    <h3 className="text-3xl font-bold">PRESSKIT</h3>
                    <a href="">Brand Assets</a>
                    <a href="">Insights</a>
                </div>
                <div className="py-15 w-[15%] flex flex-col justify-between">
                    <div className="text-3xl font-bold flex flex-col gap-8">
                        <h3>SOCIALS</h3>
                        <div className="w-50 h-40 flex flex-col gap-8">
                            <div className="text-5xl flex gap-8">
                            <a href=""><i className='bx bxl-instagram hover:opacity-70' ></i></a>
                            <a href=""><i className='bx bxl-tiktok hover:opacity-70'></i></a>
                            </div>
                            <div className="text-5xl flex gap-8">
                            <a href=""><i className='bx bxl-youtube hover:opacity-70' ></i></a>
                            <a href=""><i className='bx bxl-linkedin-square hover:opacity-70'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-24">
                        <p>made with passion by</p>
                        <a href="">
                            <img alt="plabs.id" loading="lazy" src="https://cretivox.com/plabs.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer