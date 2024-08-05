import { useEffect, useState } from "react"
import useLanguage from "../../../../hooks/useLanguage"
import HeaderClinicalHistory from "../../../../components/molecules/HeaderClinicalHistory"
import ProfileForm from "../../../../components/molecules/ProfileForm"
import SectionCollapse from "../../../../components/atoms/SectionCollapse"
import CardLink from "../../../../components/atoms/CardLink"
import { ReportsAndResults } from "../../../patient"
import VaccinesModal from "../../../../components/organisms/VaccinesModal"
import HealthDataModal from "../../../../components/organisms/HealthDataModal"
import { fakePatient as fakeUser } from "../../../../data/fake_user"
import TreatmentsModal from "../../../../components/organisms/TreatmentsModal"

const healtData = [
    { className: "is-disabled", es: "diagnóstico", en: "diagnostic", onClick: () => { } },
    { es: "tratamiento", en: "treatment", onClick: () => { document.getElementById('treatments_modal').showModal() } },
    { es: "vacunas", en: "vaccines", onClick: () => document.getElementById('vaccines_modal').showModal() },
    { className: "is-disabled", es: "carnet", en: "card", onClick: () => { } },
    { es: "datos importantes", en: "important information", onClick: () => document.getElementById('health_modal').showModal() },
]

const DetailMedicalHistory = ({ id }) => {
    const [user, setUser] = useState(null)
    const [medicalHistory, setMedicalHistory] = useState(null)
    const lang = useLanguage()

    // const textStatic = (lang === "es" ? " De " : " Of ") + fakeUser.name
    useEffect(() => {
        const getData = async () => {

        }

        getData()
    }, [id])


    return (
        <section className="w-11/12 min-w-[350px] mx-auto mt-6 mb-12 py-6">


            <HeaderClinicalHistory user={fakeUser} />


            <ProfileForm
                isDisabled={true}
                userData={fakeUser}
                isStatic
            //       textStatic={textStatic}
            />

            <SectionCollapse
                className={"mt-[-.5rem] mb-9 mx-auto md:w-fit w-11/12"}
                isStatic={true}
                //text={textStatic} 
                title={lang === "es" ? "Datos De Salud" : "Health Data"}
            >
                <div className="flex flex-wrap justify-center md:justify-normal gap-4 my-5">
                    {healtData.map((item, i) =>
                        <CardLink key={i} title={lang === "es" ? item.es : item.en} onClick={item.onClick} width={"w-4/5 sm:w-[calc(95%/2)] md:w-[calc(95%/3)]"} clasName={item.className ?? ""} />
                    )}
                </div>
            </SectionCollapse>


            <SectionCollapse
                className={"mx-auto md:w-full w-11/12"}
                isStatic={true}
                title={lang === "es" ? "Historial Médico" : "Medical History"}
            // text={textStatic} 
            >
                <ReportsAndResults className={"w-full"} />
            </SectionCollapse>
            <VaccinesModal />
            <HealthDataModal />
            <TreatmentsModal />
        </section >
    )
}

export default DetailMedicalHistory