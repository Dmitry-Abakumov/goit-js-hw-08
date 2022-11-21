import { throttle } from 'lodash';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const onSubmitForm = e => {
  e.preventDefault();
  refs.form.reset();
  console.log(JSON.parse(window.localStorage.getItem('feedback-form-state')));
  window.localStorage.removeItem('feedback-form-state');
};

const onInputForm = e => {
  const formData = {
    email: e.target.closest('.feedback-form').email.value,
    message: e.target.closest('.feedback-form').message.value,
  };

  window.localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const addsDataToForm = () => {
  const emailInput = refs.form.elements.email;
  const messageTextArea = refs.form.elements.message;
  const localStorage = JSON.parse(
    window.localStorage.getItem('feedback-form-state')
  );

  if (localStorage) {
    emailInput.value = localStorage.email;
    messageTextArea.value = localStorage.message;
  }
};

addsDataToForm();

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onSubmitForm);
