import styled from "styled-components";

export const Header = styled.section`
  background-color: #f8eedd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1300px; */
  margin: 0 auto;
  height: 80px;
  border-bottom: 1px solid #e5e5e5;
  padding: 20px;
`;
export const Logo = styled.div`
  max-width: 80px;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;
export const Title = styled.div`
  text-decoration: none;
  color: #131415;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.2rem;
  font-weight: 300;
`;
export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  a {
    text-decoration: none;
    color: #131415;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 1.2rem;
    font-weight: 300;
  }
`;
