import { useNavigate } from 'react-router-dom';
import logoB from '../../Images/Logo/logoB.png';
import logoW from '../../Images/Logo/logoW.png';
import ToggleTheme from './ToggleTheme';


const Navbar = ({ exibirBotao }) => {
    const rota = useNavigate()
    return (
        <>
            <div className='flex h-14 justify-between bg-gradient-to-r from-white -from-30% to-light-blue2 items-center dark:from-black dark:from-20% dark:to-dark-blue3 px-1 sm:px-2'>
                <button onClick={() => rota('/')}>
                    <div className='flex dark:hidden'>
                        <img src={logoB} alt="Logo" className='h-9' />
                    </div>
                    <div className='hidden dark:flex'>
                        <img src={logoW} alt="Logo" className='h-9' />
                    </div>
                </button>
                <div className='flex'>
                    <ToggleTheme />
                    {exibirBotao ?
                        <button onClick={() => { rota("/signup") }} className='border px-2 my-2 rounded-lg text-white'>Sign Up</button>
                        : null
                    }

                </div>
            </div>
        </>
    );
}

export default Navbar;