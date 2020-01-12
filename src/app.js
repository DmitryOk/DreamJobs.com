import React, { useReducer, useEffect, Component } from 'react';
import Footer from './components/containers/footer';
import Navigation from './components/containers/navigation';
import fetchVacancies from './actions/actions';



class App extends Component {

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(fetchVacancies(this.props.root.value));
    }

    render() {

        return (
            <div>
                <Navigation />
                <Footer />
            </div>
        )

    }
}

   
export default App; 
