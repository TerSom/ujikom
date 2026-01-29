import "@fontsource/arimo";
import caracter1 from "../icons/1.webp";
import caracter2 from "../icons/2.webp";
import caracter3 from "../icons/3.webp";

const LeadershipSection = () => {
  return (
    <section className="bg-black w-full h-320 font-sans flex justify-center text-white">
      <div className="w-[95%] h-auto">
        <div className="mt-25 text-6xl">
          <h2>Leadership</h2>
        </div>

        <div className="h-[75%] mt-15 flex justify-between">
          <div className="w-[31%]">
            <img
              className="h-[70%] w-full object-cover"
              src={caracter1}
              alt=""
            />
            <div className="text-center text-4xl mt-4">
              <h4>Adam</h4>
              <h3>Creative Director</h3>
            </div>
            <div className="text-center text-2xl mt-5">
              <p>
                Adam bertanggung jawab atas arah kreatif dan kualitas visual
                setiap proyek. Ia memastikan setiap desain memiliki konsep yang
                jelas, konsisten, dan selaras dengan tujuan brand klien.
              </p>
            </div>
          </div>

          <div className="w-[31%]">
            <img
              className="h-[70%] w-full object-cover"
              src={caracter2}
              alt=""
            />
            <div className="text-center text-4xl mt-4">
              <h4>Umay</h4>
              <h3>Strategy & Marketing</h3>
            </div>
            <div className="text-center text-2xl mt-5">
              <p>
                Umay mengelola strategi komunikasi dan pemasaran brand. Ia fokus
                menerjemahkan kebutuhan klien menjadi pesan yang tepat sasaran
                dan mudah dipahami oleh audiens.
              </p>
            </div>
          </div>

          <div className="w-[31%]">
            <img
              className="h-[70%] w-full object-cover"
              src={caracter3}
              alt=""
            />
            <div className="text-center text-4xl mt-4">
              <h4>Ficky</h4>
              <h3>Operations & Finance</h3>
            </div>
            <div className="text-center text-2xl mt-5">
              <p>
                Ficky menangani operasional dan pengelolaan keuangan agar proses
                kerja berjalan efisien. Ia menjaga struktur internal tetap rapi
                sehingga tim dapat fokus pada proses kreatif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
