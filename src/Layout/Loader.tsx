import React from "react";
interface LoaderProps {
    view: boolean;
}

const Loader:React.FC<LoaderProps> = ({view}) => {
    return(
        <div className={`fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-white z-50 ${view ? "hidden" : ""}`}>
            <img src={"./assets/loader-C79T5Lcn.webp"}  alt="" className="w-1/2" />
        </div>
    )
}

export default Loader;