import '@fontsource/arimo'
import '@fontsource/lora';

const NetworkSection = () => {
    return (
        <>
        <section>
            <div className="w-full h-320 flex justify-center font-sans mt-30">
                <div className="w-[95%] h-auto">
                    <div className="h-49 flex flex-col justify-center text-center text-8xl">
                        <div className="">
                            <h3>How we manage</h3>
                        </div>
                        <div className="">
                            <h3>our culture?</h3>
                        </div>
                    </div>
                    <div className="mt-5 h-110 flex justify-between">
                        <div className="w-[31%] h-full overflow-hidden">
                            <img
                            className="w-full h-full object-cover"
                            src="https://cretivox.com/_next/image?url=%2Fculture2%2F1.jpeg&w=1080&q=75"
                            alt=""
                            />
                        </div>
                        <div className="w-[31%] h-full overflow-hidden">
                            <img
                            className="w-full h-full object-cover"
                            src="https://cretivox.com/_next/image?url=%2Fculture2%2F2.jpg&w=1080&q=75"
                            alt=""
                            />
                        </div>
                        <div className="w-[31%] h-full overflow-hidden">
                            <img
                            className="w-full h-full object-cover"
                            src="https://cretivox.com/_next/image?url=%2Fculture2%2F3.jpg&w=1080&q=75"
                            alt=""
                            />
                        </div>
                    </div>
                    <div className="mt-20 text-center flex flex-col justify-center items-center">
                        <div className="w-[78%] text-5xl font-lora">
                            <p>At Cretivox, each individual embodies the essence of a creator, weaving their unique story into the fabric of our culture. We ignite passion for creativity and innovation that resonates deeply within us all.</p>
                        </div>
                        <div className="mt-20 text-2xl">
                            <p>We blend creativity and strategy to craft bold campaigns for Gen Z and Millennials. Our dynamic culture thrives on adaptability and collaboration, where every individual leaves their mark and shapes our story. Through immersive internships, we’re not just nurturing future leaders but igniting industry change-makers. At Cretivox, innovation, relevance, and exceptional results come with a touch of style.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default NetworkSection;