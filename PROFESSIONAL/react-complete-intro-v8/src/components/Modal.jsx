import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  /* 
    useRef do not trigges a re-render but its value  
    is remembered between renders
    */

  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  /*  
    I do useRef(null) for performace reasons, beacause
    document.createElement() is evaluated and the result
    is simply ignored.
    */

  useEffect(renderModalOnMount, []);

  return createPortal(children, elRef.current);

  function renderModalOnMount() {
    console.log(elRef.current);
    const modalContainer = document.getElementById("modal");
    modalContainer.appendChild(elRef.current);

    return function removeModalFromUI() {
      modalContainer.removeChild(elRef.current);
    };
  }
}

export default Modal;
