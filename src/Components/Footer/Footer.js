import React from 'react';
import { Menu } from 'element-react/next';
import './Footer.css';
import { withRouter} from 'react-router-dom';

const Footer = () => {

  return (
    <>
      <div className="Footer">
        <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal">
          <Menu.Item index="0" to="/">Home</Menu.Item>
          <Menu.Item index="1" to="/pricing">Pricing</Menu.Item>
          <Menu.Item index="2" to="/about Us">About Us</Menu.Item>
          <Menu.Item index="3" to="/contact">Contact</Menu.Item>
          <p>Copyright &copy; 2019 | Designed by <span>Kaa'bola</span></p>
          <div className="SocialLinks">
            <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter-square"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
          </div>
        </Menu>
      </div>
    </>
  );
};

export default withRouter(Footer);
