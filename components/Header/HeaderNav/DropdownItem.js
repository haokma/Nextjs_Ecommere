import PropTypes from 'prop-types';
import React from 'react';
DropdownItem.propTypes = {
  item: PropTypes.object
}
DropdownItem.defaultProps = {
  item: {}
};
function DropdownItem({ item }) {
  return (
    <li className="dropdown-item">
      <a
        className="dropdown-item__link"
      >
        {item.name}
      </a>
    </li>
  )
}

export default DropdownItem
