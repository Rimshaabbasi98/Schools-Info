import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='bg-[url(https://www.americanlycetuffdnk.edu.pk/wp-content/uploads/2023/02/als-dnk.jpg)] bg-cover bg-center p-10 sm:p-[150px] md:p-[200px] lg:p-[300px] relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-black/70 to-transparent'></div>

            <div className='relative z-10 w-full md:w-4/5 text-white'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold pb-4'>Schools' Info</h1>
                <p>
                    <TypeAnimation
                        sequence={[
                            'We provide the information about the various schools available in Karachi.',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        cursor={false}
                        style={{ fontSize: '1.75em', sm: '1.5em', md: '2em', display: 'inline-block', lineHeight: '1.5em' }}
                        repeat={1}
                    />
                </p>
                <Link to="/schools">
                    <button className='bg-green-500 rounded-3xl py-2 px-5 text-white mt-4'>Explore</button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;
