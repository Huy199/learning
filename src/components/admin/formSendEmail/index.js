import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import { modalActions } from '../../../features/modal/modal';
import { useOutside } from '../../../utils/help';
// import { tutorActions } from '../../../features/tutors/tutorsSlice';
import './formSendEmail.css';

const FormSendEmail = () => {
  const [animationClose, setAnimationClose] = useState('');
  const [isSent, setIsSent] = useState(false);
  console.log('isSent: ', isSent);
  //get detail tutor from url by id
  // const tutorDetail = useSelector(selectTutorDetail);
  // const { pathname } = useLocation();
  // const tutorId = pathname.split('/')[3];
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    message: '',
  });
  const dispatch = useDispatch();

  //close modal
  const handleCloseModal = () => {
    setAnimationClose('animation-close');
    setTimeout(() => {
      dispatch(modalActions.hideModal());
    }, 200);
  };

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);

    // handle send email with backend
  };

  // get information of detail tutor : name, email
  // useEffect(() => {
  //   dispatch(tutorActions.fetchDetailTutor(tutorId));
  // }, [tutorId, dispatch]);

  //click outside to close modal
  const formModalRef = useRef();
  useOutside(formModalRef, handleCloseModal);
  return (
    <div id='formSendEmail'>
      <div ref={formModalRef} className={`container ${animationClose}`}>
        <div className='title'>
          <h3>Gửi email cho giáo viên</h3>
        </div>
        <form method='post' encType='text/plain' onSubmit={handleSubmit}>
          <div className='wrapper'>
            <div className='form-group'>
              <label htmlFor='name' className='label'>
                Tên giáo viên
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='input w-1/2'
                value={formValue.name}
                onChange={handleChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email' className='label'>
                Email
              </label>
              <input
                type='text'
                id='email'
                name='email'
                className='input w-3/4'
                value={formValue.email}
                onChange={handleChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='message' className='label'>
                Nội dung tin nhắn
              </label>
              <textarea
                name='message'
                id='message'
                rows='7'
                className='message'
                value={formValue.message}
                onChange={handleChange}
              />
            </div>

            <div className='btn-group'>
              <button className='btn cancel' onClick={handleCloseModal}>
                Thoát
              </button>
              <button className='btn' type='submit'>
                Gửi
              </button>
            </div>
          </div>
        </form>

        {isSent && (
          <div className='sent__success'>
            <div className='wrapper'>
              <p>Tin nhắn đã gửi thành công</p>
              <button
                onClick={() => {
                  setIsSent(false);
                  handleCloseModal();
                }}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormSendEmail;
