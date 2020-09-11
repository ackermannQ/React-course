import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form>
            <textarea
            className="form"
            required
            maxlenght='150'/>
            <div className='info'>
                140
            </div>
            <button type="submit">
                Send
            </button>
            </form>               
        );
    }
}

export default Form;