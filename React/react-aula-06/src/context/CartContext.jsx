import { createContext, useState} from "react";

export const CartContext = createContext([])

export default function CartProvider({children}){
const[ cart, setCart] = useState([])
    
   
return(
    <CartContext.Provider value={{cart:cart, setCart:setCart}}>
        {children}
    </CartContext.Provider>
)
}

