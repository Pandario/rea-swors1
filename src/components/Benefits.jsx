import React from 'react'
import apart500 from '../img/500apartments.jpg'
import team500 from '../img/500teammates.jpg'
import emperor500 from '../img/500emperor.jpg'

function Benefits() {
  return (
    <div className="benefits">
        <div className="advantagesRight">
            <img src={apart500} alt="apartments" />
            <div className="advaRightText">
                <h2>You will get amazing apartments.</h2>
                <p>Big window in each cabin. Lot of free space. Can design room as you like. Big and soft bed. 
                    Huge minibar. Even gym is in your apartments!
                </p>
            </div>
        </div>
        
        <div className="advantagesLeft">
            <img src={team500} alt="teammates" />
            <div className="advaLeftText">
                <h2>Best teammates ever!</h2>
                <p>The team you would be working with, has very smart and well experienced professionals.
                    They will shoot everyone for you! Aiming skills of our stormtroopers are the best of the best!
                </p>
            </div>
        </div>

        <div className="advantagesRight">
            <img src={emperor500} alt="emperor" />
            <div className="advaRightText">
                <h2>Emperor needs you!</h2>
                <p>Yes! You're not mistaken! Our emperor wants you to join us! Will you do it for our emperor?
                    Stormtroopers, pilots and scouts! Our emperor needs everyone!
                </p>
            </div>
        </div>

    </div>
  )
}

export default Benefits