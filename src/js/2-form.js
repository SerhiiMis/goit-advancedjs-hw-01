const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

window.addEventListener('DOMContentLoaded', () => {
  const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (saveData) {
    formData.email = saveData.email || '';
    formData.message = saveData.message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
});

form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});
