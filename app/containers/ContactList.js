import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { List } from 'material-ui/List';
import Contact from '../components/Contact';
import { changeContact } from '../actions/user';

class ContactList extends Component {
  constructor() {
    super();
    this.handleChangeContact = this.handleChangeContact.bind(this);
  }

  handleChangeContact(contact) {
    return (event) => {
      this.props.changeContact(contact);
    };
  }

  render() {
    const {
      contacts
    } = this.props;

    return (
      <List>
        {
          contacts
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              } else if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
            .map((contact) => <Contact
              key={contact.id}
              contact={contact}
              handleTouchTap={this.handleChangeContact}
            />)
        }
      </List>
    );
  }
}

ContactList.propTypes = {
  user: PropTypes.object,
  contacts: PropTypes.array,
  changeContact: PropTypes.func
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  changeContact
})(ContactList);
