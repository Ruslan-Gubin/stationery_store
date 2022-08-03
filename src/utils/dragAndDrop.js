function dragdrop(elemId) {
  let elem = document.getElementById(elemId);
  elem.onmousedown = function(event) {
    let shiftX = event.clientX - elem.getBoundingClientRect().left;
    let shiftY = event.clientY - elem.getBoundingClientRect().top;
    
    elem.style.position = 'absolute';
    elem.style.zIndex = 1000;
    document.body.append(elem);
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
      elem.style.left = pageX - shiftX + 'px';
    elem.style.top = pageY - shiftY + 'px';
}
function onMouseMove(event) {
  moveAt(event.pageX, event.pageY);
}
document.addEventListener('mousemove', onMouseMove);
elem.onmouseup = function() {
  document.removeEventListener('mousemove', onMouseMove);
  elem.onmouseup = null;
};
};
elem.ondragstart = function() {
return false;
}
}

export default dragdrop;

// class="droppable"  устанавливаем на елемент