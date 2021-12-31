import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formCreateAction, selectFormCreateComponent, selectFormCreateStep } from '../../../../features/form/from';
import { FormComponentName } from '../../../../utils/enum';
import { modalActions } from '../../../../features/modal/modal';
import StepBar from '../../../common/stepBar';
import { Steps } from '../../../../utils/enum';
import AddFirstFormStep from '../firstFormStep';
import AddSecondFormStep from '../secondFormStep';
import AddThirdFormStep from '../thirdFormStep';
import '../adminForm.css';
import { useHistory } from 'react-router-dom';

const CreateForm = ({ student }) => {
  const dispatch = useDispatch();
  const step = useSelector(selectFormCreateStep);
  const component = useSelector(selectFormCreateComponent);
  console.log('component: ', component);
  const history = useHistory();
  const handleClickCancel = (e) => {
    history.push('/admin/tutors');
    dispatch(formCreateAction.resetFormData());
  };
  const handleClickBack = () => {
    dispatch(
      formCreateAction.changeStepAndComponent({
        step: step - 1,
        component: FormComponentName[`FORM_${Steps[step - 2]}_STEP`],
      })
    );
  };

  const handleSubmit = () => {
    if (step < 3)
      dispatch(
        formCreateAction.changeStepAndComponent({
          step: step + 1,
          component: FormComponentName[`FORM_${Steps[step]}_STEP`],
        })
      );
  };

  console.log('step', step);
  const formComponent = {
    FORM_FIRST_STEP: (
      <AddFirstFormStep step={step} handleOnSubmit={handleSubmit} handleClickCancel={handleClickCancel} />
    ),
    FORM_SECOND_STEP: (
      <AddSecondFormStep
        step={step}
        handleOnSubmit={handleSubmit}
        handleClickCancel={handleClickCancel}
        handleClickBack={handleClickBack}
      />
    ),
    FORM_THIRD_STEP: (
      <AddThirdFormStep
        step={step}
        handleOnSubmit={handleSubmit}
        handleClickCancel={handleClickCancel}
        handleClickBack={handleClickBack}
      />
    ),
  };
  return (
    <div className='adminForm__container' onClick={(e) => e.stopPropagation()}>
      <div className='adminForm__header'>
        <div className='adminForm__progressBar'>
          <StepBar step={step} />
        </div>
        <h3 className='adminForm__title'> {student ? 'Thêm học sinh mới' : 'Thêm giáo viên mới'}</h3>
      </div>
      <div className='adminForm__body'>{formComponent[component]}</div>
    </div>
  );
};

export default CreateForm;
