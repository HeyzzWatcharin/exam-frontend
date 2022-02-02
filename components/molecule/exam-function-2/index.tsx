import React from 'react';
import { localMouth } from '../../../interface/date';

const Function2 = () => {

    const date = new Date('2020-08-10T14:54:52+07:00');


    // **********************************************************************
    // **** Note: get date time.
    // **********************************************************************
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dateTime = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let unixTimeStamp = date.getTime();

    if (dateTime < 10) {
        dateTime = 0 + dateTime;
    }

    if (month < 10) {
        month = 0 + month;
    }

    // **********************************************************************
    // **** Note: get quarter of mouth.
    // **********************************************************************
    const getQuarter = (d: Date) => {
        d = d || new Date();
        const q = [1, 2, 3, 4];
        return q[Math.floor(d.getMonth() / 3)];
    }

    // **********************************************************************
    // **** Note: get total day of mounth.
    // **********************************************************************
    const getDayofMounth = () => {
        let month = date.getMonth();
        let year = date.getFullYear();
        const daysOfMouth = new Date(year, month + 1, 0).getDate();
        return daysOfMouth;
    }

    // **********************************************************************
    // **** Note: convert to thal mounth.
    // **********************************************************************
    let findMouth = localMouth.find(localMouth => localMouth.id === month)

    return (
        <>
            <div className='mt-5 d-flex flex-column justify-content-center'>
                <p className='text-start'>
                    1. {dateTime + '/' + month + '/' + year + '   ' + hour + ':' + minute}
                </p>

                <p className='text-start'>
                    {/* **************************************************** */}
                    {/* Note: 543 That is differnce of C.E and B.E */}
                    {/* **************************************************** */}
                    2. {dateTime + ' ' + findMouth?.value + ' ' + (year + 543)}
                </p>

                <p className='text-start'>
                    3.จำนวนวันในเดือนนี้ =  {getDayofMounth()}
                </p>
                <p className='text-start'>
                    4.ไตรมาตรของเดือนนี้ =  {getQuarter(date)}
                </p>
                <p className='text-start'>
                    5. Unix timestamp = {unixTimeStamp}
                </p>
            </div>
        </>
    );
};

export default Function2;
