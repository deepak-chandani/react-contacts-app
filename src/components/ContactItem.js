import React, {Component} from 'react';

class ContactItem extends Component {
    render(){
        const {contact} = this.props;
        return (
            <div className="contact-list-item"> 
                    <img className="contact-avatar" src={contact.avatarUrl} />
                    <div className="contact-details">
                        <p>
                            {contact.name}
                        </p>
                    </div>
                    <div className="contact-remove" onClick={this.props.onDelete.bind(this, contact)}></div>                
            </div>
        )
    }
}


export default ContactItem;