import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

// import demoImg1 from '../../../assets/images/demoImg1.jpeg';
import genderIcon from '../../../assets/icons/genderIcon.svg';
import blockAdminIcon from '../../../assets/icons/blockAdminIcon.svg';
import trashIcon from '../../../assets/icons/trashIcon.svg';
import downloadIcon from '../../../assets/icons/downloadIcon.svg';
import globalIcon from '../../../assets/icons/globalIcon.svg';
import { TabsMenu } from '../../../utils/enum';
import './adminDetailStudent.css';
import ReviewTutor from '../../student/detailTutor/reviewTutor';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectorStudentDetail, studentsActions } from '../../../features/students/studentsSlice';

const AdminDetailStudent = () => {
  const { studentId } = useParams();
  const dispatch = useDispatch();
  const detailStudent = useSelector(selectorStudentDetail);
  const tabsMenu = [{ name: 'Đánh giá', link: TabsMenu.REVIEWS }];

  const [links, setLinks] = useState(TabsMenu.REVIEWS);

  const activeComponent = {
    REVIEWS: <ReviewTutor />,
  };

  useEffect(() => {
    dispatch(studentsActions.fetchDetailStudent(studentId));
    return () => {
      dispatch(studentsActions.refreshDetailStudent());
    };
  }, [studentId, dispatch]);

  const handleDeleteStudent = (id) => {
    // dispatch(studentsActions.deleteStudent(id));
  };
  return (
    <div className='adminDetail__student'>
      <div className='adminDetail__student-body'>
        <div className='adminDetail__student-headerInfo'>
          <div className='studentHeader__info'>
            <div className='studentHeader__avatar'>
              <img className='studentHeader__avatar-img' src={detailStudent.avatar} alt='avatar' />
            </div>
            <div className='studentHeader__profile-core'>
              <div className='studentProfile-title'>
                <div className='studentProfile-name'>{detailStudent.name}.</div>
              </div>
              <ul className='studentProfile-list'>
                <li className='studentProfile-item'>
                  <div className='studentProfile-wrapIcon'>
                    <img src={globalIcon} alt='global Icon' className='h-9 w-9' />
                    <span>Viet Nam</span>
                  </div>
                </li>
                <li className='studentProfile-item'>
                  <div className='studentProfile-wrapIcon'>
                    <img src={genderIcon} alt='gender icon' className='h-9 w-9' />
                    <span>{detailStudent.gender}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='studentHeader__feature'>
            <div className='studentHeader__feature-left'>
              <ul className='studentProfile-list'>
                <li className='studentProfile-item'>
                  <div className='studentProfile-wrapIcon'>
                    <img src={blockAdminIcon} alt='block icon' className='h-9 w-9' />
                    <span>Chặn</span>
                  </div>
                </li>
                <li className='studentProfile-item' onClick={() => handleDeleteStudent(detailStudent.id)}>
                  <div className='studentProfile-wrapIcon'>
                    <img src={trashIcon} alt='trash icon' className='h-9 w-9' />
                    <span>Xóa</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className='studentHeader__feature-right'>
              <ul className='studentProfile-list'>
                <li className='studentProfile-item'>
                  <div className='studentProfile-wrapIcon'>
                    <img src={downloadIcon} alt='export icon' className='h-9 w-9' />
                    <span>Xuất PDF</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='adminDetail__student-briefInfo'>
          <ul className='studentBrief__info'>
            <li className='studentBrief__item'>
              <span className='studentBrief__info-title'>ID</span>
              <span className='studentBrief__info-value'>{detailStudent._id}</span>
            </li>

            <li className='studentBrief__item'>
              <span className='studentBrief__info-title'>Email</span>
              <span className='studentBrief__info-value'>{detailStudent.email}</span>
            </li>

            <li className='studentBrief__item'>
              <span className='studentBrief__info-title'>Ngày sinh</span>
              <span className='studentBrief__info-value'>{detailStudent.dOB}</span>
            </li>

            <li className='studentBrief__item'>
              <span className='studentBrief__info-title'>Số điện thoại</span>
              <span className='studentBrief__info-value'>{detailStudent.phone}</span>
            </li>
          </ul>
        </div>
        {/* menu main info */}
        <div className='adminDetail__student-mainInfo'>
          <div className='detailStudent_content'>
            <div className='detailStudent_menu'>
              <ul className='detailStudent_menu-list'>
                {tabsMenu.map((props) => (
                  <button
                    className={links === props.link ? 'detailStudent_menu-item--active' : 'detailStudent_menu-item'}
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

export default AdminDetailStudent;
