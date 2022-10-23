import Image from 'next/image';
import HeroImage from './images/profile.jpg';

function Hero() {
  return (
    <div className='container flex flex-col md:flex-row mt-4 mx-auto space-y-3 text-center md:justify-around items-center border'>
        <div>
        <Image src={HeroImage} alt='' width={'100%'} height={'100%'}/>
        </div>

        <h3 className='text-center text-lg'>
            Personal Favourites Collection
            And Hero Text
        </h3>
    </div>
  )
}

export default Hero