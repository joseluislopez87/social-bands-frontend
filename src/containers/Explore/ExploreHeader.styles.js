import styled from 'styled-components';

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

const Styled = {
  ExploreHeader,
  Form,
  Search,
  DistanceSelector,
}

export default Styled;
