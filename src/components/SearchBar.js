import React from 'react';
import search from '../icons/search.svg';
import addIcon from '../icons/person-add.svg';

class SearchBar extends React.Component {
    onSearch(e){
        const term = e.target.value;        

        this.props.onSearch(term);
    }
    render() {
        return (
            <div className="list-contacts-top">                
                <input className="search-contacts" type="text" placeholder="Search contacts" onChange={this.onSearch.bind(this)} />
                <a className="add-contact"> </a>
            </div>
        );
      }
}

export default SearchBar;