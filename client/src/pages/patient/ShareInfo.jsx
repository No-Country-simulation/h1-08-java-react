import SectionCard from "../../components/molecules/SectionCard"
import { launch } from "../../assets"
import qrCode from "../../assets/fake-qr.png"
const ShareInfo = () => {
    return (
        <section className="flex flex-col items-center my-5">
            <SectionCard
                sectionName="Compartir"
                sectionIcon={launch}
                altIcon={"share-icon"}
                sizesIcon={{ width: 32, height: 32 }}
                description={"Aquí podrás compartir y enlazar tus datos de salud con tu médico de cabecera de confianza."}
            />

            <SectionCard
                sectionName="QR"
                description="Comparte tu QR o token con tu médico de confianza.">
                <div className="text-center">
                    <img src={qrCode} alt="qr-code" className="inline my-5 w-52 h-52 rounded-2xl" />
                    <p className="text-lg">1234-5678-90123</p>
                </div>
            </SectionCard>
        </section>
    )
}

export default ShareInfo