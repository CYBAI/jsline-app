import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

class Contact extends Component {
  render() {
    const {
      contact
    } = this.props;

    return (
      <ListItem
        leftAvatar={
          <Avatar
            src={contact.iconPath}
          />
        }
      > {contact.name} </ListItem>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Contact);
