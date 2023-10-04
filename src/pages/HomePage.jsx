import {useContext} from "react"
import  UserContext  from "../context/user/UserContext"
import {ControlledCarousel} from "../components/ControlledCarousel"
import { ProductsShowRoom } from "../components/ProductsShowRoom"


export const HomePage = () => {
    const [state, ] = useContext(UserContext)


    return(
        <>

        <h1>HomePage</h1>
        <hr/>
        { state?.user && <h2>Bienvenido {state.user.username}</h2>}


       <ControlledCarousel/>

        <section className="section1">
        <div className="card1">
            <h1>Tienda de Padel</h1>
            <p>Bienvenidos a la tienda de Padel donde podrán encontrar: Palas, accesorios, zapatillas, ropa y mucho más.
            Traemos los mejores productos de las mejores marcas para que puedas alcanzar tu mejor nivel en este deporte.</p>
            <p>Mejora con nosotros y nuestro equipo de expertos que tendrá la mejor opción que se adapte a tu único estilo de juego.</p>
        </div>
        <div className="card2">
            <p>Aquí podrás encontrar el mejor equipamento en un solo lugar con los mejores precios y el catalogo mas extenso de productos.</p>
            <p>Ingresa tu correo electrónico para que podamos contactarnos y ver como ayudarte a mejorar tu equipo y asesorarte con las mejores opciones que tenemos para ti.</p>
           
        </div>
    </section>
    <section>
        <ProductsShowRoom/>
    </section>




        </>
    )
}