import React, {Component} from 'react';
import ContactItem from './ContactItem';

class ContactList extends Component {
    constructor(props) {
        super(props);
    }   

    render() {
        const renderContacts = () => {
            return (
                <div className="contact-list">
                    {
                        this.props.contacts.map((item) => {
                            return (
                                <ContactItem key={item.id} contact={item} onDelete={this.props.onDelete.bind(null, item)} />
                            );
                        })
                    }
                </div>
            )            
        }

        const {contacts} = this.props;
        return (
            
            <div>
                {contacts == null && <p> Loading... </p>}
                {contacts != null && renderContacts()}
            </div>
        );
    }
}

export default ContactList;