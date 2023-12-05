import s from './Button.module.css'

function Button({ text, color, onClick }) {
    return (
      <button className={`${s.button} ${s[color]}`} onClick={onClick}>
        {text}
      </button>
    );
  }
  
  export default Button;
