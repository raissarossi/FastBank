import homeLight from '../../Images/Light/homeLight.png'
import homeDark from '../../Images/Dark/homeDark.png'
import rectangle3Dark from '../../Images/Dark/rectangle3Dark.png'
import rectangle3Light from '../../Images/Light/rectangle3Light.png'
import ContainerImg from './components/containerImg';
import Navbar from '../Header/Navbar'
import Forms from '../Header/enter/forms'
import Texts from './components/Texts';
import Footer from '../Footer/Footer';



const Home = () => {
    return (
        <>
            <Forms />
            <Navbar />
            <div className='flex flex-col items-center overflow-hidden dark:bg-black'>
                <img src={homeLight} className='flex dark:hidden w-full mb-5 sm:mb-8' />
                <img src={homeDark} className='hidden dark:flex w-full mb-5 sm:mb-8' />
                <ContainerImg />
                <div className='pt-10 w-full'
                    data-aos="fade-up"
                    data-aos-delay="400"API DeploymentFeather
                    data-aos-duration="900"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                >
                    <div className='absolute flex-col lg:pt-20 w-full'>
                        <h1 className='mx-6 text-3xl ssm:text-4xl sm1:text-6xl md1:text-7xl lg1:text-8xl 2xl:text-9xl font-bold text-light-blue4 dark:text-white z-20 sm:pt-7'>Securing your financial</h1>
                        <h1 className='mx-6 text-3xl ssm:text-4xl sm1:text-6xl md1:text-7xl lg1:text-8xl 2xl:text-9xl font-bold text-light-blue4 dark:text-white z-20 sm:pt-7'>future, today.</h1>
                        <div className=''>
                            <Texts />
                        </div>

                    </div>
                    <img src={rectangle3Light} className='flex dark:hidden w-full z-10' />
                    <img src={rectangle3Dark} className='hidden dark:flex w-full z-10' />

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;