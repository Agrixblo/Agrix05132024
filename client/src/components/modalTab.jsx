function ModalTab ({closeModal}) {
    return (
        <>
            <div className="modalBackground">
                <div className="modalContainer">
                    <button onClick={() => closeModal(false)} id="canc" type="submit">X</button>
                    <div className="title">
                        <h1>Moola</h1>
                        <p>Once I have a look at the different patterns and colours you have, I will let you know the ones for which you can send me samples. I will meet you in person to discuss the final pricing and the quantity of different fabrics I need. Feel free to contact me in case of any questions.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalTab