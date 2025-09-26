
import React from 'react';
import TeamImage from '../../assets/img/team.png'; 
import PixelTransition from '../ui/PixelTransition';
import GlareHover from '../ui/GlareHover';
import CircularGallery from '../ui/CircularGallery';

const About = () => {
    return (
        <div className="bg-white py-20 pt-24 min-h-screen"> 
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl">
                            <GlareHover
                                glareColor="#ffffff"
                                glareOpacity={0.3}
                                glareAngle={-30}
                                glareSize={300}
                                transitionDuration={800}
                                playOnce={false}
                            >
                                                        <img 
                            src={TeamImage}
                            alt="Students and Teacher working together" 
                            className="w-full h-full object-cover"
                        />
                            </GlareHover>

                    </div>
                    
                    <div className="w-full md:w-1/2">
                        <h4 className="text-xl font-semibold text-gray-700 uppercase tracking-widest mb-10">
                            ABOUT US
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-[#3C2F2F]">
                            Why You Should Choose <span className="text-[#F7C236]">Gymnazo</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-6">
                            The Gymnazo Christian Academy is committed in the formation of values and 
                            education among their learners by following these philosophical foundations.
                        </p>
                        
                        <a href="#about-us-details" className="text-[#F7C236] font-medium hover:text-yellow-600 transition duration-150">
                            Learn More
                        </a>
                    </div>

                </div>
            </div>

<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#F4D77D" borderRadius={0.05} scrollEase={0.02}/>
</div>
        </div>
        
    );
}

export default About;