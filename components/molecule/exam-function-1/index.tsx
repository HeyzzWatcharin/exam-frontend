import React from 'react';
import useTranslation from '../../../hooks/useTranslation';
import dataJson from '../../../public/json/exam-data.json';


const Function1 = () => {

    const { translate } = useTranslation();

    const result = dataJson.filter(data => data.is_editable_price == false);

    let totalWeight: number = 0;
    let name: string = '';

    result.map((data) => {
        totalWeight = totalWeight + data.weight;
        name = name.concat(data.name);
    })

    return (
        <>
            <div className='mt-5'>
                <p className='text-center'>
                    {translate('NAME')} {' '} {name}
                    <br />
                    {translate('WEIGHT')} {' '} {totalWeight}
                </p>
            </div>
        </>
    );
};

export default Function1;
