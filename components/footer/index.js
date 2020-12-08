import footer_style from './footer.module.css';
const Footer = ({children}) => {
    return (
        <footer className={footer_style.footer}>
            <div>
                change language /change theme goes here
            </div>
            <div>
                Other Item goes here
            </div>
            <div>
                {children}
            </div>
        </footer>
    )
}

export default Footer;