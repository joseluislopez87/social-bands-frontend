import styled from 'styled-components';
import ReactSelect from 'react-select';

const ExploreHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Search = styled.input`
  border: 0;
  border-radius: 0.3em;
  flex: 1;
  flex-shrink: 1;
  min-width: 150px;
  padding: 0.5em;
  width: 70%;
`;

const DistanceSelector = styled.select`
  appearance: none;
  background: none;
  border: none;
  color: white;
  padding-right: 0.2em;
  text-align: right;
  text-decoration: underline;
  width: 110px;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5em;
  width: 100%;
  z-index: 100;

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-top: 0.4em;
  }
`;

const Select = styled(ReactSelect)`
  width: 100%;
`;

const Styled = {
  ExploreHeader,
  Form,
  Search,
  DistanceSelector,
  Filters,
  Select,
}

export default Styled;
