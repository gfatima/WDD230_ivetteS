const button = document.querySelector('button');

const list = document.querySelector('ul');

const alert_container = document.querySelector('main');

let add = () => {
  const li = document.createElement('li');
  li.innerHTML = `
      <b>${document.querySelector('#favchap').value}</b>
      <a href="#" class="btn btn-danger btn-sm delete" >X</a>
      `;
  
  list.appendChild(li);
  document.querySelector('#favchap').value = "";
  document.querySelector('#favchap').focus();

  li.addEventListener('click', (e) => {
    li.remove(e.target);
  });

}

button.addEventListener('click', () => {
  const input = document.querySelector('#favchap').value;
  if (input === "") {
    const alert = document.createElement('div');
    alert.innerHTML = `
        <div class="alert">Please enter a chapter of The Book of Mormon</div>
        `;
    // Append the row to the list
    alert_container.appendChild(alert);
    document.querySelector('#favchap').focus();
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  } else {
    add();
  }
});