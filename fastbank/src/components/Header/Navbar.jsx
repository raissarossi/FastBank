import { useNavigate } from 'react-router-dom';
import logoB from '../../Images/Logo/logoB.png';
import logoW from '../../Images/Logo/logoW.png';
import ToggleTheme from './ToggleTheme';


const Navbar = () => {
    const rota = useNavigate()
    return (
        <>
            <div className='flex h-14 justify-between bg-gradient-to-r from-white -from-30% to-light-blue2 items-center dark:from-black dark:from-20% dark:to-dark-blue3 px-1 sm:px-2'>
                <div className='flex dark:hidden'>
                    <img src={logoB} alt="Logo" className='h-9' />
                </div>
                <div className='hidden dark:flex'>
                    <img src={logoW} alt="Logo" className='h-9' />
                </div>
                <div className='flex'>
                    <ToggleTheme />
                    <button onClick={() => { rota("/signup") }} className='border px-2 my-2 rounded-lg text-white'>Sign Up</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;