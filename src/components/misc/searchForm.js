import React from 'react';

const SearchForm = (onSubmit) => {

    return (
        <form>
            <label>
                <input type = "text"/>
                <input type = 'submit' value= 'Search!'/>
            </label>
        </form>
    )
}

export default SearchForm;