import type {Guitar} from '../types'//If the type file is not called index.ts I need to specify the full name of the file here

type GuitarProps = {//Is best practice to leave specific component types inside the same component file, only separate them if more than 1 component will use this type.
    guitar : Guitar,
    addToCart : (item: Guitar) => void
}

export default function Guitar({guitar, addToCart} : GuitarProps){
    const {name, image, description, price} = guitar;

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}