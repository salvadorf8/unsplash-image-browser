import React from 'react';

import axios from 'axios';

import SearchBar from '../components/SearchBar';




class App extends React.Component {
    //when we expect an object to be an array, you default your object an empty array
    state = { images: [] };
    
    //callback function
    async onSearchSubmit(term) {
        // get function takes in two separate arguments
            // 1) address we want to make a get request too (find that in a Schema/Location)
            // 2) object that will have a bunch of options to customize the request (Authorization (add in header seems to be better practice), parms)
        // This is an asynchronous request: which means axios will take some time to get a response, 
        // by time response has completed, we have already exited out of the onSearchSubmit method.
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID ac0858529cf3a254fc4186dca45b8d2fed1a9d03ac9636fea93f693ff5237ab6'
            }
            // """"two options""""" to receive a notification that a service is complete
            // 2) easier to write out - not making use of the promise - adding async to the function gives you access to the await syntax - assign the new variable called response 
        });

        this.setState({images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
};

export default App;