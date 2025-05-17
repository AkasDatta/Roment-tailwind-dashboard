import React from 'react';
import LeftAdmin from './leftAdmin/LeftAdmin';
import RightAdmin from './RightAdmin/RightAdmin';

const AdminPage = () => {
    return (
        <div className='p-8 grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-1 lg:col-span-3'>
                <LeftAdmin></LeftAdmin>
            </div>
            <div className='col-span-1 lg:col-span-9'>
                <RightAdmin></RightAdmin>
            </div>
        </div>
    );
};

export default AdminPage;