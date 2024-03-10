import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="Hero w-[100vw] h-[100vh]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <video autoPlay muted loop id="video-bg" className="object-cover w-[100vw] h-[100vh]">
              <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>

      <NavBar/>

      <div className="short-brand-description absolute top-72 left-10 font-bold text-5xl">
        <p className="hero-text h-28">
          Elevating Brands, <br />
          Powering Progress
        </p>
      </div>

      <div className="scroll-indicator-div">
        <span className="scroll-indicator"></span>
        <span className="scroll-indicator"></span>
        <span className="scroll-indicator"></span>
      </div>

      <section className="w-[100vw] h-[200vh] max-w-[100vw] overflow-clip">
        <div className="flex flex-col pt-3 pb-3 bg-black w-[100vw] relative inset-0 h-[200vh] z-0">
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a</div>
          <div className="text-scroll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam? Lorem ipsum dolor sit a some</div>
          <div className="card flex justify-center items-center">
          </div>
        </div>

        <div className="flex gap-5 glass-cards w-[100vw] h-[100vh] absolute inset-0 bg-transparent top-[100vh] p-10">
            <div className="glass-card large-card" style={{flex : '0.5'}}>
              <h1>PR Agency</h1>
              <p>Personal Brand Management & Our Passion!</p>
            </div>
            <div className="small-cards flex flex-col gap-4" style={{flex : '0.5'}}>
              <div className="glass-card small-card1"style={{flex : '0.5'}}>
                <p>Digital Brand <br /> Building!</p>
              </div>
              <div className="glass-card small-card2"style={{flex : '0.5'}}>
                <h2>Our Podcast!</h2>
                <span>Easy on Talk</span>
              </div>
            </div>
        </div>

        <div className="founders w-[100vw] h-[100vh] absolute top-[200vh] flex flex-col gap-7 justify-center items-center">
          <h1 className="glass-morph p-5 founders-h">Founders</h1>
          <div className="carousel carousel-center max-w-md p-4 glass-morph space-x-4 rounded-box">
            <div className="carousel-item">
              <img src="/f1.jpg" className="rounded-box w-[250px] h-[400px]" />
            </div> 
            <div className="carousel-item">
              <img src="/f2.jpg" className="rounded-box w-[250px] h-[400px]" />
            </div> 
            <div className="carousel-item">
              <img src="/f3.jpg" className="rounded-box w-[250px] h-[400px]" />
            </div> 
            <div className="carousel-item">
              <img src="/f4.jpg" className="rounded-box w-[250px] h-[400px]" />
            </div> 
          </div>
        </div>
      </section>

        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">About Us</h2>
                <p className="text-sm">Media Agency That Help Building Brands and Manage Them</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                <ul className="list-none">
                  <li><a href="#" className="text-sm text-cyan-500 hover:text-white">Home</a></li>
                  <li><a href="#" className="text-sm text-cyan-500 hover:text-white">About</a></li>
                  <li><a href="#" className="text-sm text-cyan-500 hover:text-white">Services</a></li>
                  <li><a href="#" className="text-sm text-cyan-500 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <p className="text-sm">Email: info@example.com</p>
                <p className="text-sm">Phone: +123456789</p>
              </div>
            </div>
          </div>
          {/* jfldjsfljdsf */}
        </footer>
    </main>
  );
}
