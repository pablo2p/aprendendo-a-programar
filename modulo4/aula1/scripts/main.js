const formInputs = document.forms['userInputs'];
const listInputsForm = formInputs?.elements;
const loginUser = document.getElementById('loginUser');
const loginInfos = document.getElementById('userInfos');

const modalLogin = document.getElementById('login');
const modalUser = modalLogin && new bootstrap.Modal(modalLogin);

const dadosUser = {};

listInputsForm &&
  Object.values(listInputsForm)?.forEach((input) => {
    input.addEventListener('keyup', function (e) {
      const type = e.target.type;
      const value = e.target.value;

      dadosUser[type] = value;
    });
  });

loginUser &&
  loginUser.addEventListener('click', function () {
    const validateEmail = dadosUser?.['email']?.length >= 3;
    const validatePassword = dadosUser?.['password']?.length >= 3;

    if (validateEmail && validatePassword) {
      loginInfos.innerHTML = `
            Olá, ${dadosUser['email']}
        `;
      modalUser?.hide();
    }
  });
