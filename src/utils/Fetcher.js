import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Loading from 'components/Loading';
import Error from './Error';

export default function Fetcher({
  request,
  children,
  customLoading
}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await axios(request)
        .then(data => setData(data.data))
        .catch(error => setError(error));
      setTimeout(() => setLoading(false), 0);
    }
    fetchData();
  }, [request]);

  if (loading) return customLoading ? customLoading : <Loading />
  if (error) return <Error error={error} />
  return children({ data: data })
}

Fetcher.propTypes = {
  request: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  customLoading: PropTypes.node,
}
