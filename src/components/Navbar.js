import react from 'react';

const Navbar = () => {
  return (
      <header>
          <ul>
            <li><a href="https://mail.google.com/">Gmail</a></li>
            <li><a href="https://www.google.co.in/imghp?hl=en&authuser=0&ogbl">Images</a></li>
            <li><a href="#"><img src="images/apps.png" alt="apps" /></a></li>
            <li><a href="https://accounts.google.com/AddSession/signinchooser?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAlAmgQ&flowName=GlifWebSignIn&flowEntry=AddSession" target="_blank"><button>Sign In</button></a></li>
         </ul>
      </header>
  );
};

export default Navbar;