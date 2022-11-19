import React, {Fragment} from 'react'
import Back from '../images/back.jpg'
export const Home = () => {
    return (
        <Fragment>
        <img src= {Back} className="pic" alt="pic"/>  
        <div className='Achitecture_of_day'>
            <p>Здесь будет появляться рандомный челик</p>
        </div>

        </Fragment>

    )
}