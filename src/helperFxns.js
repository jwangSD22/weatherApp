let toggleOn = function () {
    let getEle = document.querySelectorAll(".toggle");
    getEle.forEach((e) => {e.style.display = "flex"});
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