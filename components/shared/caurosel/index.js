import React, {useState, useEffect} from 'react';
import caurosel_style from './caurosel.module.css';



const Caurosel = ({autoSlide, showDot, children}) => {
    const [active, setActive] = useState(0);
    const leftArrow = () => {
        if(active == 0) {
            setActive(children.length - 1);
        }
        else setActive(active-1);
    }

    const rightArrow = () => {
        if(active == children.length-1) {
            setActive(0)
        }
        else setActive(active + 1);
    }
    
    useEffect(() => {
        const auto = setTimeout(() => {
            autoSlide ? rightArrow() : null
        }, autoSlide ? autoSlide : null);

        return () => {
            clearTimeout(auto);
        };
    }, [active]);
    return (
        <aside className={caurosel_style.caurosel_image_container}>
            {children && React.Children.toArray(children).map((image, index) => (
                <div key={index} className={[caurosel_style.caurosel_image, index == active ? caurosel_style.active_image : null].join(" ")} >
                    {image}
                    {image.props.content && <div className={caurosel_style.ontop_heading_image}>{image.props.content}</div>}
                </div>
            ))}
            {  showDot &&          
            <div className={caurosel_style.dot_container}>
                {children && React.Children.toArray(children).map((image, index) => (
                    <div  
                        key={index} 
                        onClick={() => setActive(index)}
                        className={[caurosel_style.caurosel_image_dot, index == active ? caurosel_style.active_image_dot : null].join(" ")}
                    />
                ))}
            </div>
            }
            <div className={[caurosel_style.arrow_button, caurosel_style.left_arrow].join(" ")} onClick={leftArrow}>
                {"<"}
            </div>
            <div className={[caurosel_style.arrow_button, caurosel_style.right_arrow].join(" ")}  onClick={rightArrow}>
                {">"}
            </div>
        </aside>
    )
}

export default Caurosel;