import React from 'react';
import {Link} from 'react-router-dom';

export default() => {
    return (
        <div>
            Second page
            <Link to="/"> Go to page 1 </Link>
        </div>
    )
}