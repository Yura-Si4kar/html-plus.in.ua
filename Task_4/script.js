let userNameP = '<div class="input_text">';
let userNameList = '<ol class="input_list">';

getName();

function getName() {
  for(let i=0; i<4; i++) {
    let userName = prompt('Enter your name!');
    userNameP += `<p>${userName}</p>`;
    userNameList += `<li>${userName}</li>`;
  }
  
  userNameP += '</div>'
  userNameList += '</ol>';

  document.write(userNameP);
  document.write(userNameList);
}