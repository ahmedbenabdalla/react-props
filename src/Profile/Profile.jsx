import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const { fullName, bio, profession, handleName } = props.data || props;
  return (
    <div style={{ marginTop: 100 }}>
      <div>{props.children}</div>
      <h2>{fullName}</h2>
      <h3>{bio}</h3>
      <h2>{profession}</h2>
      {<button onClick={() => handleName(fullName)}>Click Me</button>}
    </div>
  );
};
Profile.defaultProps = {
  fullName: "My fullName",
  bio: "My bio",
  profession: "My Profession",
  handleName(name) {
    return alert(`the name of the profile user is : ${name}`);
  },
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func,
};

export default Profile;
