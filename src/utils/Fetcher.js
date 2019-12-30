import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Loading from 'components/Loading';
import Error from './Error';

const defaultEmptyText = 'Nothing to show.';

const defaultOptions = {
  customLoading: undefined,
}

export default function Fetcher({
  request,
  children,
  emptyText = defaultEmptyText,
  options = defaultOptions
}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const { customLoading } = options;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await axios(request)
        .then(data => setData(data.data))
        .catch(error => setError(error));
      setLoading(false);
    }
    fetchData();
  }, [request]);

  if (loading) return customLoading ? customLoading : <Loading />
  if (error) return <Error error={error} />
  if (data.length === 0) return emptyText
  return children({ data: data })
}

Fetcher.propTypes = {
  request: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  options: PropTypes.object,
}
