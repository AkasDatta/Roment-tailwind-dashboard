import React from 'react';
import LeftAdmin from './leftAdmin/LeftAdmin';
import RightAdmin from './RightAdmin/RightAdmin';

const AdminPage = () => {
    return (
        <div className='p-8 grid grid-cols-5'>
            <div>
                <LeftAdmin></LeftAdmin>
            </div>
            <div>
                <RightAdmin></RightAdmin>
            </div>
        </div>
    );
};

export default AdminPage;