import { useNavigate } from 'react-router-dom';
import logoB from '../../Images/Logo/logoB.png';
import logoW from '../../Images/Logo/logoW.png';
import ToggleTheme from './ToggleTheme';


const Navbar = () => {
    const rota = useNavigate()
    return (
        <>
            <div className='flex h-14 justify-between bg-gradient-to-r from-white -from-30% to-light-blue2 items-center dark:from-black dark:-from-30% dark:to-light-200'>
                <div className='dark:hidden'>
                <img src={logoB} alt="Logo" className='h-9' />
                </div>
                <div className='hidden dark:flex'>
                <img src={logoW} alt="Logo" className='h-9' />
                </div>
                <ToggleTheme />
                <button onClick={()=>{rota("/signup")}}>form</button>
            </div>
        </>
    );
}

export default Navbar;