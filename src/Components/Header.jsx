import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Cell className="left">
        <Link to="/">
          <Img src={imdbImg} alt="로고" />
        </Link>
        <Link to="/movie">Popular</Link>
        <Link to="/movie">Top Rated</Link>
        <Link to="/movie">Upcoming</Link>
      </Cell>
    </Container>
  );
}

const imdbImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1024px-IMDB_Logo_2016.svg.png";

const Container = styled.div`
  margin: 0 2.5rem;
  padding: 0.5rem 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  &.left {
    gap: 3rem;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 80px;
  cursor: pointer;
  display: block;
`;

export default Header;
