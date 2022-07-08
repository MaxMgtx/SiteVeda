import React from 'react';
import './concert.css';
import useAxios from 'axios-hooks';
import { Alert, CircularProgress } from '@mui/material';
import moment from 'moment';

function Concert () {

    
    const [{data, loading, error}] = useAxios({
        url: "/futurconcerts",
    }); 
    const [{data : pastdata, loading : pastload, error : pasterror}] = useAxios({
        url: "/pastconcerts",
    }); 
    
    
    return(
        <div className='concert'>
            <h1>Upcoming concerts</h1>
            <table>
                {loading && <CircularProgress/>}
                {error && <Alert severity="error">Error somewhere!</Alert>}
                {data && (
                    <tbody>
                    {data.map((concert)=> <Gig gig={concert} key={concert.id}/>
                    )}
                    </tbody>
                )}   
            </table>
            <br />
            <h1>Past concerts</h1>
            <table>
                {pastload && <CircularProgress/>}
                {pasterror && <Alert severity="error">Error somewhere!</Alert>}
                {pastdata && (
                    <tbody>
                    {pastdata.map((concert)=> <Gig gig={concert} key={concert.id}/>    
                    )}
                    </tbody>
                )}   
            </table>
        </div>
    )
}


const Gig = ({gig}) => {

    return(
        <tr>
            <td>{(moment.unix(gig.date).format('dddd, DD/MM/YYYY, HH:mm'))}</td>
            <td>{gig.groupe}</td>
            <td>{gig.lieu}</td>
            <td>{gig.ville}</td>
        </tr>
        
    )
}

export default Concert;