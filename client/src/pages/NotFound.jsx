import SectionCard from "../components/molecules/SectionCard"
import error from "../assets/icons/error.svg"
import { Link } from 'wouter'

const NotFound = () => {
    return (
        <div className="w-fit mx-auto">
            <SectionCard
                sectionName={"404 Not Found"}
                description={"This page could not be found."}
                sectionIcon={error}
                altIcon={"404"}
            />

            <div className="my-5 text-center">
                <Link href="/" className="link text-lg hover:text-fucsia">
                    Volver al inicio
                </Link>
            </div>
        </div>

    )
}

export default NotFound