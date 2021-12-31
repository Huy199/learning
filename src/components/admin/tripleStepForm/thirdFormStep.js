import { useRef, useState } from 'react';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { CustomCalendar } from '../../common/calendar/customCalendar';
import { useOutside } from '../../../utils/help';

const ThirdFormStep = ({ handleClickBack, handleOnSubmit, handleClickCancel, step }) => {
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const changeDateStart = ({ date }) => {
    setDateStart(date);
  };

  const changeDateEnd = ({ date }) => {
    setDateEnd(date);
  };

  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [languagesList, setLanguagesList] = useState([
    {
      id: 1,
      name: 'Tiếng Việt',
      text: 'VI',
    },
    {
      id: 2,
      name: 'Tiếng Nhật',
      text: 'JP',
    },
    {
      id: 3,
      name: 'Tiếng Anh',
      text: 'EN',
    },
  ]);

  const dropdownRef = useRef();
  useOutside(dropdownRef, setIsOpenLanguage);
  return (
    <div className='formInfo__body '>
      <div className='formInfo__scroll grid grid-cols-2 '>
        {/* Name Field */}
        <div>
          <div className='certificate__header mb-5'>
            <h1 className='font-bold'>Thông tin bổ sung (tuỳ chọn):</h1>
          </div>
          <div className='grid grid-cols-2'>
            <div className='formInfo__nameField mr-2'>
              <label htmlFor='rate' className='formInfo__label'>
                Giá theo giờ
              </label>
              <input name='rate' id='rate' type='text' className='formInfo__input formInfo__inputStyle' />
            </div>

            <div className='formInfo__nameField w-3/4 relative' ref={dropdownRef}>
              <label htmlFor='speakIn' className='formInfo__label mb-1 block'>
                Ngôn ngữ
              </label>
              <div className='checkbox-dropdown' onClick={() => setIsOpenLanguage(!isOpenLanguage)}>
                <h3>Chọn ngôn ngữ</h3>
              </div>
              {isOpenLanguage && (
                <ul className='language-dropdown__wrapper'>
                  {languagesList.map((language) => (
                    <li className='language-dropdown__item language-dropdown__item-border flex items-center'>
                      <input
                        type='checkbox'
                        className='mt-1 mr-5 cursor-pointer'
                        id={language.text}
                        name={language.text}
                      />
                      <label htmlFor={language.text} className='cursor-pointer'>
                        {language.name}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className='formInfo__nameField ml-2 w-f'>
            <label htmlFor='desc' className='formInfo__label'>
              Mô tả
            </label>
            {/* <input name='desc' id='desc' type='text' className='formInfo__input formInfo__inputStyle' /> */}
            <textarea name='desc' id='desc' cols='25' rows='5' className='formInfo__textarea'></textarea>
          </div>
        </div>

        <div className='certificateForm '>
          <div className='certificate__header mb-5'>
            <h1 className='font-bold'>Chứng chỉ (tuỳ chọn):</h1>
          </div>
          <div className='grid grid-cols-2'>
            <div className='formInfo__nameField w-3/5 mr-2'>
              <label htmlFor='certificateName' className='formInfo__label'>
                Tên chứng chỉ
              </label>
              <input
                name='certificateName'
                id='certificateName'
                type='text'
                className='formInfo__input formInfo__inputStyle'
              />
            </div>
            <div className=''>
              <div className='formInfo__nameField w-1/5 mr-2 '>
                <label htmlFor='certificateImage' className='formInfo__label mb-2' style={{ width: '180px' }}>
                  Ảnh chứng chỉ
                </label>
                <div class='button-wrapper'>
                  <span class='label'>Tải ảnh lên</span>
                  <input type='file' name='upload' id='upload' class='upload-box' placeholder='Upload File' />
                </div>
              </div>
            </div>
          </div>

          <div className='formInfo__nameField ml-2 w-4/5'>
            <label htmlFor='certificateDesc' className='formInfo__label'>
              Mô tả
            </label>
            {/* <input
              name='certificateDesc'
              id='certificateDesc'
              type='text'
              className='formInfo__input formInfo__inputStyle'
            /> */}
            <textarea name='desc' id='desc' cols='25' rows='5' className='formInfo__textarea'></textarea>
            {/* <textarea
                name='certificateDesc'
                id='certificateDesc'
                cols='25'
                rows='3'
                className='formInfo__textarea'
              ></textarea> */}
          </div>
        </div>
      </div>

      {/* button */}
      <div className='formInfo__btn'>
        <button className='formInfo__btn-left' onClick={handleClickCancel}>
          Thoát
        </button>
        <div className='formInfo__btn-right'>
          {step > 1 && (
            <button className='formInfo__btn-cancel' onClick={handleClickBack}>
              Quay lại
            </button>
          )}
          <button className='formInfo__btn-next' onClick={handleOnSubmit}>
            {step === 3 ? 'Lưu' : 'Tiếp'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdFormStep;
