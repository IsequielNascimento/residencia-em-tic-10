import { useState } from "react";
import { userEffect } from "react";

export default function CardFood() {

    const [product1, setProduct1] = useState(0)
    function handleProduct1(e) {
        setProduct1(e.target.value)
        setProduct1(product1 + 1)
    }


    return (
        <>
            <article className="flex h-32">
                <img src="src\assets\hamburguer.png" alt="" />
                <div className="flex flex-col">
                    <h3>
                        Hamburguer
                    </h3>
                    <p className=" text-xs">
                        Experimente nosso hambúrguer premium: carne suculenta, queijo derretido, vegetais frescos (alface, tomate, cebola roxa) e molho especial. Uma combinação perfeita de sabores e texturas em cada mordida.
                    </p>
                    <label htmlFor="" className=" flex items-center justify-around ">
                        <button type="button" onClick={() => handleProduct1(e)}>+</button>
                        <button type="button" value={"-"}>-</button>
                    </label>
                </div>
            </article>
        </>
    )
}