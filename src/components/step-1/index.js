import { Link } from "react-router-dom";

const Step1 = () => {

    return (
        <div className="container mt-5 pt-4" id="content-step1">
            <div className="row" id="row">
                <div className="column mb-3">
                    <p className="h2 mb-2" id="title-step1">Informações Pessoais</p>
                    <p id="subtitle-step1">Por favor informe seu nome, endereço de e-mail e telefone.</p>
                </div>
                <div className="column">
                    <div class="mb-4">
                        <label for="exampleFormControlInput1" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="input" placeholder="e.x. Stephen King" required/>
                    </div>
                </div>
                <div className="column">
                    <div class="mb-4">
                        <label for="exampleFormControlInput1" class="form-label">Endereço de e-mail</label>
                        <input type="email" class="form-control" id="input" placeholder="e.x. stephenking@lorem.com" required/>
                    </div>
                </div>
                <div className="column">
                    <div class="mb-4">
                        <label for="exampleFormControlInput1" class="form-label">Telefone</label>
                        <input type="number" class="form-control" id="input" placeholder="e.x. (41) 9 9123-4567" required/>
                    </div>
                </div>
                <div className="column mt-5">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Link to="/plan">
                        <button class="btn btn-primary me-md-2" type="button">Próximo</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step1;