import React from 'react';

function KindOfPerson({formData, setFormData}) {
//pj ou PF
    return (
        <div id='other-info-container' className='forms'>
            <select name='KindOfPerson'
            valuei={formData.kindOfPerson}
            onChange={(event) => setFormData({ ...formData, kindOfPerson: event.target.value })}
            defaultValue={''}>
                <option value='' disabled>--</option>
                <option value='F' >Physical Person</option>
                <option value='J' >Legal Person</option>
            </select>
        </div>
    );
}

export default KindOfPerson;
