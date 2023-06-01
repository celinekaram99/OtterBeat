// eslint-disable-next-line no-unused-vars
import React, { useState ,useRef} from 'react';
import './login.css';

function Signup() {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [dateOfBirth, setDateOfBirth] = useState('');
  // const [premiumAccount, setPremiumAccount] = useState(false);
  const username = useRef();
  const password = useRef();
  const dateOfBirth = useRef();
  const email = useRef();
  const premiumAccount = useRef();

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleDateOfBirthChange = (event) => {
  //   setDateOfBirth(event.target.value);
  // };

  // const handlePremiumAccountChange = (event) => {
  //   setPremiumAccount(event.target.checked);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // e.g., send signup data to the server
  };

  return (
    <div>
      <h1>Signup to Otter Beat Music</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text"  ref={username}/*onChange={handleUsernameChange} *//>
        </label>
        <label>
          Email:
          <input type="email"  ref={email} />
        </label>
        <label>
          Password:
          <input type="password"  minLength='8' ref={password} />
        </label>
        <label>
          Date of Birth:
          <input type="date"  ref={dateOfBirth}/>
        </label>
        <label>
          Premium Account:
          <input type="checkbox" checked={premiumAccount} ref={premiumAccount} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
