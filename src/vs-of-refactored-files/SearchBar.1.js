import React from 'react';

class SearchBar extends React.Component {

    // one argument is always passed called 'event' which is the event object.  one property we usually care about, its the 'event.target.value'
    onInputChange(event) {
        console.log(event.target.value);
    }

    // NOTE: onClick is always supported because a div can be clicked
    //       onChange or onSubmit may not because a div will never change or submit

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* When we pass a method (onChange) as a prop, onInputChange is a callback function.  
                            NOTE: """"By Not Adding parenthesis""""" will pass a reference of the function to the element
                            NOTE: """"By Adding parenthesis"""" will call the function everytime whenever the component is rendered */}
                        {/* below we created an uncontrolled form element as react developers we prefer to work with controlled form elements */}
                        <input type="text" onChange={this.onInputChange}/>
                    </div>

                </form>
            </div>
        );
    }
}

export default SearchBar;