import { GrLike } from "react-icons/gr";
import { MdOutlineComment } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { BsGlobeAmericas } from "react-icons/bs";


function Header({props}) {
    return (
        <header className={" flex justify-between items-center w-full mt-4 mb-2"}>
            <img src="src\assets\irede.png" alt="" className="profilePic pl-4" />

            <div className={" text-sm pr-2"}>
                <h3>Instituto IREDE</h3>
                <p className="flex gap-1 items-center text-xs text-gray-400">12h <BsGlobeAmericas /> </p>
            </div>
        </header>
    )
}

function Footer() {
    return (
        <footer className={"flex w-full items-center justify-around text-xs m-2"}>
            <p className="flex items-center gap-1">Curtir <GrLike />
            </p>
            <p className="flex items-center gap-1">Comentar <MdOutlineComment />
            </p>
            <p className="flex items-center gap-1">Compartilhar <IoIosShareAlt />
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