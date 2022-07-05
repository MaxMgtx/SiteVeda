import './project.css';
import {Link, Outlet} from 'react-router-dom';
import {useState} from 'react';
import Button from '@mui/material/Button';


function Project () {

    const [state, setState] = useState(false)
    
    const [num, setNum] = useState();
    const modif = (a) =>{
        setNum(a)
    }

    if(!state){
        return(
            <div className='project'>
                <Link to='/projects' id='titre' onClick={()=>setState(false)}><h1>Projets</h1></Link>
                <div className='images'>
                    <div id='i1'>
                        <Link to="/projects/quartet"  className='link'>
                            <p className='groupe' onClick={()=>setState(true)}>Veda Bartringer 4tet</p>
                        </Link>
                    </div>
                    <div id='i2'>
                        <Link to="/projects/ann" className='link'>
                            <p className='groupe' onClick={()=>setState(true)}>Ann Vandenplas</p>
                        </Link>
                    </div>
                    <div id='i3'>
                        <Link to="/projects/lumens" className='link'>
                            <p className='groupe' onClick={()=>setState(true)}>Lumens</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className='project'>
                <Link to='/projects' id='titre' onClick={()=>setState(false)}><h1>Projets</h1></Link>
                <Link to='/projects' onClick={()=>setState(false)}><Button>Back</Button></Link>
                <Outlet modifnum={modif}/>       
            </div>    
        )
    }
}

export default Project;