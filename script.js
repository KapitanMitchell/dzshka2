document.addEventListener('DOMContentLoaded', function () {
    const box = document.getElementById('box');
  

    function moveBox(event) {
      box.style.left = `${event.clientX - box.offsetWidth / 2}px`;
      box.style.top = `${event.clientY - box.offsetHeight / 2}px`;
    }
  

    const debouncedMoveBox = _.debounce(moveBox, 100); 
  

    document.addEventListener('mousemove', debouncedMoveBox);
  });