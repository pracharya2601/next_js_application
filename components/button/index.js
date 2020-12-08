import button_styles from './button.module.css'
const Button = ({title, onClick, size, color, outline, loading}) => {
  return (
    <button 
      onClick={onClick} 
      className={[
        button_styles.button,
        button_styles[`size_${size ? size : 'md'}`], 
        button_styles[`color_${color ? color: 'primary'}`],
        button_styles[`type_${outline ? "outline" : 'cover'}`]
      ].join(" ")}
    
    >
      {title}
    </button>
  )
}

export default Button;