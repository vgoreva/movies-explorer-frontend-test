import { useNavigate } from "react-router-dom"

function NotFound() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        < div className="notfound" >
            <h1 className="notfound__title">404</h1>
            <p className="notfound__text">Страница не найдена</p>
            <button className="notfound__button" onClick={goBack}>Назад</button>
        </div>
    )
}

export default NotFound