import React from 'react';
import './concert.css';
import axios from 'axios';

const concertReducer = (state,action) =>{
    switch(action.type){
        case "FETCH_INIT" : return{
            ...state, isLoading : true, isError : false}
        case "FETCH_SUCCESS" : return{
            ...state, isLoading : false, isError : false, data : action.payload }
        case "FETCH_FAIL" : return{
            ...state, isLoading : false, isError : true}
        default : throw new Error();    
    }
}

function Concert () {

    const style = {"border" : "1px solid black", 
    };

    const [concert, dispatchConcert] = React.useReducer(concertReducer, {
        data : [], isLoading : false, isError : false})
    React.useEffect(()=>{
        dispatchConcert({type : "FETCH_INIT"})
        axios.get('http://localhost:4000/api/concerts')
        .then((reponse)=>{
            dispatchConcert({type: "FETCH_SUCCESS", payload : reponse.data});
        }).catch(()=>{
            dispatchConcert({type : "FETCH_FAIL"});
        })
    }, [])  

    return(
        <div className='concert'>
            <h1>Concerts</h1>
            <table>
                <tbody>
                {concert.data.map(item=>(
                        <tr key={item.id} style={style}>
                            <td>{item.date}</td>
                            <td>{item.groupe}</td>
                            <td>{item.lieu}</td>
                            <td>{item.ville}</td>
                        </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Concert;