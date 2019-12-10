import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 180px;
      height: 24px;
      color: #ee4d64;
      font-size: 15px;
      font-weight: bold;
      border-right: 1px solid #eee;
      margin-right: 30px;
      padding-right: 30px;

      img {
        width: 46px;
        height: 24px;
        margin-right: 12px;
      }
    }

    div a {
      width: 144px;
      height: 18px;
      color: #999999;
      font-size: 15px;
      font-weight: 700;
      text-transform: uppercase;
      margin-right: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  text-align: right;
  margin-right: 10px;

  div {
    strong {
      display: block;
      width: 106px;
      height: 17px;
      color: #666666;
      font-size: 14px;
      font-weight: 700;
    }

    button {
      display: block;
      color: #de3b3b;
      font-size: 14px;
      font-weight: 400;
      border: none;
      background: #fff;
    }
  }
`;
