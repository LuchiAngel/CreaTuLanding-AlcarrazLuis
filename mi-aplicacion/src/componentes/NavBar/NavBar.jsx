import { CartWidget } from "../CartWidget/CartWidget"
import logo from "./assets/logo.png"
import styles from "./assets/navbar.module.css"

export const NavBar = () => {
  return (
    <>
    <div className={styles.logo}>
    <img src={logo} alt="foto del logo" />
    </div>
    <h1 className={styles.h1}>Todo dulce y Una pizca de sal</h1>
    
    <div>
    <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
    </ul>
    </div>
    
      
    
    

    
    <CartWidget/>
    
    
    </>
    
  )
}
