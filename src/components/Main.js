import react from 'react';

const Main = () => {
  return (
    <div className="main">
      <img src="images/google.png" alt="GOOGLE" />
      <div className="searchBox">
        <input type="text" className="search" />
        <div className="icons">
          <div ><img src="images/search.png" alt="SEARCH" ></img></div>
          <div ><img src="images/mic.png" alt="MIC" ></img></div >
        </div>
      </div>
      <div className="buttons">
        <button>Google Search</button>
        <a href="https://www.google.com/doodles"><button>I'm Feeling Luck</button></a>
      </div>
      <ul className="languages">
        <li>Google offered in:</li>
        <li><a href="#">हिन्दी</a></li>
        <li><a href="#">বাংলা</a></li>
        <li><a href="#">తెలుగు</a></li>
        <li><a href="#">मराठी</a></li>
        <li><a href="#">தமிழ்</a></li>
        <li><a href="#">ગુજરાતી</a></li>
        <li><a href="#">ಕನ್ನಡ</a></li>
        <li><a href="#">മലയാളം</a></li>
        <li><a href="#">ਪੰਜਾਬੀ</a></li>
      </ul>
    </div>
  );
};

export default Main;