import React from 'react';

import bannerImage from '../../assets/images/bannerImage.png';
// import Loading from '../../components/common/loading';
import Advantages from '../../components/landing/advantages';
import Benefit from '../../components/landing/benefit';
import Modal from '../../components/common/modal';
import Footer from '../../components/landing/footer';
import Header from '../../components/landing/header';
import PromotionCard from '../../components/landing/promotionCard';
import promotionIconOutline from '../../assets/icons/promotionIconOutline.svg';
import TutorsCard from '../../components/landing/tutorsCard';
import './landing.css';

const LandingRole = () => {
  return (
    <div className='landing__page-container'>
      {/* <Loading /> */}
      <Header />
      {/* slide begin goes here */}
      <div style={{ backgroundImage: `url(${bannerImage})` }} className='landing__page-slide'>
        <div className='slide__content'>
          <div className='slide__content-wrap'>
            <div className='slide__content-title'>
              <h1>
                <span style={{ fontWeight: 600 }}>Tìm giáo viên ngôn ngữ trực tuyến tốt nhất </span>
                <br />
                và học cách nói một cách tự tin
              </h1>
            </div>
            <div className='slide__content-search'>
              <div className='slide__search-wrap'>
                <input type='text' placeholder='Tìm kiếm theo ngôn ngữ hoặc chuyên ngành' />
                <button className='slide__search-btn'>Tìm kiếm</button>
                {/* Search icon button. It will display when you used devices have 425px smaller than screen  */}
                <button className='slide__search-btn-icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Body of landing page goes here */}
      <div className='landing__page-body'>
        <div className='landing__page-tutors-card'>
          <TutorsCard />
        </div>
        <div className='landing__page-advantages'>
          <div className='first__advantages_icon '>
            <svg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
              <title>uEA46-world</title>
              <g id='Page-1' fill='none' fillRule='evenodd'>
                <g id='uEA46-world' transform='translate(-1 -1)' fillRule='nonzero' fill='#FFFFFF'>
                  <path
                    d='M17 1c8.822 0 16 7.178 16 16 0 8.823-7.178 16.001-16 16.001-8.823 0-16-7.178-16-16.001C1 8.178 8.177 1 17 1zm3.293 28.656c5.171-1.348 9.108-5.773 9.712-11.201h-5.83a23.716 23.716 0 0 1-3.882 11.201zM3.995 18.455c.602 5.428 4.54 9.853 9.71 11.201A23.677 23.677 0 0 1 9.82 18.455H3.995zm9.712-14.11c-5.171 1.349-9.108 5.774-9.712 11.2h5.83a23.71 23.71 0 0 1 3.882-11.2zm-.98 11.2h8.548A20.756 20.756 0 0 0 17 4.711a20.785 20.785 0 0 0-4.273 10.834zm-.003 2.91A20.758 20.758 0 0 0 17 29.29a20.785 20.785 0 0 0 4.273-10.836h-8.55zm17.281-2.91c-.604-5.426-4.541-9.851-9.712-11.2a23.662 23.662 0 0 1 3.885 11.2h5.827z'
                    id='Shape'
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <Advantages />
          {/* Advantages second begin goes here */}

          <div className='second__advantages_icon'>
            <span className='second__advantages_icon-wrap'>
              <svg width='34' height='24' viewBox='0 0 34 24' xmlns='http://www.w3.org/2000/svg'>
                <title>Shape</title>
                <g id='Page-1' fill='none' fillRule='evenodd'>
                  <g id='Artboard' transform='translate(-15 -20)' fillRule='nonzero' fill='#3BB3BD'>
                    <g id='tutoring_icon'>
                      <g id='graduation_cap' transform='translate(15 20)'>
                        <path
                          d='M17 .93l.498.265 14.344 7.438 1.826.93-1.826.93-4.217 2.157v5.412c0 .47-.216.893-.465 1.163-.249.27-.552.431-.863.597-.627.328-1.37.56-2.291.764-1.843.41-4.3.664-7.006.664-2.706 0-5.163-.253-7.006-.664-.921-.203-1.664-.436-2.29-.764-.312-.166-.615-.328-.864-.597a1.763 1.763 0 0 1-.465-1.163V12.65L4.25 11.555v7.869a2.106 2.106 0 0 1 1.063 1.826c0 1.175-.95 2.125-2.125 2.125a2.124 2.124 0 0 1-2.126-2.125c0-.784.428-1.457 1.063-1.826v-8.965L.332 9.563l1.826-.93 14.344-7.438L17 .93zm0 2.39L4.98 9.562l1.893.963c.24-.253.531-.44.83-.597.623-.328 1.37-.56 2.291-.764C11.833 8.754 14.281 8.5 17 8.5c2.719 0 5.167.253 7.006.664.921.203 1.668.436 2.29.764.3.157.59.344.831.597l1.893-.963L17 3.32zm0 7.305c-2.594 0-4.927.237-6.541.598-.805.178-1.453.386-1.793.564-.108.058-.124.1-.166.133v4.05c.444-.161.93-.306 1.494-.43 1.843-.412 4.3-.665 7.006-.665 2.706 0 5.163.253 7.006.664.564.125 1.05.27 1.494.432V11.92c-.042-.033-.058-.075-.166-.133-.34-.178-.988-.386-1.793-.564-1.614-.361-3.947-.598-6.541-.598zM17 17c-2.577 0-4.922.237-6.541.598a7.618 7.618 0 0 0-1.461.465c.365.157.789.315 1.461.464 1.619.361 3.964.598 6.541.598 2.577 0 4.922-.237 6.541-.598a7.618 7.618 0 0 0 1.461-.465 7.618 7.618 0 0 0-1.461-.464C21.922 17.237 19.577 17 17 17z'
                          id='Shape'
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
          </div>
          <Benefit />

          {/* @Viet:  promotion card */}
          <div className='promotionCard__icon'>
            <div className='promotionCard__icon-wrapper'>
              <img src={promotionIconOutline} className='h-9 w-9' alt='icon promotion' />
            </div>
          </div>
          <PromotionCard />
        </div>
      </div>
      <Footer />
      <Modal />
    </div>
  );
};

export default LandingRole;
