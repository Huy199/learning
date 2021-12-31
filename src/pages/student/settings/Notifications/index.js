import './notification.css';
const NotificationsSettings = () => {
  return (
    <div id='studentNotify'>
      <div className='title'>
        <h2>Cài đặt thông báo</h2>
      </div>

      <div className='content'>
        {/* <div className='item'>
          <h2 className='item-title'>Thông báo email</h2>
          <div className='item-form'>
            <div className='item-formGroup'>
              <label className='container'>
                <div className='checkbox__label'>
                  <h6>Lịch học</h6>
                  <span>Thông báo về các bài học mới và thay đổi lịch trình.</span>
                </div>
                <input type='checkbox' />
                <span className='checkmark'></span>
              </label>
            </div>

            <div className='item-formGroup'>
              <label className='container'>
                <div className='checkbox__label'>
                  <h6>Lời nhắc chung</h6>
                  <span>Thông báo về các bài học, tin nhắn của giáo viên và các khoản thanh toán.</span>
                </div>
                <input type='checkbox' />
                <span className='checkmark'></span>
              </label>
            </div>

            <div className='item-formGroup'>
              <label className='container'>
                <div className='checkbox__label'>
                  <h6>Cập nhật và ưu đãi</h6>
                  <span>Luôn kết nối với các bản cập nhật sản phẩm, mẹo hữu ích và ưu đãi đặc biệt.</span>
                </div>
                <input type='checkbox' />
                <span className='checkmark'></span>
              </label>
            </div>

            <div className='item-formGroup'>
              <label className='container'>
                <div className='checkbox__label'>
                  <h6>Blog Udic</h6>
                  <span>Bản tin với các bài viết mới nhất.</span>
                </div>
                <input type='checkbox' />
                <span className='checkmark'></span>
              </label>
            </div>

            <div className='item-formGroup'>
              <label className='container'>
                <div className='checkbox__label'>
                  <h6>Hỏi đáp</h6>
                  <span>Nhận câu trả lời của giáo viên cho các câu hỏi của bạn.</span>
                </div>
                <input type='checkbox' />
                <span className='checkmark'></span>
              </label>
            </div>
          </div>
        </div> */}

        {/* <div className='item'>
          <h2 className='item-title'>Thông báo SMS</h2>
          <div className='item-form'>
            <div className='item-formGroup'>
              <label className='container'>
                <div className='checkbox__label'>
                  <h6>Bài học và tin nhắn</h6>
                  <span>
                    Cảnh báo qua SMS về phản hồi đầu tiên của gia sư đối với yêu cầu của bạn và lời nhắc về bài học thử.
                  </span>
                </div>
                <input type='checkbox' />
                <span className='checkmark'></span>
              </label>
            </div>
          </div>
        </div> */}

        {/* <div className='item'>
          <h2 className='item-title'>Thông báo Udic</h2>
          <div className='item-form'>
            <div className='item-formGroup'>
              <label className='container'>
                <div className='checkbox__label'>
                  <h6>Cho phép nhóm Udic liên hệ với tôi để cải tiến sản phẩm</h6>
                  <span>Cải tiến sản phẩm, nghiên cứu và thử nghiệm beta.</span>
                </div>
                <input type='checkbox' />
                <span className='checkmark'></span>
              </label>
            </div>
          </div>
        </div> */}
        <div className='item'>
          <h2 className='item-title'>Thông báo điện thoại</h2>
          <div className='item-form'>
            <div className='item-formGroup'>
              <label className='container'>
                <div className='checkbox__label'>
                  <h6>Nhận thông báo từ điện thoại</h6>
                  <span>Toàn bộ thông báo sẽ được gửi về điện thoại của bạn.</span>
                </div>
                <input type='checkbox' />
                <span className='checkmark'></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className='btnSubmit'>
        <button>Lưu</button>
      </div>
    </div>
  );
};

export default NotificationsSettings;
