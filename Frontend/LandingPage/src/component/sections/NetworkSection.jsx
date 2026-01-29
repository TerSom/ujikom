import "@fontsource/arimo";
import "@fontsource/lora";

const NetworkSection = () => {
  return (
    <>
      <section>
        <div className="w-full h-auto mb-20 flex justify-center font-sans mt-30">
          <div className="w-[95%] h-auto">
            <div className="h-49 flex flex-col justify-center text-center text-8xl">
              <div>
                <h3>Bagaimana kami membangun</h3>
              </div>
              <div>
                <h3>budaya kerja</h3>
              </div>
            </div>

            <div className="mt-5 h-110 flex flex-wrap justify-between">
              <div className="w-[31%] h-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=75"
                  alt="Diskusi tim"
                />
              </div>

              <div className="w-[31%] h-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?w=1200&q=75"
                  alt="Kolaborasi kreatif"
                />
              </div>

              <div className="w-[31%] h-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=75"
                  alt="Kerja tim terfokus"
                />
              </div>
            </div>

            <div className="mt-20 text-center flex flex-col justify-center items-center">
              <div className="w-[78%] text-5xl font-lora">
                <p>
                  Budaya kami dibentuk oleh orang-orang yang peduli pada proses,
                  hasil, dan kerja sama. Kami percaya ide yang kuat lahir dari
                  kepercayaan, keterbukaan, dan rasa tanggung jawab bersama.
                </p>
              </div>

              <div className="mt-20 text-2xl">
                <p>
                  Kami bekerja di persimpangan kreativitas, teknologi, dan
                  strategi. Kolaborasi bukan sekadar istilah, tetapi cara kami
                  memecahkan masalah, menyempurnakan ide, dan menghasilkan
                  solusi yang relevan. Melalui proses kerja yang nyata dan
                  pembelajaran langsung, kami membuka ruang untuk tumbuh
                  bersama.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-282 flex justify-center font-sans mt-30">
          <div className="h-auto w-[34%] flex justify-center items-center">
            <img
              width={720}
              height={520}
              src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=75"
              alt="Jaringan kerja"
            />
          </div>

          <div className="h-auto w-[34%] flex justify-center items-center text-black text-8xl font-bold font-serif">
            <h1>OUR NETWORK</h1>
          </div>

          <div className="h-auto w-[34%] flex justify-center items-center">
            <img
              width={720}
              height={520}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=75"
              alt="Koneksi tim"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default NetworkSection;
