import { useState } from "react"
import CardContain from "../atoms/CardContain"
import SubmitButton from "../atoms/SubmitButton"
import { Link } from "wouter"
const CardDose = ({ totalAmount, frequency }) => {
    const [fakeAmount, setFakeAmount] = useState(totalAmount / 2)

    const percentage = Math.round((fakeAmount / totalAmount) * 100)
    const onTaking = () => {
        if (fakeAmount < totalAmount) {
            setFakeAmount(fakeAmount + 1)
        }
    }

    return (
        <CardContain>
            <div>
                <h2 className="capitalize text-4xl font-semibold">
                    Dosis
                </h2>

                <div className="radial-progress text-secondary absolute right-5 top-6" style={{ "--value": percentage }} role="progressbar">
                    {percentage}%
                </div>
            </div>

            <div className="mt-6 mb-7 flex flex-col gap-6">
                <p className="text-xl">
                    <strong className="text-2xl rounded-xl bg-orange/45 px-2.5 py-2">
                        1
                    </strong>  Cada
                    <strong className="text-2xl rounded-xl bg-orange/45 px-2.5 py-2 ml-2">
                        {frequency}
                    </strong> Hs.
                </p>

                <p className="text-xl">
                    Llevas
                    <strong className="text-2xl rounded-xl bg-orange/45 px-2.5 py-2 ml-2">
                        {fakeAmount}
                    </strong>
                    dosis de
                    <strong className="text-2xl rounded-xl bg-orange/45 px-2.5 py-2 ml-2">
                        {totalAmount}
                    </strong>.
                </p>

                <p className="text-xl">
                    Quedan
                    <strong className="text-2xl rounded-xl bg-orange/45 px-2.5 py-2 ml-2">
                        {totalAmount - fakeAmount}
                    </strong>
                    comprimidos.
                </p>
            </div>

            <div>
                <SubmitButton onClick={onTaking} addClassName={`w-full font-normal text-xl ${fakeAmount == totalAmount && "btn-disabled"}`}>
                    {
                        fakeAmount == totalAmount
                            ? "terminado"
                            : "tomar dosis"
                    }
                </SubmitButton>
                <Link href="#" className={"btn btn-outline btn-secondary w-full font-normal text-xl mt-2.5"}>
                    Ir a Calendario
                </Link>
            </div>
        </CardContain>
    )
}

export default CardDose