import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';

class Contact extends Component {
  render() {
    const {
      contact,
      handleTouchTap
    } = this.props;

    return (
      <ListItem
        leftAvatar={
          <Avatar
            src={contact.iconPath}
          />
        }
        primaryText={contact.name}
        secondaryText={contact.statusMessage}
        containerElement={<Link to={`/chat/${contact.id}`} />}
        onTouchTap={handleTouchTap(contact)}
      />
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  handleTouchTap: PropTypes.func.isRequired
};

export default connect()(Contact);
