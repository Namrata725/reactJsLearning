function Header() {
  return (
    <div>
      <h3>header</h3>
      <h3>{greet()}</h3>
    </div>
  );
}

function greet() {
  return "Hello from greet function!";
}

export default Header;
