import "@fontsource/arimo";
import caracter1 from "../icons/1.webp"
import caracter2 from "../icons/2.webp"
import caracter3 from "../icons/3.webp"


const LeadershipSection = () => {
    return (
        <section className="bg-black w-full h-320 font-sans flex justify-center text-white">
            <div className="w-[95%] h-auto">
                <div className="mt-25 text-6xl">
                    <h2>Leadership</h2>
                </div>
                <div className="h-[75%] mt-15 flex justify-between">
                    <div className="w-[31%]">
                        <img className=" h-[70%] w-full object-cover" src={caracter1} alt="" />
                        <div className="text-center text-4xl mt-4">
                            <h4>Ben</h4>
                            <h3>Carncer | CEO</h3>
                        </div>
                        <div className="text-center text-2xl mt-5">
                            <p>Known as “Papa Gen Z,” he is a passionate advocate for dreamers and a catalyst for change. With his fiery enthusiasm, he takes pride in mentoring and inspiring the younger generation, embracing every Gen Z individual as part of his extended family.</p>
                        </div>
                    </div>
                    <div className="w-[31%]">
                        <img className=" h-[70%] w-full object-cover" src={caracter2} alt="" />
                        <div className="text-center text-4xl mt-4">
                            <h4>Caesar</h4>
                            <h3>Taurus | CMO</h3>
                        </div>
                        <div className="text-center text-2xl mt-5">
                            <p>Our resident GYM RAT and a wellspring of knowledge, he combines diverse insights with a deep understanding of various fields. His extensive expertise is matched only by his introverted nature, adding a unique touch to his thoughtful contributions.</p>
                        </div>
                    </div>
                    <div className="w-[31%]">
                        <img className=" h-[70%] w-full object-cover" src={caracter3} alt="" />
                        <div className="text-center text-4xl mt-4">
                            <h4>Bob</h4>
                            <h3>Taurus | CFO</h3>
                        </div>
                        <div className="text-center text-2xl mt-5">
                            <p>A One Piece enthusiast and avid toy collector, he views life as a game and spreads joy wherever he goes. He expertly manages Cretivox’s finances to support our creative endeavors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeadershipSection