const formInputs = document.forms['userInputs'];
const listInputsForm = formInputs?.elements;

const loginUser = document.getElementById('loginUser');
const loginInfos = document.getElementById('userInfos');

const modalLogin = document.getElementById('login');
const modalUser = modalLogin && new bootstrap.Modal(modalLogin);

const dadosUser = {
  "email": "Bill Gates",
  "password": 123,
  "image": "https://classic.exame.com/wp-content/uploads/2021/02/bill.jpg?quality=70&strip=info&w=1024"
};
// const dadosUser = {};

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

    const corValidateEmail = "linear-gradient(to right, #00b09b, #96c93d)";

    if(!validateEmail) return alerta('Email ou senha incorretos. Bobalhão', corValidateEmail);
    if(!validatePassword) return alerta('Email ou senha incorretos. Bobão');

    // if (validateEmail && validatePassword) {
    drawUserProfile({
      email: dadosUser['email']
    })
    modalUser?.hide();
    // }
  });

function alerta(message, color = '', position = 'right'){
  const toastSettings = {
    text: message,
    duration: 3000,
    close: true,
    gravity: "top",
    position, 
    stopOnFocus: true, 
  }

  if(color) {
    toastSettings['style'] = {
      background: color,
    }
  }

  const toast = Toastify(toastSettings);

  toast.showToast();
}

function drawUserProfile({ email, image }) {
  const existImage = image ? `<img src="${image}" alt="userProfile"/>` : '';

  loginInfos.innerHTML = `
    Olá, ${email}
    ${existImage}
  `;
}

(function init() {
  const { email, password, image } = dadosUser || {}

  const validateEmail = email?.length >= 3;
  const validatePassword = password?.length >= 3;

  // Verifica se tem email e senha se não tiver, ele para a excução.
  if(!validateEmail && !validatePassword) return;

  drawUserProfile({ email, image })
})()