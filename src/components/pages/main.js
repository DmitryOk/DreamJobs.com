import React from 'react';
import Vacancies from '../misc/vacancyPost';
import {connect} from 'react-redux';
import SearchForm from '../misc/searchForm';
import onSubmit from '../../actions/actions';


const Main = ( {data,isFetching} = this.props ) => {
    return (
        <div>
            <SearchForm onChange = {onSubmit}/>
            <h2>Hot vacancies!</h2>
            {!isFetching ?
                <Vacancies posts={data} />
                : <h1>Loading...</h1>}
        </div>
    );
}

const mapStateToProps = state => ({data:state.root.data , isFetching:state.root.isFetching})

export default connect(mapStateToProps)(Main);