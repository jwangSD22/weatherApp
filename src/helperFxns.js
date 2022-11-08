let toggleOn = function () {
    let getEle = document.querySelectorAll(".toggle");
    getEle.forEach((e) => {e.style.display = "flex"; e.style.opacity = "1";e.style.transition="opacity 0.5s ease-in-out"});
  };

  let toggleOff = function () {
    let getEle = document.querySelectorAll(".toggle");
    getEle.forEach((e) => {e.style.display = "none"});;
  };
  
  function resetField() {
    while (display.firstChild) {
      display.removeChild(display.firstChild);
    }
    submitButton.style.display = "flex";
    
    queryForm.reset();
  }

  function resetToggle() {
    resetField();
    toggleOff();
  }
  
  export {toggleOff,toggleOn,resetField,resetToggle}