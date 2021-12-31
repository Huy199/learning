import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import blockAdminIcon from '../../../assets/icons/blockAdminIcon.svg';
import calendarIcon from '../../../assets/icons/calendarIcon.svg';
import contactMailIcon from '../../../assets/icons/contactMailIcon.svg';
import downloadIcon from '../../../assets/icons/downloadIcon.svg';
import editIcon from '../../../assets/icons/editIcon.svg';
import genderIcon from '../../../assets/icons/genderIcon.svg';
import moneyIcon from '../../../assets/icons/moneyIcon.svg';
import studentsIcon from '../../../assets/icons/personIconEnabled.svg';
import pigIcon from '../../../assets/icons/pigIcon.svg';
import starAdminIcon from '../../../assets/icons/starAdminIcon.svg';
import subjectIcon from '../../../assets/icons/subjectIcon.svg';
import timeIcon from '../../../assets/icons/timeIcon.svg';
import trashIcon from '../../../assets/icons/trashIcon.svg';
import { selectTutorDetail, tutorActions } from '../../../features/tutors/tutorsSlice';
import { ModalComponentName, TabsMenu } from '../../../utils/enum';
import ReviewTutor from '../../student/detailTutor/reviewTutor/index';
import ScheduleTutor from '../../student/detailTutor/scheduleTutor/index';
import Document from './document';
import './adminDetailTutor.css';
import { modalActions } from '../../../features/modal/modal';

const AdminDetailTutor = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { tutorId } = useParams();
  const tutorDetail = useSelector(selectTutorDetail);

  const tabsMenu = [
    { name: 'Đánh giá', link: TabsMenu.REVIEWS },
    { name: 'Lịch trình', link: TabsMenu.SCHEDULE },
    { name: 'Tài liệu', link: TabsMenu.DOCUMENT },
  ];
  const [links, setLinks] = useState(TabsMenu.REVIEWS);
  const activeComponent = {
    REVIEWS: <ReviewTutor />,
    SCHEDULE: <ScheduleTutor />,
    DOCUMENT: <Document />,
  };

  useEffect(() => {
    dispatch(tutorActions.fetchDetailTutor({ id: tutorId }));
    return () => {
      dispatch(tutorActions.refreshState());
    };
  }, [dispatch, tutorId]);

  const onHandleDeleteTutor = () => {
    // dispatch(tutorActions.deleteTutor(tutorId));
  };

  const handleShowModalSendEmail = () => {
    dispatch(modalActions.changeModalContent(ModalComponentName.FORM_SEND_EMAIL));
    dispatch(modalActions.showModal());
  };

  return (
    <div className='adminDetail__tutor'>
      <div className='adminDetail__tutor-body'>
        <div className='adminDetail__tutor-headerInfo'>
          <div className='headerInfo__profile'>
            <div className='headerInfo__avatar'>
              <img className='headerInfo__avatar-img' src={tutorDetail.avatar} alt='avatar' />
            </div>
            <div className='headerInfo__profile-core'>
              <div className='profileCore-title'>
                <div className='profileCore-name'>{tutorDetail.name}.</div>
              </div>
              <ul className='profileCore-list'>
                <li className='profileCore-item'>
                  <div className='profileCore-wrapIcon' data-tip='Môn học' data-for='registerTip'>
                    <img src={subjectIcon} alt='subject icon' className='h-9 w-9' />
                    <span>{tutorDetail.courses}</span>
                  </div>
                </li>
                <li className='profileCore-item'>
                  <div className='profileCore-wrapIcon' data-tip='Giới tính' data-for='registerTip'>
                    <img src={genderIcon} alt='gender icon' className='h-9 w-9' />
                    <span>{tutorDetail.gender}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='headerInfo__feature'>
            <div className='headerInfo__feature-right'>
              <ul className='profileCore-list'>
                <li className='profileCore-item'>
                  <button
                    onClick={() => history.push('/admin/tutors/edit-tutor')}
                    className='profileCore-btn'
                    data-tip='Chỉnh sửa'
                    data-for='registerTip'
                  >
                    <img src={editIcon} alt='edit icon' className='h-9 w-9' />
                    <span>Chỉnh sửa</span>
                  </button>
                </li>
                <li className='profileCore-item'>
                  <button className='profileCore-btn' data-tip='Chặn' data-for='registerTip'>
                    <img src={blockAdminIcon} alt='block icon' className='h-9 w-9' />
                    <span> Chặn</span>
                  </button>
                </li>
                <li className='profileCore-item'>
                  <button
                    onClick={onHandleDeleteTutor}
                    className='profileCore-btn'
                    data-tip='Xóa'
                    data-for='registerTip'
                  >
                    <img src={trashIcon} alt='trash icon' className='h-9 w-9' />
                    <span>Xóa</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className='headerInfo__feature-left'>
              <ul className='profileCore-list'>
                <li className='profileCore-item' onClick={handleShowModalSendEmail}>
                  <button className='profileCore-btn' data-tip='Liên hệ' data-for='registerTip'>
                    <img src={contactMailIcon} alt='contact icon' className='h-9 w-9' />
                    <span>Liên hệ</span>
                  </button>
                </li>
                <li className='profileCore-item'>
                  <button className='profileCore-btn' data-tip='Xuất PDF' data-for='registerTip'>
                    <img src={downloadIcon} alt='download icon' className='h-9 w-9' />
                    <span>Xuất PDF</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='adminDetail__tutor-briefInfo'>
          <div className='briefInfo__about'>
            <p className='briefInfo__title'>Giới thiệu</p>
            <p className='briefInfo__about-text'>{tutorDetail.about}</p>
          </div>
          <div className='briefInfo__facts'>
            <p className='briefInfo__title'>Thống kê</p>
            <div className='briefInfo__menu'>
              <span data-tip='Đánh giá' data-for='registerTip' className='profileCore-wrapIcon'>
                <img src={starAdminIcon} alt='icon' className='h-9 w-9' />
                <span>Đánh giá: </span>
                <span className='mx-1'>{tutorDetail.rate} </span>
              </span>

              <span data-tip='Thu nhập một giờ' data-for='registerTip' className='profileCore-wrapIcon'>
                <img src={moneyIcon} alt='icon' className='h-9 w-9' />
                <span>Giá theo giờ:</span>
                <span className='ml-1'>{tutorDetail.moneyPerHour}</span>
              </span>

              <span data-tip='Tổng thu nhập' data-for='registerTip' className='profileCore-wrapIcon'>
                <img src={pigIcon} alt='icon' className='h-9 w-9' />
                <span>Tổng thu nhập:</span>
                <span className='ml-1'>{tutorDetail.totalMoney}</span>
              </span>

              <span data-tip='Tổng số học sinh' data-for='registerTip' className='profileCore-wrapIcon'>
                <img src={studentsIcon} alt='icon' className='h-9 w-9' />
                <span>Tổng số học sinh:</span>
                <span className='mx-1'>200</span>
              </span>

              <span data-tip='Tổng thời gian đã dạy' data-for='registerTip' className='profileCore-wrapIcon'>
                <img src={timeIcon} alt='icon' className='h-9 w-9' />
                <span>Tổng thời gian: </span>
                <span className='mx-1'>{tutorDetail.totalTime}</span>
              </span>

              <span data-tip='Ngày tham gia' data-for='registerTip' className='profileCore-wrapIcon'>
                <img src={calendarIcon} alt='icon' className='h-9 w-9' />
                <span>Ngày tham gia:</span>
                <span className='mx-1'>{moment(tutorDetail.createdAt).format('DD MMMM, YYYY')}</span>
              </span>
            </div>
          </div>
        </div>
        {/* menu main info */}
        <div className='adminDetail__tutor-mainInfo'>
          <div className='detailTutor_content'>
            <div className='detailTutor_menu'>
              <ul className='detailTutor_menu-list'>
                {tabsMenu.map((props) => (
                  <button
                    className={links === props.link ? 'detailTutor_menu-item--active' : 'detailTutor_menu-item'}
                    key={props.link}
                    onClick={() => setLinks(props.link)}
                  >
                    {props.name}
                  </button>
                ))}
              </ul>
            </div>
            <div>{activeComponent[links]}</div>
          </div>
        </div>
      </div>
      <ReactTooltip id='registerTip' />
    </div>
  );
};

export default AdminDetailTutor;
