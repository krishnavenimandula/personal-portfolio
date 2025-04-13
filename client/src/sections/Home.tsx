import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('src/assets/images/banner.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Krishnaveni Mandula
          </h1>
          <br />
          <p className="text-xl text-muted-foreground mb-8">
            A passionate Full Stack Web Developer based in the UK. I craft
            modern, responsive, and user-friendly websites and applications.
          </p>
          <div className="">
            <button type="button" className="bg-mint-green text-black p-3">
              Resume
              {/* <span className="flex">
                <FaDownload className="w-4 h-4" />
              </span> */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
