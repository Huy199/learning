import './tutorScheduleSlide.css';

const TutorScheduleSlide = () => {
  return (
    <div id='tutorScheduleSlide'>
      <div className='tutorScheduleSlide__container'>
        <div className='row'>
          <div className='row__title'></div>
          <div className='cell__wrapper'>
            <div className='cell'>Thứ hai</div>
            <div className='cell'>Thứ ba</div>
            <div className='cell'>Thứ tư</div>
            <div className='cell'>Thứ năm</div>
            <div className='cell'>Thứ sáu</div>
            <div className='cell'>Thứ bảy</div>
            <div className='cell'>Chủ nhật</div>
          </div>
        </div>

        <div className='row'>
          <div className='row__title'>
            <h4>Sáng</h4>
            <p>07:00 - 12:00</p>
          </div>
          <div className='cell__wrapper'>
            <div className='cell'></div>
            <div className='cell cell-active'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell cell-active'></div>
          </div>
        </div>

        <div className='row'>
          <div className='row__title'>
            <h4>Chiều</h4>
            <p>12:00 - 18:00</p>
          </div>
          <div className='cell__wrapper'>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell cell-active'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell cell-active'></div>
          </div>
        </div>

        <div className='row'>
          <div className='row__title'>
            <h4>Tối</h4>
            <p>18h:00 - 22:00</p>
          </div>
          <div className='cell__wrapper'>
            <div className='cell cell-active'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
          </div>
        </div>
      </div>
      <div className='tutorScheduleSlide__viewAll'>
        <button>Xem tất cả lịch của giáo viên</button>
      </div>
    </div>
  );
};

export default TutorScheduleSlide;
