type headerParamas={
    text?:String;
  }
  function Header(p:headerParamas) {
    return <h1>{p.text}</h1>;
  }
export default Header;  