import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { List } from 'material-ui/List';
import Contact from '../components/Contact';

class ContactList extends Component {
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
            />)
        }
      </List>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ContactList);
