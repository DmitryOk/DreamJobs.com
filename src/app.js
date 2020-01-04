import React, { useReducer, useEffect, Component } from 'react';
import Footer from './components/containers/footer';
import Navigation from './components/containers/navigation';
import { ROOT_PATH } from '../const/const';
import fetchVacancies from './actions/actions';
import { connect } from 'react-redux';
import Vacancies from './components/misc/vacancyPost'



const url = `${ROOT_PATH}vc`;



class App extends Component {

    componentDidMount(){
        const {dispatch} = this.props;
        this.props.dispatch(fetchVacancies(url));
    }


    handler = event => {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(fetchVacancies(url));
    }

    render() {
       const { data , isFetching } = this.props;

        return (
            <div>
                <Navigation />
                {!isFetching  ?
                    <Vacancies posts={data}/>
                  :  <h1>Loading...</h1>  }
                <button onClick={this.handler}>GET VAC</button>
                <Footer />
            </div>
        )

    }
}

const mapStateToProps = state => ({data:state.data})
   

export default connect(mapStateToProps)(App); 
