import React from 'react';

const Dice = (props) => {
    let styles = {
      backgroundColor: props.isHeld ? "#27ae60" : "white",
    };
    return (
        <div className='dice' onClick={props.holdDice} style={styles}>
            {props.value}

        </div>
    );
};

export default Dice;