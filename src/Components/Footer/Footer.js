import React from 'react';
import { Menu } from 'element-react/next';
import './Footer.css';
import { withRouter } from 'react-router-dom';

const Footer = () => {

  return (
    <>
      <div className="Footer">
        <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal">
          <Menu.Item to="/">Home</Menu.Item>
          <Menu.Item to="/pricing">Pricing</Menu.Item>
          <Menu.Item to="/about Us">About Us</Menu.Item>
          <Menu.Item to="/contact">Contact</Menu.Item>
          <p>Copyright &copy; 2019 | Designed by <span>Kaa'bola</span></p>
          <a href="www.facebook.com"><i class="fab fa-facebook"></i></a>
          <a href="www.twitter.com"><i class="fab fa-twitter-square"></i></a>
          <a href="www.linkedin.com"><i class="fab fa-linkedin"></i></a>
        </Menu>
      </div>
    </>
  );
};

export default withRouter(Footer);
