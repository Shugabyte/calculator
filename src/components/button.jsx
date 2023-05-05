import React from 'react';

const Buttons = ({ value, color, onPress }) => {
    return ( 
        <button className={color} onClick={onPress}>{ value }</button>
     );
}
 
export default Buttons;
