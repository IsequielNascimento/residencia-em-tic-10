import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";


export default function Carrinho(){
    const[totalItens, setTotalItens] = useState(0)
    const {cart} = useContext(CartContext)
    
    useEffect(()=>{
        let total = cart.length>0&&cart.reduce((acc, currentItem)=>acc.qtd+currentItem.qtd)
        setTotalItens(total)
    }, [cart])
    return(
        <div className="relative flex justify-center items-center ">
           <MdOutlineShoppingCart  className="absolute text-3xl"/>
           <p className="absolute -top-8 -right-6 bg-red-600  text-[16px] rounded-full h-6 w-6 justify-center items-center flex">{totalItens}</p> 
        </div>
    )
}