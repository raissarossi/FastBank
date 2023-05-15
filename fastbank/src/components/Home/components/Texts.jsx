import Icons from './Icons';
import data from './Texts.json'

const Texts = () => {

    return (
        <div className='h-full w-full flex pt-10 flex-col' >
            <div className='flex w-full mt-5 md:mt-10 xl:mt-16 items-center p-5 lg:p-10'>
                <Icons icon="card" />

                <div className='h-20 pl-5 hidden md:flex flex-col justify-center'>
                    <h1 className='font-bold text-2xl lg:text-4xl xl:text-6xl text-light-blue4 dark:text-white'>{data[0]['title']}</h1>
                    <h2 className='font-light text-lg lg:text-xl xl:text-2xl text-light-blue4 dark:text-white'>{data[0]['text']}</h2>
                </div>
                <div className='h-20 pl-5 md:hidden flex justify-center items-center text-light-blue4 dark:text-white'>
                    <h1 className='font-bold text-lg text-light-blue4 dark:text-white'>{data[0]['title']}</h1>
                </div>
            </div>

            <div className='flex w-full mt-5 md:mt-10 xl:mt-16 items-center p-5 lg:p-10'>
                <Icons icon="investment" />
                
                <div className='h-20 pl-5 hidden md:flex flex-col justify-center'>
                    <h1 className='font-bold text-2xl lg:text-4xl xl:text-6xl text-light-blue4 dark:text-white'>{data[1]['title']}</h1>
                    <h2 className='font-light text-lg lg:text-xl xl:text-2xl text-light-blue4 dark:text-white'>{data[1]['text']}</h2>
                </div>
                <div className='h-20 pl-5 md:hidden flex justify-center items-center text-light-blue4 dark:text-white'>
                    <h1 className='font-bold text-lg text-light-blue4 dark:text-white'>{data[1]['title']}</h1>
                </div>
            </div>

            <div className='flex w-full mt-5 md:mt-10 xl:mt-16 items-center p-5 lg:p-10'>
            <Icons icon="payment" />

                <div className='h-20 pl-5 hidden md:flex flex-col justify-center'>
                    <h1 className='font-bold text-2xl lg:text-4xl xl:text-6xl text-light-blue4 dark:text-white'>{data[2]['title']}</h1>
                    <h2 className='font-light text-lg lg:text-xl xl:text-2xl text-light-blue4 dark:text-white'>{data[2]['text']}</h2>
                </div>
                <div className='h-20 pl-5 md:hidden flex justify-center items-center text-light-blue4 dark:text-white'>
                    <h1 className='font-bold text-lg text-light-blue4 dark:text-white'>{data[2]['title']}</h1>
                </div>
            </div>

            <div className='flex w-full mt-5 md:mt-10 xl:mt-16 items-center p-5 lg:p-10'>
            <Icons icon="coin" />

                <div className='h-20 pl-5 hidden md:flex flex-col justify-center'>
                    <h1 className='font-bold text-2xl lg:text-4xl xl:text-6xl text-light-blue4 dark:text-white'>{data[3]['title']}</h1>
                    <h2 className='font-light text-lg lg:text-xl xl:text-2xl text-light-blue4 dark:text-white'>{data[3]['text']}</h2>
                </div>
                <div className='h-20 pl-5 md:hidden flex justify-center items-center text-light-blue4 dark:text-white'>
                    <h1 className='font-bold text-lg text-light-blue4 dark:text-white'>{data[3]['title']}</h1>
                </div>
            </div>
        </div >
    );
}

export default Texts;