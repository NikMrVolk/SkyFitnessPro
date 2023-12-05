import s from '../../../styles/components/UI/button/Button.module.css'

function Button({ text, color, onClick }) {
    return (
      <button className={`${s.button} ${s[color]}`} onClick={onClick}>
        {text}
      </button>
    );
  }
  
  export default Button;
