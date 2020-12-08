import loading_style from './loading.module.css'

const Loading = (props) => {
    const {type, size, ...rest} = props;
    const style = {...rest, height: `${size}px`, width: `${size}px`};
    switch(type) {
        case spinner: 
            return (
                <div 
                    className={loading_style.spinner}
                    style={style}
                >
                    <div></div>
                    <div></div>
                </div>
            )
        case bouncingball:
            return (
                <div
                    className={loading_style.bouncer}
                    style={style}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )
        default:
            return null
    }
}

export default Loading;

const spinner = "spinner";
const bouncingball = "bouncingball";