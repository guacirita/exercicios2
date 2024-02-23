/* 10. Crie uma função que valide se uma senha atende aos critérios estabelecidos, 
 como ter no mínimo 8 caracteres, pelo menos uma letra maiúscula, 
 pelo menos uma letra minúscula e pelo menos um caractere especial. */


function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }
  if (!/[!@#$%^&*]/.test(password)) {
    return false;
  }
  return true;
}

console.log(validatePassword("*3LinDAs"));