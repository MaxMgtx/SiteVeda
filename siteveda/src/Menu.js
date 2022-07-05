import React from 'react';
import './menu.css';
import {Link} from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Menu () {

    return(
        <div className='menu'>
            <div>
                <ul className='menuUl'>
                    <li><a href="https://www.facebook.com/Veda-Bartringer-Music-254905729717692" target="_blank" rel="noreferrer"><FacebookRoundedIcon fontSize='large'/></a></li>
                    <li><a href="https://www.instagram.com/veda_redhead/?hl=fr" target="_blank" rel="noreferrer"><InstagramIcon fontSize='large'/></a></li>
                    <li><YouTubeIcon fontSize='large'/></li>
                </ul>
            </div>
            <div>
                <h1><Link id='title' to="/">Veda Bartringer</Link></h1>
            </div>
            <div>
                <nav>
                    <Link className='link' to="/about">About</Link>
                    <Link className='link' to="/medias">Medias</Link>
                    <Link className='link' to="/projects">Projets</Link>
                    <Link className='link' to="/concerts">Concerts</Link>
                    <Link className='link' to="/contact">Contact</Link>
                </nav>
            </div>
        </div>
        
    )
}

export default Menu;