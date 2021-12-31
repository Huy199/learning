import './adminEditTutor.css';

const AdminEditTutor = () => {
  return (
    <div className=''>
      <form>
        <div className='edit-info__container'>
          <div className='edit-info__header'>
            <h5 className='edit-info__title'>Tutor info</h5>
          </div>
          <div className='editsInfo__body'>
            <div className='editInfo__body-left'>
              <div className='gird gird-rows-2 w-full'>
                <div style={{ width: '15rem', marginBottom: '24px' }}>
                  <div className='edit-info_under-line'>
                    <label className='edit-info_text-title' for=''>
                      Tên
                    </label>
                    <input className='edit-info_text-value' name='firstName' value=' ' readonly='' />
                  </div>
                </div>
              </div>

              <div className='gird gird-rows-2 w-full'>
                <div style={{ width: '15rem', marginBottom: '24px' }}>
                  <div className='edit-info_under-line'>
                    <label className='edit-info_text-title' for=''>
                      Email
                    </label>
                    <input className='edit-info_text-value' name='email' value=' ' readonly='' />
                  </div>
                </div>
              </div>
            </div>
            <div className='editInfo__body-right'>
              <div className='gird gird-rows-2 w-full'>
                <div style={{ width: '15rem', marginBottom: '24px' }}>
                  <div className='edit-info_under-line'>
                    <label className='edit-info_text-title' for=''>
                      Họ
                    </label>
                    <input className='edit-info_text-value' name='lastName' value=' ' readonly='' />
                  </div>
                </div>
              </div>

              <div className='gird gird-rows-2 w-full'>
                <div style={{ width: '15rem', marginBottom: '24px' }}>
                  <div className='edit-info_under-line'>
                    <label className='edit-info_text-title' for=''>
                      Phone
                    </label>
                    <input className='edit-info_text-value' name='phone' type='text' />
                  </div>
                </div>
              </div>
            </div>
            <div className='editsInfo__body-password'>
              <div className='col-span-2 col-start-1' style={{ width: '15rem' }}>
                <div style={{ marginBottom: '4rem' }} className='edit-info_under-line'>
                  <label className='edit-info_text-title' for=''>
                    Password
                  </label>
                  <input type='password' className='edit-info_text-value' name='password' readonly='' value='' />
                </div>
              </div>
              <div className='col-span-1 col-start-3' style={{ width: '285px' }}></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminEditTutor;
