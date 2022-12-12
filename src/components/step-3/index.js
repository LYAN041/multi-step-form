import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import store from "../../store";
import { addService } from "../../redux/add-ons-slice/addOnsSlice";
import { addCounter } from "../../redux/counter-slice/counterSlice";
import { useDispatch } from "react-redux";

const Step3 = () => {

    const dispatch = useDispatch();

    const date = store.getState().plan.date

    const [cards, setCards] = useState([]);
    
    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();
    const [input3, setInput3] = useState();

    const card1Ref = useRef();
    const card2Ref = useRef();
    const card3Ref = useRef();

    let service = {
        id: "service",
        name: "Serviço online",
        price: 5
    }

    let storage = {
        id: "storage",
        name: "Armazenamento extra",
        price: 9
    }

    let profile = {
        id: "profile",
        name: "Perfil customizavel",
        price: 9
    }

    const cardSelected = (element) => {
        if(cards.findIndex((item) => item.id === element) === -1){
            if(element === "service"){
                setCards([...cards, service])
                dispatchCounter(5)
            } else if(element === "storage"){
                setCards([...cards, storage])
                dispatchCounter(9)
            } else if(element === "profile"){
                setCards([...cards, profile])
                dispatchCounter(9)
            }
        }
        dispatch(addService(cards))
        setInputs() 
    }

    const setInputs = () => {
        setInput1(card1Ref.current.checked);
        setInput2(card2Ref.current.checked);
        setInput3(card3Ref.current.checked); 
    }

    const dispatchCounter = (num) => {
        if(date === "Mês") {
            dispatch(addCounter(num))
        } else {
            dispatch(addCounter(num * 10))
        }
    }

    return (
        <div className="container mt-5 pt-4" id="content-step3">
            <div className="row">
                <div className="column mb-3 ps-0">
                    <p className="h2 mb-2" id="title-step3">Escolha os Add-ons</p>
                    <p id="subtitle-step3">Os Add-ons ajudam a aprimorar sua experiência de jogo.</p>
                </div>
                <div className="column mb-3">
                    <div className="row flex-column">
                        <label className="p-0">
                        <div class="card me-3 mb-3 d-flex flex-row align-items-center" onClick={() => cardSelected("service")} id={input1 === true ? "card-step3-confirm" : "card-step3"}>
                            <div class="form-check ms-3">
                                <input class="form-check-input" ref={card1Ref} type="checkbox" value="" id="flexCheckChecked" />
                            </div>
                            <div class="card-body d-flex flex-column justify-content-end ps-2 mt-1 ms-2">
                                <h5 class="card-title pt-1">Serviço online</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Acesso a jogos multiplayer.</h6>
                            </div>
                            <div className="pt-1 me-3">
                                <h6>{date === "Mês" ? "+R$5,00/mês" : "+R$50,00/ano"}</h6>
                            </div>
                        </div>
                        </label>
                        <label className="p-0">
                        <div class="card me-3 mb-3 d-flex flex-row align-items-center" onClick={() => cardSelected("storage")} id={input2 === true ? "card-step3-confirm" : "card-step3"}>
                            <div class="form-check ms-3">
                                <input class="form-check-input" ref={card2Ref} type="checkbox" value="" id="flexCheckChecked" />
                            </div>
                            <div class="card-body d-flex flex-column justify-content-end ps-2 mt-1 ms-2">
                                <h5 class="card-title pt-1">Armazenamento extra</h5>
                                <h6 class="card-subtitle mb-2 text-muted">1 TB extra de armazenamento na nuvem.</h6>
                            </div>
                            <div className="pt-1 me-3">
                                <h6>{date === "Mês" ? "+R$9,00/mês" : "+R$90,00/ano"}</h6>
                            </div>
                        </div>
                        </label>
                        <label className="p-0">
                        <div class="card me-3 mb-3 d-flex flex-row align-items-center" onClick={() => cardSelected("profile")} id={input3 === true ? "card-step3-confirm" : "card-step3"}>
                            <div class="form-check ms-3">
                                <input class="form-check-input" ref={card3Ref} type="checkbox" value="" id="flexCheckChecked" />
                            </div>
                            <div class="card-body d-flex flex-column justify-content-end ps-2 mt-1 ms-2">
                                <h5 class="card-title pt-1">Perfil customizavel</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Tema personalizado para o seu perfil.</h6>
                            </div>
                            <div className="pt-1 me-3">
                                <h6>{date === "Mês" ? "+R$9,00/mês" : "+R$90,00/ano"}</h6>
                            </div>
                        </div>
                        </label>
                        
                    </div>
                </div>
            </div>
            <div className="row" id="row-btn-step3">
                <div className="column ps-0">
                    <div className="container d-flex justify-content-between mt-2 ps-1">
                        <div class="mt-5 pt-2">
                            <Link to="/plan">
                                <button type="button" class="btn btn-outline-primary">Voltar</button>
                            </Link>
                        </div>
                        <div class="mt-5 pt-2">
                            <Link to="/summary">
                                <button class="btn btn-primary" type="button">Próximo</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step3;