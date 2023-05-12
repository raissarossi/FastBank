import drawLight from '../../Images/Light/drawLight.png'
import drawDark from '../../Images/Dark/drawDark.png'
import ContainerImg from './components/containerImg';
import Navbar from '../Header/Navbar'
import Forms from '../Header/enter/forms'
import { useEffect } from 'react';
import api from '../../services/api';



const Home = () => {
    // useEffect(()=>{
    //     api
    //         .get("loja/clientes/")
    //         .then((response)=> console.log(response.data))
    // }, []);
    return (
        <>
            <Forms />
            <Navbar />
            <div className='flex flex-col items-center overflow-hidden dark:bg-black'>


                <div className="flex flex-col sm:flex-row py-7 w-full bg-light-blue3 dark:bg-black items-center justify-around">
                    <div>
                        <h1 className='text-white text-4xl lg:text-6xl xl:text-7xl font-thin min-w-[255px]'>Your Bank with</h1>
                        <h1 className='text-white text-xl lg:text-2xl font-thin mt-4 ml-10'>Ease</h1>
                        <h1 className='text-white text-xl lg:text-2xl font-thin mt-3 ml-20'>Anytime</h1>
                        <h1 className='text-white text-xl lg:text-2xl font-thin mt-3 ml-32'>Anywhere.</h1>
                    </div>
                    <img src={drawLight} alt="Logo" className='flex dark:hidden p-5 overflow-auto max-w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px]' />
                    <img src={drawDark} alt="Logo" className='hidden dark:flex dark:p-5 dark:overflow-auto dark:max-w-full dark:sm:max-w-[500px] dark:md:max-w-[700px] dark:lg:max-w-[800px]' />
                </div>
                <ContainerImg />
            </div>
        </>
    );
}

export default Home;