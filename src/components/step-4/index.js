import { Link } from "react-router-dom";
import store from "../../store";

const Step4 = () => {

    const plan = store.getState().plan.name
    const date = store.getState().plan.date
    const price = store.getState().plan.price
    const services = store.getState().addOns.services
    const total = store.getState().counter.count

    console.log(total)

    return(
        <div className="container mt-5 pt-4" id="content-step4">
            <div className="row">
                <div className="column mb-3 ps-0">
                    <p className="h2 mb-2" id="title-step4">Resumo</p>
                    <p id="subtitle-step4">Verifique se tudo está certo antes de confirmar.</p>
                </div>
                <div className="column mb-3 p-0">
                    <div className="container m-0 p-0" id="card-step4">
                        <div className="d-flex align-items-center justify-content-between" id="first-row">
                            <div className="mt-3 mb-3 pt-1" id="container-text">
                                <h5 className="ms-4 mb-1" id="title-step4">{ `${plan} (${date})` }</h5>
                            </div>
                            <div>
                               <p className="me-4 mt-3" id="price">R${price},00/{date}</p>
                            </div>
                        </div>
                        <hr className="m-0"/>

                        {services.map(item => 
                          <div className="d-flex align-items-center justify-content-between mt-2" id="first-row">
                          <div className="" id="container-text">
                              <h6 className="ms-4" id="subtitle-step4">{item.name}</h6>
                          </div>
                          <div>
                             <p className="me-4 mt-0 pt-1">{date === "Mês" ? `+R$${item.price}/${date}` :  `+R$${item.price}0,00/${date}`}</p>
                          </div>
                          </div>
                            )}
                        
                        <div className="d-flex align-items-center justify-content-between mt-4" id="first-row">
                            <div className="" id="container-text">
                                <h6 className="ms-4" id="title-total">Total (por {date})</h6>
                            </div>
                            <div>
                               <p className="me-4 mt-0 pt-1" id="price-total">R${total}/{date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" id="row-btn-step4">
                <div className="column ps-0">
                    <div className="container d-flex justify-content-between mt-0 ps-1">
                        <div class="mt-0 pt-1">
                            <Link to="/add-ons">
                                <button type="button" class="btn btn-outline-primary">Voltar</button>
                            </Link>
                        </div>
                        <div class="mt-0 pt-1">
                            <Link to="/thanks">
                                <button class="btn btn-primary" type="button">Confirmar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step4;