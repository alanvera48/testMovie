import React from 'react';

const Message = ({msg}) => {
	let styles={
		padding: '1rem',
		marginBottom : '1rem',
		textAlign : 'center',
		color: '#fff',
		fontWeight:'bold'

	}
    return (
        <div style={{styles}}>
        	<p>{msg}</p>
        </div>
    );
};

export default Message;