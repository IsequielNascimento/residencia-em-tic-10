import { GrLike } from "react-icons/gr";
import { MdOutlineComment } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { BsGlobeAmericas } from "react-icons/bs";


function Header() {
    return (
        <header className={" flex justify-around items-center w-full mt-4 mb-2"}>
            <img src="../src\assets\Ellipse 1.png" alt="" className="profilePic" />

            <div className={" text-sm"}>
                <h3>Instituto IREDE</h3>
                <p className="flex gap-1 items-center text-xs text-gray-400">12h <BsGlobeAmericas /> </p>
            </div>
        </header>
    )
}

function Footer() {
    return (
        <footer className={"flex w-full items-center justify-around"}>
            <p className="flex items-center gap-1">Curtir <GrLike />
            </p>
            <p className="flex items-center gap-1">Comentar <MdOutlineComment />
            </p>
            <p className="flex items-center gap-1">Comenta <IoIosShareAlt />
            </p>
        </footer>
    )
}
export default function Card() {
    return (
        <>
            <article className={" flex flex-col justify-center items-center ml-auto mr-auto w-64"}>
                <Header />
                <img src="../src/assets/Rectangle 1.png" alt="" />
                <Footer />
            </article>

        </>
    )
}