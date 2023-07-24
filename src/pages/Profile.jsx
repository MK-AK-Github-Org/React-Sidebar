import { useState } from "react";
import "../css/profile.css";

const Profile = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <form className="profile-form">
        <div className="input-container">
          <input
            type="text"
            id="input"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <label
            htmlFor="input"
            className={isInputFocused ? "label focused" : "label"}
          >
            Enter Text
          </label>
          <div className="underline"></div>
        </div>
        <div className="input-container">
          <input
            type="password"
            id="input"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <label
            htmlFor="input"
            className={isInputFocused ? "label focused" : "label"}
          >
            Enter Text
          </label>
          <div className="underline"></div>
        </div>
        <div className="input-container">
          <input
            type="date"
            id="input"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <label
            htmlFor="input"
            className={isInputFocused ? "label focused" : "label"}
          >
            Enter Text
          </label>
          <div className="underline"></div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
