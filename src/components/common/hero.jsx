import React from 'react';
import Girl from '../../assets/img/girl.png';
import Bg from '../../assets/img/bg.png';
import Logo from '../../assets/img/gymnazu.png'; 
import SplitText from "../../components/ui/SplitText";
import ShinyText from '../../components/ui/ShinyText';
import StarBorder from '../ui/StarBorder';
const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  
const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${Bg})` }}>
      
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div> 
      
      <div className="relative z-2 flex h-full items-center justify-between px-20 text-white">
        
        <div className="max-w-xl">
          <h1 className="text-2xl font-light mb-2">Welcome to the,</h1>
          <h2 className=""><SplitText
                    text="GYMNAZO CHRISTIAN ACADEMY"
                    className="text-5xl font-extrabold mb-6"
                    delay={200}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign='left'
                    onLetterAnimationComplete={handleAnimationComplete}/>
            </h2>
          <p className="text-2xl mb-10">
          <ShinyText 
        text="Affordable and Accessible Quality Education" 
            disabled={false} 
            speed={3} 
            className='custom-class' 
    />        
      </p>
          
          <div className="flex space-x-4">
            <button className="border border-white text-white py-3 px-6 text-sm font-semibold hover:bg-white hover:text-black transition duration-300">
              READ MORE
            </button>
            
            <button className="bg-[#F7C236] text-black py-3 px-6 text-sm font-bold shadow-lg hover:bg-yellow-500 rounded-lg transition duration-300"> 
              ENROLL NOW
            </button>
          </div>
        </div>

        <div className="relative h-full flex items-end justify-end"> 
            <img 
                src={Girl} 
                alt="Student" 
                className="h-[70vh] object-cover relative z-10"
            />
            <img 
                src={Logo} 
                alt="Gymnazo Logo Overlay"
                className="absolute right-20 top-1/4 w-100 h-100 opacity-70 z-1 "
            />
        </div>
      </div>
    </div>
  );
};

export default Hero;