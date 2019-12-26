import styled from 'styled-components';

export const Container = styled.header`
  background: #eee;
  box-shadow: 5px 5px 5px #888888;
  border: 1px solid #888888;
  transform: translateY(-50px);

  width: 100%;
  max-width: 600px;

  padding: 20px 10px;
  border-radius: 4px;

  span {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: #222;

    .film {
      transform: translate(350px, 5px);
    }
  }


`;