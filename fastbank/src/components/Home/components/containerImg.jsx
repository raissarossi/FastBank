import Home01 from '../../../Images/Home/home01.png'
import Home02 from '../../../Images/Home/home02.png'
import Home03 from '../../../Images/Home/home03.png'
import Home04 from '../../../Images/Home/home04.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContainerImg = () => {
    AOS.init();
    return (
        <>
            <div className='flex flex-wrap w-full px-2 sm:px-5 md:px-6 lg:px-7 justify-evenly sm:justify-center'>
                <img src={Home01} alt="Home01" className='w-5/12 sm:w-3/12 sm:p-2 lg:p-5 pt-10 sm:pt-0' 
                data-aos="fade-up" data-aos-delay="400" data-aos-duration="900" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
                />

                <img src={Home02} alt="Home02" className='w-5/12 sm:w-3/12 sm:p-2 lg:p-5 pt-10 sm:pt-0' 
                data-aos="fade-up" data-aos-delay="600" data-aos-duration="900" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
                />

                <img src={Home03} alt="Home03" className='w-5/12 sm:w-3/12 sm:p-2 lg:p-5 pt-10 sm:pt-0' 
                data-aos="fade-up" data-aos-delay="800" data-aos-duration="900" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
                />

                <img src={Home04} alt="Home04" className='w-5/12 sm:w-3/12 sm:p-2 lg:p-5 pt-10 sm:pt-0' 
                data-aos="fade-up" data-aos-delay="1000" data-aos-duration="900" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
                />
            </div>
        </>
    );
}

export default ContainerImg;