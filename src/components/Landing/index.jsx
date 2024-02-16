import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";

export function Landing() {

    const mainRef = useRef(null);
    const [started, setStarted] = useState(false);


    useEffect(() => {
        mainRef.current.classList.add('startingImg');
        const timeout = setTimeout(() => {
            mainRef.current.classList.remove('startingImg');
            setStarted(true);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <main ref={mainRef} className="welcomePage">
            {
                started && (
                    <>
                        <div className="leftBox">
                            <Link to="/inscription">
                                <button onMouseOver={() => mainRef.current.classList.add('leftImg')} onMouseLeave={() => mainRef.current.classList.remove('leftImg')} className="btn-welcome">
                                    Inscription
                                </button>
                            </Link>
                        </div>
                        <div className="rightBox">
                            <Link to="/connexion">
                                <button onMouseOver={() => mainRef.current.classList.add('rightImg')} onMouseLeave={() => mainRef.current.classList.remove('rightImg')} className="btn-welcome">
                                    Connexion
                                </button>
                            </Link>
                        </div>
                    </>
                )
            }
        </main>
    )
}