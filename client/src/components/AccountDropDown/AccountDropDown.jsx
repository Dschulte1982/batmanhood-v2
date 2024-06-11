import { connect } from "react-redux";
import { logOut } from "../store/authReducer";

export const AccountDropDown = () => {
  const logoutButtonHandle = (e) => {
    e.preventDefault();
    logOut();
  };
  return (
    <>
      <div id={"account-drop-down-div"}>
        <div id={"drop-down-username"}>
          {this.props.user.firstName} {this.props.user.lastName}
        </div>
        <div id={"drop-down-balance"}>Balance: ${this.props.user.balance}</div>
        <div>
          <button id={"logout-button"} onClick={logoutButtonHandle}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

connect(mapStateToProps, mapDispatchToProps)(AccountDropDown);
