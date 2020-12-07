import typography_style from './typography.module.css';

const Typography = (props) => {
    const {children, type, style, ...rest} = props;
    const typo_style = {...style, ...rest};
    switch(type) {
        case "h1":
            return (
                <h1
                    className={[typography_style.h1].join(" ")}
                    style={typo_style}
                >
                    {children}
                </h1>
            )
        case "h2": 
            return (
                <h2 
                    className={[typography_style.h2].join(" ")}
                    style={typo_style}
                >
                    {children}
                </h2>
            )
        case "p": 
            return (
                <p 
                    className={[typography_style.p].join(" ")}
                    style={typo_style}
                >
                    {children}
                </p>
            )
    }

}

export default Typography;