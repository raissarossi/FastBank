import Icons from '../../General/Icons';
import data from './Texts.json'

const Texts = () => {

    return (
        <div className='w-full flex pt-10 flex-col justify-between' >
            <div className='card-text-home'>
                <Icons icon="card" />

                <div className='texts-home'>
                    <h1 className='h1-home'>{data[0]['title']}</h1>
                    <h2 className='h2-home'>{data[0]['text']}</h2>
                </div>
                <div className='h-10 sm:h-16 pl-5 md:hidden flex justify-center items-center'>
                    <h1 className='h1-home'>{data[0]['title']}</h1>
                </div>
            </div>

            <div className='card-text-home'>
                <Icons icon="investment" />
                
                <div className='texts-home'>
                    <h1 className='h1-home'>{data[1]['title']}</h1>
                    <h2 className='h2-home'>{data[1]['text']}</h2>
                </div>
                <div className='h-10 sm:h-20 pl-5 md:hidden flex justify-center items-center'>
                    <h1 className='h1-home'>{data[1]['title']}</h1>
                </div>
            </div>

            <div className='card-text-home'>
            <Icons icon="payment" />

                <div className='texts-home'>
                    <h1 className='h1-home'>{data[2]['title']}</h1>
                    <h2 className='h2-home'>{data[2]['text']}</h2>
                </div>
                <div className='h-10 sm:h-20  pl-5 md:hidden flex justify-center items-center'>
                    <h1 className='h1-home'>{data[2]['title']}</h1>
                </div>
            </div>

            <div className='card-text-home'>
            <Icons icon="coin" />

                <div className='texts-home'>
                    <h1 className='h1-home'>{data[3]['title']}</h1>
                    <h2 className='h2-home'>{data[3]['text']}</h2>
                </div>
                <div className='h-10 sm:h-20  pl-5 md:hidden flex justify-center items-center'>
                    <h1 className='h1-home'>{data[3]['title']}</h1>
                </div>
            </div>
        </div >
    );
}

export default Texts;