import styles from "./style.module.css"
import { GrLike } from "react-icons/gr";
import { MdOutlineComment } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";



import { BsGlobeAmericas } from "react-icons/bs";


export default function Card() {
    return (
        <>
            <article className={styles.Body}>
                <header className={styles.Header}>
                    <img src="../src\assets\Ellipse 1.png" alt="" className="profilePic" />

                    <div className={styles.Title}>
                        <h3>Instituto IREDE</h3>
                        <p>12h <BsGlobeAmericas /> </p>
                    </div>
                </header>
                <img src="../src/assets/Rectangle 1.png" alt="" />
                <footer className={styles.Footer}>
                    <p>Curtir <GrLike />
                    </p>
                    <p>Comentar <MdOutlineComment />
                    </p>
                    <p>Comenta <IoIosShareAlt />
                    </p>
                </footer>
            </article>

        </>
    )
}