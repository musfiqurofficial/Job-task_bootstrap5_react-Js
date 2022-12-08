import React from 'react';
import HomePostLeft from './HomePostLeft';
import HomePostNav from './HomePostNav';
import HomePostRight from './HomePostRight';

const HomePost = () => {
    return (
        <div className='container-width my-5'>
            <HomePostNav></HomePostNav>
            <div className='my-3'>
                <div className='row'>
                    <div className='col-8'><HomePostLeft></HomePostLeft></div>
                    <div className='col ps-5 mt-4'><HomePostRight></HomePostRight></div>
                </div>
            </div>
        </div>
    );
};

export default HomePost;