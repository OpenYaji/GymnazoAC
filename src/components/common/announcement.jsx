import React from 'react'
import ModelViewer from '../ui/ModelViewer'
import Carousel from '../ui/Carousel'
const announcement = () => {
  return (
    <>
    <div className='flex justify-around items-center min-h-screen'>
         <div className='mb-16'>
        <Carousel
            baseWidth={700}
            height={600}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
        />
        </div>
        <div className='mb-16'>
        <ModelViewer
                url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
                width={400}
                height={400}
                />
        </div>
    </div>
    </>
  )
}

export default announcement