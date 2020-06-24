import React from 'react';

// This is an Alternate Event Handler syntax
class SearchBar extends React.Component {
    state = {term: ''};

    // look at the online notes, below line will break because this is not binded
    // onFormSubmit(event) {
    // below is the corrected syntax with the arrow function
    onFormSubmit = (event) => {
        // Below line will prevent the browser to submit the form
        event.preventDefault();

        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                {/* below syntax is another way to fix the issue mentioned above */}
                {/* <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}> */}
                    <div className="field">
                        <label>Image Search</label>
                        {/* syntax has been refactored to convert the input to a controlled form element   */}
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                    </div>

                </form>
            </div>
        );
    }
}

export default SearchBar;