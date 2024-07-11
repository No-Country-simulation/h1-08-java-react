
const Footer = () => {
    return (
        //  text-neutral-content
        <footer className="footer shadow-orange footer-center bg-transparent shadow-sm shadow-orange p-4">
            <div>
                <img src="/logo-text.webp" alt="Justina.io Logo" className="h-20"/>
            </div>

            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
    )
}

export default Footer