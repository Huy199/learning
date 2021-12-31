import React from 'react';
import { useSelector } from 'react-redux';
import { selectModalComponent, selectModalShow } from '../../../features/modal/modal';
import NotificationStudent from '../../../pages/student/notifications';
import FormAddPromotion from '../../admin/formAddPromotion';
import NotificationMenu from '../../admin/notificationMenu';
import CreateForm from '../../admin/tripleStepForm/create';
import CreateAvatar from '../../admin/addAvatar/add';
import CreateCourse from '../../admin/createCourse/create';
import HamburgerMenu from '../../common/hamburgerMenu';
import BookingModal from '../../student/bookingModal';
import FormSendEmail from '../../admin/formSendEmail';
import './modal.css';

const Modal = () => {
  const open = useSelector(selectModalShow);
  const component = useSelector(selectModalComponent);

  const modalComponent = {
    HAMBURGER_MENU: <HamburgerMenu />,
    NOTIFICATION: <NotificationMenu />,
    NOTIFICATION_STUDENT: <NotificationStudent />,
    // ADD_FORM: <CreateForm />,
    ADD_FORM_COURSE: <CreateCourse />,
    ADD_AVATAR: <CreateAvatar />,
    ADD_AVATAR_STUDENT: <CreateAvatar student />,
    ADD_FORM_PROMOTION: <FormAddPromotion />,
    FORM_SEND_EMAIL: <FormSendEmail />,
    BOOKING_MODAL: <BookingModal />,
  };

  return open && <div className='modal__container'>{modalComponent[component]}</div>;
};

export default Modal;
