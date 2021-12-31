import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='first__group-footer'>
        <div className='first__footer-row'>
          <div className='first_footer-linkBox'>
            <h5 className='title__linkBox'>Về chúng tôi</h5>
            <ul className='menuList__linkBox'>
              <li>
                <a href='/' className='menuLink__linkBook'>
                  Chúng tôi là ai
                </a>
              </li>
              <li>
                <a href='/' className='menuLink__linkBook'>
                  Trợ giúp
                </a>
              </li>
            </ul>
          </div>
          {/* second link box */}
          <div className='first_footer-linkBox'>
            <h5 className='title__linkBox'>Cho học sinh</h5>
            <ul className='menuList__linkBox'>
              <li>
                <a href='/' className='menuLink__linkBook'>
                  Câu hỏi và trả lời
                </a>
              </li>
            </ul>
          </div>
          <div className='first_footer-linkBox'>
            <h5 className='title__linkBox'>Cho giáo viên</h5>
            <ul className='menuList__linkBox'>
              <li>
                <a href='/' className='menuLink__linkBook'>
                  Câu hỏi và trả lời
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* second row in first footer */}
        <div className='first__footer-row second__content-row'>
          <div className='first_footer-linkBox'>
            <h5 className='title__linkBox'>Hỗ trợ</h5>
            <ul className='menuList__linkBox'>
              <li>
                <a href='/' className='menuLink__linkBook'>
                  support@greenify.com
                </a>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className='first_footer-linkBox'>
            <h5 className='title__linkBox'>Mạng xã hội</h5>
            <ul className='menuList__linkBox'>
              <li>
                <a href='/' className='menuLink__linkBook'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='/' className='menuLink__linkBook'>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* second footer */}
      <div className='second__group-footer'>
        <div className='second__footer-row'>
          <p className='copyRight__footer'>Udic Edu - Made by Greenify team with ❤️</p>
          <div className='policy__footer'>
            <a className='link__policy' href='/'>
              Điều khoản dịch vụ
            </a>
            <a className='link__policy' href='/'>
              Chính sách
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
