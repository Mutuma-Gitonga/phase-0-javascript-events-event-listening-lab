function addingEventListener() {
  const input = document.querySelector('#button');

  function clickAlert() {
    alert('I was clicked!');
  }

  input.addEventListener('click', clickAlert);
}

addingEventListener();