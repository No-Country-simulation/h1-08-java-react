import CardContain from "../atoms/CardContain"
import CloseButton from "../atoms/CloseButton"

const CardMedication = ({ medication, isRecipe, onClick, isStudy }) => {
    const { name, dose, type, pathology, prescribed_by, amount, info } = medication

    return (
        <CardContain>

            <div>
                {!isStudy && (<>
                    <p className="text-black/50 pb-2 text-xl">
                        Nombre:
                    </p>
                    <div className="flex items-end border-b-4 pb-3">
                        <h1 className="capitalize text-4xl font-semibold">
                            {name}
                        </h1>
                        <p className="px-2 text-3xl text-black/80">{dose}</p>
                    </div>
                </>)}

                {
                    isRecipe && <CloseButton onClick={onClick} />
                }
            </div>

            <div className={`flex flex-wrap gap-5 justify-between ${!isRecipe ? "mt-5 mb-8" : "mt-2"}`}>
                <div>
                    <p className="text-black/50 pb-1.5 text-xl">
                        Tipo:
                    </p>
                    <p className="text-2xl capitalize">{type}</p>
                </div>
                {!isRecipe && !isStudy &&
                    (<>
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
                    </>)}
                {isStudy && <div>
                    <p className="text-black/50 pb-1.5 text-xl">
                        Informe:
                    </p>
                    <p className="text-2xl capitalize">{info}</p>
                </div>}
            </div>
            {
                !isStudy &&
                <p className={`text-xl ${!isRecipe ? "mb-3.5" : "mt-1"}`}>
                    Cantidad de comprimidos:
                    <strong className="text-2xl rounded-xl bg-orange/45 px-2.5 py-2 ml-1.5">
                        {amount}
                    </strong>
                </p>
            }

        </CardContain>
    )
}

export default CardMedication