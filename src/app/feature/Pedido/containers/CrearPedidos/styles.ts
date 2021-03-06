import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DivRow = styled.div`
  flex: 0 0 100%;
  width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-top: 15px;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 768px) {
    width: 50%;
    flex: 0 0 50%;
  }
`;
