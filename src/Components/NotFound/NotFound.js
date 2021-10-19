import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../Images/404.jpg'

const NotFound = () => {
    const btn_regular = {
        position : 'absolute',
        left : '485px',
        top : '670px',
        backgroundColor : 'white',
        border : 'none',
        padding : '10px 50px',
        fontWeight : '600',
        borderRadius : '10px',
    }
    return (
        <div>
            <img 
            width = '100%'
            height = '100%'
            src={notFoundImage}
             alt="" />
            <Link to='/home'>
                <button style={btn_regular}>GO BACK</button>
            </Link>
        </div>
    );
};

export default NotFound;