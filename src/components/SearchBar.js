import React from 'react';

// This is an Alternate Event Handler syntax
class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        // rule for the value of this inside of some function:
        // 1) onSubmit, find the dot to the left, what ever is to the left of that (props) is the value of this inside the function
        // 2) this.props or the props object that was passed to the SearchBar is going to be the value of this inside of onSubmit
        // 3) options to fix: 1 constructor function and bind onSubmit, 2 onSearchSubmit as an arrow function, 3 wrap onSearchSubmit inside an arrow function
        this.props.onSubmit(this.state.term);
    };

    render() {
        console.log(this);
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Image Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={(e) => {
                                this.setState({ term: e.target.value });
                            }}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
