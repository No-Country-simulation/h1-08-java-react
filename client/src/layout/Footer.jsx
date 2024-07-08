
const Footer = () => {
    return (
        <footer className="footer footer-center bg-neutral text-neutral-content p-4">
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