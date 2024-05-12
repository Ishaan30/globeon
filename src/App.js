import Layout from './Components/Layout/Layout';
import './App.css';
import bgImg from './assets/bg.jpg';
import aboutImg from "./assets/travel2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay,Navigation} from 'swiper';
import locationsData from "./Components/TravelCard/LocationsData.json";
import TravelCard from "./Components/TravelCard/TravelCard";
import {faLocationDot,faEnvelope,faMobile} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter,faYoutube,faLinkedin,faFacebook} from '@fortawesome/free-brands-svg-icons';

function App() {
  const locations = (
    <Swiper 
    modules={[Navigation,Autoplay]}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    navigation={true}
    slidesPerView={"auto"}
    slidesPerGroup={1}
    roundLengths={true}
    centeredSlides={true}
    loopAdditionalSlides={30}
    loop={true} 
    spaceBetween={100}
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 150,
        slidesPerGroup:1,
        centeredSlides:true
      },
      768: {
        slidesPerView: 3,
        centeredSlides: true,
        slidesPerGroup: 1,
        spaceBetween : 50
      },
      1024: {
        slidesPerView: 3,
        centeredSlides: true,
        slidesPerGroup: 1,
        spaceBetween:50
      },
    }}>
      {locationsData.map((location, index) => (
          <SwiperSlide className="md:w-auto lg:w-4/12 xl:w-3/12" key={index + Math.random()} >
            {() => (
            <TravelCard location={location}/>
            )}
          </SwiperSlide>
        )
      )}
    </Swiper>
    );
  return (
    <Layout>
     <section id='home' className='max-w-screen relative h-screen overflow-hidden'>
       <img src={bgImg} alt="background" className='h-full md:w-screen xl:h-auto absolute object-cover'/>
       <div className='absolute top-28 left-16 md:top-1/4 md:left-24 xl:top-1/3 w-4/5 lg:left-36 lg:w-3/5 text-white'>
         <p className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-widest leading-tight'>Explore around the globe with us</p>
         <p className='md:mt-6 xl:mt-4 font-bold text-xl' style={{letterSpacing:"0.3rem"}}>Take a look at most popular destinations</p>
         <div className='w-3/5 md:mt-10 xl:mt-4 text-center'>
         <button className='mt-10 p-2.5 px-6 font-semibold tracking-widest text-lg bg-orange-600 rounded-full hover:bg-white hover:text-orange-600'>Explore Now</button>
         </div>
       </div>
     </section>
     <section id='about-us' className='h-content p-8 md:px-24 md:py-16'>
        <h1 className='text-5xl font-bold tracking-widest text-purple-900'>About Us</h1>
        <div className='border-b-4 border-orange-600 h-8 w-28'></div>
        <div className='flex mt-10 md:flex-row flex-col justify-between'>
          <div>
            <p className='pt-4 text-2xl'>about us content</p>
            <button className='mt-10 p-2.5 px-6 font-semibold tracking-widest text-lg bg-orange-600 rounded-full hover:bg-white hover:text-orange-600 text-white'>Read More</button>
          </div>
          <div>
            <img src={aboutImg} alt="aboutus" />
          </div>
        </div>
     </section>
     {/* height will change according to content */}
     <section id='services' className='bg-dark-purple h-content p-8 md:px-24 md:py-16'> 
     <h1 className='text-5xl font-bold tracking-widest text-white'>Services</h1>
     <div className='border-b-4 border-orange-600 h-8 w-28'></div>
     </section>
     <section id='destinations' className='h-content p-8 md:px-24 md:py-16'>
     <h1 className='text-5xl font-bold tracking-widest text-purple-900'>Popular Destinations</h1>
      <div className='border-b-4 border-orange-600 h-8 w-28'></div>
      <p className='mt-6 text-lg text-blue-600 font-semibold tracking-widest'>From historical cities to natural splendours, come see the best of world!</p>
      <div className='mt-10 max-w-7xl'>
        {locations}
      </div>
     </section>
     <section id='contact-us' className='h-content p-8 lg:py-16 flex lg:flex-row flex-col justify-center relative items-center'>
      <div className='md:w-3/5 bg-dark-purple rounded-3xl'>
      <form className='flex flex-col justify-center items-center py-10 lg:py-20'>
       <h1 className='text-2xl lg:text-5xl text-white tracking-wider font-bold'>Get in Touch</h1>
       <p className='p-4 tracking-widest text-gray-200 lg:ml-0 ml-8'>Feel free to drop us a line below!</p>
       <input type="text" placeholder='Your name' className='my-2 rounded-lg lg:w-72 w-64 focus:outline-none px-4 py-1 bg-violet-200'/>
       <input type="mail" placeholder='Your email' className='my-2 rounded-lg lg:w-72 w-64 focus:outline-none px-4 py-1 bg-violet-200'/>
       <textarea name="Message" placeholder="Type your message here" className='my-2 h-36 w-64 rounded-lg lg:w-72 focus:outline-none px-4 py-1 bg-violet-200'>
        </textarea>
        <button className='mt-10 p-2.5 px-6 font-semibold tracking-widest text-lg bg-orange-600 rounded-full hover:bg-white hover:text-orange-600 text-white'>SEND</button>
      </form>
      </div> 
       <div className='xl:absolute xl:h-auto lg:h-full xl:left-44 xl:top-44 bg-fade-blue md:w-2/5 flex flex-col w-80 mt-10 lg:mt-0 lg:w-1/5 px-8 py-10 rounded-xl text-white'>
        <h3 className='text-lg lg:text-2xl font-extrabold tracking-widest'>Contact Us</h3>
        <div className='border-t-2 border-orange-600 h-8 w-20 mt-4'></div>
        <span className='py-4 text-gray-400'><FontAwesomeIcon className='text-lg' icon={faLocationDot} fixedWidth/> <p className='ml-2 inline-block'>Location</p> </span>
        <span className='py-4 text-gray-400'><FontAwesomeIcon className='text-lg' icon={faEnvelope} fixedWidth/> <p className='ml-2 inline-block'>Mail Id</p> </span>
        <span className='py-4 text-gray-400'><FontAwesomeIcon className='text-lg' icon={faMobile} fixedWidth/> <p className='ml-2 inline-block'>Mobile No.</p> </span>
        <div className="flex items-center justify-center pt-10 space-x-4 sm:mt-0 text-gray-400">
            <a href="/" className="transition-colors duration-300 hover:text-white">
            <span className="mr-2">
              <FontAwesomeIcon className="text-xl" icon={faYoutube} />
             </span>
            </a>
            <a href="/" className="transition-colors duration-300 hover:text-white">
            <span className="mr-2">
              <FontAwesomeIcon className="text-xl" icon={faTwitter} />
             </span>
            </a>
            <a href="/" className="transition-colors duration-300 hover:text-white">
            <span className="mr-2">
              <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
             </span>
            </a>
            <a href="/" className="transition-colors duration-300 hover:text-white">
            <span className="mr-2">
              <FontAwesomeIcon className="text-xl" icon={faFacebook} />
             </span>
            </a>
        </div>
       </div>
     </section>
      </Layout>
  );
}

export default App;
