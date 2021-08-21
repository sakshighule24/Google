import react from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="row row1">
        <p className="country">India</p>
      </div>
      <div className="row row2">
        <ul>
          <li><a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a></li>
          <li><a href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a></li>
          <li><a href="https://www.google.com/intl/en_in/business/">Business</a></li>
          <li><a href="https://www.google.com/search/howsearchworks/?fg=1">How Search works</a></li>
        </ul>
        <ul>
          <li><a href="https://policies.google.com/privacy?hl=en-IN&fg=1">Privacy</a></li>
          <li><a href="https://policies.google.com/terms?hl=en-IN&fg=1">Terms</a></li>
          <li><a href="https://www.google.com/preferences?hl=en-IN&fg=1">Setting</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;