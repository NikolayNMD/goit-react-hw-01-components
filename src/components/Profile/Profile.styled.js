import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
  background-color: white;
  box-shadow: 2px 2px 2px 0px rgba(157, 157, 157, 0.5);
  border-radius: 5px;

  .description {
    text-align: center;
    padding: 30px 10px;

    .avatar {
      width: 150px;
      border-radius: 50%;
      margin: 0 auto 20px;
      background-color: #e8ecf2;
    }

    .name {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.5;
      margin-bottom: 5px;
    }

    .tag,
    .location {
      font-size: 15px;
      font-weight: 500;
      line-height: 1.2;
      color: gray;
    }
  }

  .stats {
    display: flex;

    li {
      width: calc(100% / 3);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 16px 8px;
      background-color: #e8ecf2;
      border: 1px solid #dedede;
    }

    li:first-child {
      border-radius: 0 0 0 5px;
    }

    li:last-child {
      border-radius: 0 0 5px 0;
    }

    .label {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.2;
      color: gray;
      margin-bottom: 5px;
    }

    .quantity {
      font-size: 17px;
      font-weight: 700;
      line-height: 1, 5;
    }
  }
`;
