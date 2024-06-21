import LinkStyled from "./NavBarStyled";
function NavBar() {
  return (
    <>
      <LinkStyled color="pink" to="/">
        Home
      </LinkStyled>
      <LinkStyled to="/dashboard">Dashnboard</LinkStyled>
      <LinkStyled to="/contact">Contact</LinkStyled>
    </>
  );
}

export default NavBar;
