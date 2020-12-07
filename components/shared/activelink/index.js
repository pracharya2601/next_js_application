import Link from 'next/link'

const ActiveLink = ({children, href}) => {

    return (
        <Link href={href}>
            <a>{children}</a>
        </Link>
    )
}

export default ActiveLink;