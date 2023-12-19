import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"
import { NavBar } from "./Components/NavBar/NavBar"

export const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer message={"Bienvenidos al mejor ecommerce de alguna galaxia!"} />
    </>

  )
}