import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const DivRow = styled.div`
  flex: 0 0 100%;
  width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  @media (min-width: 768px) {
    width: 50%;
    flex: 0 0 50%;
  }
`;
