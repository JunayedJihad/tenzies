import React from 'react';

const Dice = (props) => {
    let styles = {
      backgroundColor: props.isHeld ? "#34495e" : "white",
    };
    return (
        <div className='dice' onClick={props.holdDice} style={styles}>
            {/* {props.value} */}
            <img src={props.value} alt="" />

        </div>
    );
};

export default Dice;