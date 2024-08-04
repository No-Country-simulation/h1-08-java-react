import CardContain from "../atoms/CardContain"

const CardMedication = ({ medication }) => {
    const { name, dose, type, pathology, prescribed_by, amount } = medication

    return (
        <CardContain>

            <div>
                <p className="text-black/50 pb-2 text-xl">
                    Nombre:
                </p>
                <div className="flex items-end border-b-4 pb-3">
                    <h1 className="capitalize text-4xl font-semibold">
                        {name}
                    </h1>
                    <p className="px-2 text-3xl text-black/80">{dose}</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-between mt-5 mb-8">
                <div>
                    <p className="text-black/50 pb-1.5 text-xl">
                        Tipo:
                    </p>
                    <p className="text-2xl capitalize">{type}</p>
                </div>
                <div>
                    <p className="text-black/50 pb-1.5 text-xl">
                        Patología:
                    </p>
                    <p className="text-2xl capitalize">{pathology}</p>
                </div>
                <div>
                    <p className="text-black/50 pb-1.5 text-xl">
                        Recetado por:
                    </p>
                    <p className="text-2xl">{prescribed_by}</p>
                </div>
            </div>

            <p className="text-xl mb-3.5">
                Cantidad de comprimidos:
                <strong className="text-2xl rounded-xl bg-orange/45 px-2.5 py-2 ml-1.5">
                    {amount}
                </strong>
            </p>

        </CardContain>
    )
}

export default CardMedication