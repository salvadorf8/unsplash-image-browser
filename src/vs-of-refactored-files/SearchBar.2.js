import React from 'react';

// This is an Alternate Event Handler syntax
class SearchBar extends React.Component {

    // one argument is always passed called 'event' which is the event object.  one property we usually care about is the 'event.target.value'
    onInputChange(event) {
        console.log(event.target.value);
    }

    // NOTE: onClick is always supported - because a div can be clicked whereas onChange, or onSubmit may not because a div will never change or submit

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* Below refactored is the exact same thing as first example */}
                        {/* <input type="text" onChange={(event) => console.log(event.target.value)}/> */}
                        {/* further note, event is normally refered as e */}
                        <input type="text" onChange={(e) => console.log(e.target.value)}/>
                    </div>

                </form>
            </div>
        );
    }
}

export default SearchBar;