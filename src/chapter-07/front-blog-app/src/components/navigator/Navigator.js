import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

Navigator.propTypes = {
  list: PropTypes.array,
}

function Navigator({ list }) {
  return (
    <ul>
      {list && list.length > 0 ? list.map(route => {
        const {id, to, label} = route;
        return (<li key={id}><Link to={to}>{label}</Link></li>)
      }) : (
        <>
          <li key={1}><Link to="/">Home</Link></li>
          <li key={2}><Link to="/user">User</Link></li>
          <li key={3}><Link to="/test">Test</Link></li>
        </>
      )}
    </ul>
  );
}

export default Navigator;
