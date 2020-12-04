import box_style from './box.module.css';

const Box = ({children, style}) => {
    return (
        <aside
            className={box_style.box_container}
            style={style}
        >
            {children}
        </aside>
    )
}

export default Box;