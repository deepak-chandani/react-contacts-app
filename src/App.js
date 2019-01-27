import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ContactList from './components/ContactList';
import {getAll} from './utils/ContactsAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        allContacts: null,
        contacts: null
    };
    
  }
  componentDidMount(){
    getAll().then( (contacts) => {
        console.log(contacts);
        this.setState({contacts, allContacts:contacts});
    })
  } 
  onDelete(contact){
    let contacts = this.state.contacts;

    let newContacts = contacts.filter( (item) => {
        return item.id != contact.id
    });

    this.setState({contacts: newContacts});
  }

  onSearch(term){
     console.log("searching for ", term);

     let filteredItems;
     if(term.length>0){
        const regExp = new RegExp(term, 'i');
        filteredItems = this.state.allContacts.filter((item) => {
          return regExp.test(item.name);
        });
     }else{
       filteredItems = this.state.allContacts;
     }     

     this.setState({contacts: filteredItems});
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={this.onSearch.bind(this)} />
        <ContactList contacts={this.state.contacts} onDelete={this.onDelete.bind(this)} />
      </div>
    )
  }
}

export default App;
