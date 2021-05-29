import React from 'react';
import {Link} from 'react-router-dom';
import style from './models/header.module.css';

const Header = () => {
    return (
        <div>
            <nav>
                <ul className={style.navi}>
                    <Link to={'/home'}>
                        <li>home</li>
                    </Link>
                    <Link to={'/contact'}>
                        <li>contact</li>
                    </Link>
                    <Link to={'/feedback'}>
                        <li>feedback</li>
                    </Link>

                </ul>
            </nav>
        </div>
    );
};

export default Header;