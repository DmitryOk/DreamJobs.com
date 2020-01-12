import React from 'react';
import {onSubmit} from '../../actions/actions';
import {connect} from 'react-redux';


const SearchForm = ({value} = this.props) => {

    return (
        <form>
            <label>
                <input type = "text" value = {value}  onChange = {onSubmit}/>
                <input type = 'submit' value= 'Search!'/>
            </label>
        </form>
    )
}

const mapStateToProps = state => ({value:state.value})

export default connect(mapStateToProps)(SearchForm);