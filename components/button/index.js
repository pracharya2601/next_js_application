const Button = ({title, custonclass, onClick}) => {
  return (
    <button className={`button ${custonclass}`} onClick={onClick} >
      {title}
      <style jsx>
        {
          `
          .button {
            padding: 10px 20px;
            font-size: 18px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            position: relative;
          }
          .button:hover {
            opacity: 0.7;
          }
          .button:focus {
            outline: none;
            box-shadow: none;
          }
          `
        }
      </style>
    </button>
  )
}

export default Button;