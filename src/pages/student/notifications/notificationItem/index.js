import './notificationItem.css';

const NotificationItem = ({ item }) => {
  return (
    <>
      <div className='notify__item-container'>
        {/*notification item*/}
        <div className='notify__item'>
          <div className='notify__item-avatar'>
            <div className='notify__item-img'>
              <img src={item.avatar} className='notify__item-img' alt='icon' />
            </div>
          </div>
          <div className='notify__item-content'>
            <div className='notify__item-header'>
              <span className='notify__item-title'>{item.title}</span>
              <span className='notify__item-time'>{item.time}</span>
            </div>
            <span className='notify__item-text'> {!item.isSeen ? 'Bạn có 1 tin nhắn chưa đọc' : ''}</span>
          </div>
        </div>
        {/*notification item*/}
      </div>
    </>
  );
};

export default NotificationItem;
