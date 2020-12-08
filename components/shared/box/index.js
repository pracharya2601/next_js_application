import box_style from './box.module.css';

const Box = (props) => {
    const {children, style, ...rest} = props;
    const boxStyle = {...style, ...rest};
    return (
        <aside
            className={box_style.box_container}
            style={boxStyle}
        >
            {children}
        </aside>
    )
}

export default Box;