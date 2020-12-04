import avatar_style from './avatar.module.css';
import Image from 'next/image';

const Avatar = ({src, alt, size}) => {
    return (
        <div>
            <Image
                src={src}
                alt={alt}
                height={size}
                width={size}
                className={avatar_style.circle_image_avatar}
            />
        </div>

    )
}

export default Avatar;