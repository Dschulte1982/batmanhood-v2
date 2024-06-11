export const User = (props) => {
  return (
    <>
      <strong>Username:</strong> {props.user.username}
      <br />
      <strong>Email:</strong> {props.user.email}
      <br />
      <hr />
    </>
  );
};
