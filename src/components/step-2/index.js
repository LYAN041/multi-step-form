import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { addName, addDate, addPrice } from "../../redux/plan-slice/planSlice";
import { addCounter } from "../../redux/counter-slice/counterSlice";

const Step2 = () => {

    const dispatch = useDispatch();

    const [select, setSelect] = useState(false)
    const [card, setCard] = useState("")
    const [price, setPrice] = useState()

    const switchRef = useRef();

    const handleChange = () => {
        const inputElement = switchRef.current;
        setSelect(inputElement.checked)
    }

    const cardValues = (card, price) => {
        setCard(card)
        setPrice(price)
    }

    const addStore = () => {
        if(select === false){
            dispatch(addName(card))
            dispatch(addDate("Mês"))
            dispatch(addPrice(price))
            dispatch(addCounter(price))
        } else {
            dispatch(addName(card))
            dispatch(addDate("Ano"))
            dispatch(addPrice(price * 11))
            dispatch(addCounter(price * 11))
        }

    }

    console.log(card)

    return (
        <div className="container mt-5 pt-4" id="content-step2">
            <div className="row">
                <div className="column mb-3 ps-0">
                    <p className="h2 mb-2" id="title-step2">Selecione um plano</p>
                    <p id="subtitle-step2">Você tem a opção de cobrança mensal ou anual.</p>
                </div>
                <div className="column mb-3">
                    <div className="row">
                        <div class="card me-3" onClick={() => cardValues("Arcade", 30)} id={card === "Arcade" ? "card-confirm" : "card"}>
                            <svg className="mt-4 ms-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E" /><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z" /></g></svg>
                            <div class="card-body d-flex flex-column justify-content-end ps-2">
                                <h5 class="card-title">Arcade</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{select === false ? "R$30,00/mês" : "R$330,00/ano"}</h6>
                            </div>
                        </div>
                        <div class="card me-3" onClick={() => cardValues("Advanced", 50)} id={card === "Advanced" ? "card-confirm" : "card"}>
                            <svg className="mt-4 ms-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E" /><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z" /></g></svg>
                            <div class="card-body d-flex flex-column justify-content-end ps-2">
                                <h5 class="card-title">Advanced</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{select === false ? "R$50,00/mês" : "R$550,00/ano"}</h6>
                            </div>
                        </div>
                        <div class="card" onClick={() => cardValues("Pro", 70)} id={card === "Pro" ? "card-confirm" : "card"}>
                            <svg className="mt-4 ms-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF" /><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z" /></g></svg>
                            <div class="card-body d-flex flex-column justify-content-end ps-2">
                                <h5 class="card-title">Pro</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{select === false ? "R$70,00/mês" : "R$770,00/ano"}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="container-step2 d-flex justify-content-center align-items-center">
                    <div className="column mt-1 me-2">
                        <h6 id="switch-text">mês</h6>
                    </div>
                    <div className="column mx-1">
                        <div class="form-check form-switch">
                            <input class="form-check-input" onClick={handleChange} ref={switchRef} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                        </div>
                    </div>
                    <div className="column mt-1">
                        <h6 id="switch-text">ano</h6>
                    </div>
                </div>
            </div>
            <div className="row" id="row-btn">
                <div className="column ps-0">
                    <div className="container d-flex justify-content-between mt-5 ps-1">
                        <div class="mt-5">
                            <Link to="/">
                                <button type="button" class="btn btn-outline-primary">Voltar</button>
                            </Link>
                        </div>
                        <div class="mt-5">
                            <Link to={card === "" ? "/plan" : "/add-ons"}>
                                <button class="btn btn-primary" onClick={addStore} type="button">Próximo</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step2;