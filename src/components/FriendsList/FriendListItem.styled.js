import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  background-color: white;
  padding: 6px 10px;
  box-shadow: 2px 2px 2px 0px rgba(157, 157, 157, 0.5);
  border-radius: 5px;

  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
  }

  .isOffline {
    background-color: green;
  }

  .avatar {
    background-color: #e8ecf2;
    border-radius: 5px;
  }

  .name {
    font-weight: 500;
  }
`;
