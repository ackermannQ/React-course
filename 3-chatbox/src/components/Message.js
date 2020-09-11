import React, { Component } from 'react';

const Message = ({ nickname, message }) => {
    return (
      <p className="user-message">
        { message }
      </p>
    );
}

export default Message;