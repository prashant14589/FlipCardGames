import React from "react";
interface ButtonProps {
    children?: React.ReactNode;
    clickHandler?: () => void; // my custom prop
}
const Randomizer = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    

return  (
    <>
    <button ref= {ref} type="button" className="FancyButton" onClick = {props.clickHandler}>
    {props.children}   
  </button>
  </>
  );
});
  export default Randomizer;