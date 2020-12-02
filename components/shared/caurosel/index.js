import {useState} from 'react';
import caurosel_style from './caurosel.module.css';
import Image from 'next/image';



const Caurosel = () => {
    const [active, setActive] = useState(0);
    const imgs = [
        {src: "/image_1.jpg"},
        {src: "/image_2.jpg"},
        {src: "/image_3.webp"},
    ]
    const leftArrow = () => {
        if(active == 0) {
            setActive(imgs.length - 1);
        }
        else setActive(active-1);
    }

    const rightArrow = () => {
        if(active == imgs.length-1) {
            setActive(0)
        }
        else setActive(active + 1);
    }

    return (
        <aside className={caurosel_style.caurosel_image_container}>
            {imgs.map((img, index) => (
                <div className={[caurosel_style.caurosel_image, index == active ? caurosel_style.active_image : null].join(" ")} key={img.src}>
                <img
                    src={img.src}
                    alt="image"
                    height="100%"
                    width="100%"
                    style={{objectFit: 'cover', zIndex: 200}}
                />
                </div>
            ))}
            <button onClick={leftArrow}>
                left
            </button>
            <button onClick={rightArrow}>
                right
            </button>

        </aside>
    )
}

export default Caurosel;