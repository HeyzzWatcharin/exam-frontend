import React from 'react';

const Function3 = () => {

    const myArray: any[] = [1, 5, 101, 2, 5, 10];
    const Array = '[1,5,101,2,5,10]'

    // **********************************************************************
    // **** Note: find Max number 1 times.
    // **********************************************************************
    myArray.sort(function (a: number, b: number) {
        return a - b
    })

    // **********************************************************************
    // **** Note: set Max number order 1 of array to value.
    // **********************************************************************
    let max_first_order: number = myArray[myArray.length - 1]


    // **********************************************************************
    // **** Note: set index order 1 of array to value.
    // **********************************************************************
    const index: number = myArray.indexOf(max_first_order);


    // **********************************************************************
    // **** Note: remove Max number order 1 of array.
    // **********************************************************************
    if (index > -1) {
        myArray.splice(index, 1);
    }


    // **********************************************************************
    // **** Note: find Max number 2 times for find max number order 2.
    // **********************************************************************
    myArray.sort(function (a: number, b: number) {
        return a - b
    })


    // **********************************************************************
    // **** Note: set Max number order 2 of array to value.
    // **********************************************************************
    let max_second_order: number = myArray[myArray.length - 1]


    return (
        <>
            <div className='mt-5'>
                <p className='text-center fw-bold'>
                    {Array}
                </p>
                <p className='text-center'>
                    {
                        max_second_order ? `max value 2st = ${max_second_order}` : 'Null'
                    }
                </p>
            </div>
        </>
    );
};

export default Function3;
