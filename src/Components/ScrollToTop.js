import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";


const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="relative">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="fill-white hidden lg:block fixed bottom-10 right-6 z-20 bg-black rounded-full text-4xl cursor-pointer"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
};
export default ScrollToTop;