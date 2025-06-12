function ForwardRefUser(props) {
  return (
    <div>
      <input type="text" ref={props.ref} placeholder="enter your name" />
    </div>
  );
}

export default ForwardRefUser;
