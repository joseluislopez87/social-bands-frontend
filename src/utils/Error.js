import React from 'react';
import PropTypes from 'prop-types';

export default function Error({ error }) {
  console.log(error);
  return(
    <table border='1'>
      <tbody>
        <tr>
          <td colSpan='2'>{error.message}</td>
        </tr>
        <tr>
          <td>url</td>
          <td>{error.config.url}</td>
        </tr>
      </tbody>
    </table>
  )
}

Error.propTypes = {
  error: PropTypes.object.isRequired,
}
