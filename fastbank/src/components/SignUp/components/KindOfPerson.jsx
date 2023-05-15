import React from 'react';

function KindOfPerson({ formData, setFormData }) {
    //pj ou PF
    return (
        <div id='other-info-container' className='forms'>
            <div className="w-11/12 flex items-center justify-center">
                <div className="w-full flex flex-col items-start">
                    <h2 className="mt-2 sm:mt-8 text-sm sm:text-lg lg:text-xl">Select one...</h2>
                    <select
                        name='KindOfPerson'
                        className='w-full bg-transparent py-[2px] sm:py-1 border-b sm:border-b-[3px] border-light-blue4 dark:bg-black dark:border-white text-xs sm:text-sm lg:text-lg'
                        // className='w-full dark:bg-dark-grey3 dark:border-none text-xs sm:text-sm lg:text-lg'
                        valuei={formData.kindOfPerson}
                        onChange={(event) => setFormData({ ...formData, kindOfPerson: event.target.value })}
                        defaultValue={''}>
                        <option value='' disabled>--</option>
                        <option value='F' >Physical Person</option>
                        <option value='J' >Legal Person</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default KindOfPerson;
