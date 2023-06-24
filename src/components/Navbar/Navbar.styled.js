import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Samll Screen */
  .container {
    background-color: #4361ee;
    padding: 1rem;
    color: #fff;
  }

  .navbar__brand {
    margin-bottom: 1rem;
  }

  .navbar__list {
    list-style: none;
  }

  .navbar__item {
    margin-bottom: 1rem;
  }

  .navbar__link {
    text-decoration: none;
    color: white;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .navbar {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .navbar__brand {
      margin: 0;
    }

    .navbar__list {
      display: flex;
      flex-direction: row;
    }

    .navbar__item {
      margin: 0 1rem;
    }
  }
`;
export default StyledNavbar;
