import React from 'react';
import { Menu} from 'element-react/next';
import './Footer.css';
import { withRouter, Link} from 'react-router-dom';

const Footer = () => {

  return (
    <>
      <div className="Footer">
        <Menu theme="dark" className="el-menu-demo" mode="horizontal">
          <Menu.Item index="0" to="/">Home</Menu.Item>
          <Menu.Item index="1" to="/pricing">Pricing</Menu.Item>
          <Menu.Item index="2" to="/about Us">About Us</Menu.Item>
          <Menu.Item index="3" to="/contact">Contact</Menu.Item>
        </Menu>
          <p>Copyright &copy; 2019 | Designed by  <span> Examica</span></p>
          <div className="SocialLinks">
            <Link to="https://facebook.com"><i className="fab fa-facebook"></i></Link>
            <Link to="https://twitter.com"><i className="fab fa-twitter-square"></i></Link>
            <Link to="https://linkedin.com"><i className="fab fa-linkedin"></i></Link>
          </div>
      </div>
    </>
  );
};

export default withRouter(Footer);
