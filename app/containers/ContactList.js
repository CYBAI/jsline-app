import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Contact from '../components/Contact';

class ContactList extends Component {
  render() {
    const {
      contacts,
      handleContactClick
    } = this.props;

    return (
      <List>
        {
          contacts ?
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
              onContactClick={handleContactClick}
            />) : (
            <ListItem>
              You still have no friends now.
            </ListItem>
          )
        }
      </List>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleContactClick: PropTypes.func
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ContactList);
