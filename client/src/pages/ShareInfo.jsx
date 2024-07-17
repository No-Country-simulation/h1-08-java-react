import SectionCard from "../components/molecules/SectionCard"
import infoIcon from "../assets/icons/info.svg"
import qrCode from "../assets/fake-qr.png"
const ShareInfo = () => {
    return (
        <section className="flex flex-col items-center my-5">
            <SectionCard
                sectionName="Compartir"
                sectionIcon={infoIcon}
                altIcon={"info-icon"}
                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur blanditiis libero adipisci obcaecati unde provident quis"}
            />

            <SectionCard
                sectionName="Código QR"
                description="Escanea el siguiente código para compartir tus datos médicos:">
                <div className="text-center">
                    <img src={qrCode} alt="qr-code" className="inline my-5" />
                    <p>CÓDIGO QR...</p>
                </div>
            </SectionCard>
        </section>
    )
}

export default ShareInfo