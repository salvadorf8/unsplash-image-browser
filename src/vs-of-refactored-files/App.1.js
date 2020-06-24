import React from 'react';

import axios from 'axios';

import SearchBar from '../components/SearchBar';




class App extends React.Component {

    onSearchSubmit(term) {
        // get function takes in two separate arguments
            // 1) address we want to make a get request too (find that in a Schema/Location)
            // 2) object that will have a bunch of options to customize the request (Authorization (add in header seems to be better practice), parms)
        // This is an asynchronous request: which means axios will take some time to get a response, 
        // by time response has completed, we have already exited out of the onSearchSubmit method.

        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID ac0858529cf3a254fc4186dca45b8d2fed1a9d03ac9636fea93f693ff5237ab6'
            }
            // """"two options""""" to receive a notification that a service is complete
            // 1) chaining on a .then statement (below) is a function that is a callback that will be invoked when the service is complete - retreive an array of objects
            //    use when you know that you are working with a promise
        }).then((response) => {
            console.log(response.data.results);
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
};

export default App;