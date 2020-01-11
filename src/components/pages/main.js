import React from 'react';
import Vacancies from '../misc/vacancyPost';
import {connect} from 'react-redux';
import SearchForm from '../misc/searchForm';
import onSubmit from '../../actions/actions';


const Main = ( { data, isFetching  , value } = this.props ) => {

    return (
        <div>
            <SearchForm onSubmit = {onSubmit}/>
            <h2>Hot vacancies!</h2>
            {!isFetching ?
                <Vacancies posts={data} />
                : <h1>Loading...</h1>}
        </div>
    );
}

const mapStateToProps = state => ({data:state.data , isFetching:state.isFetching, value:state.value})

export default connect(mapStateToProps)(Main);