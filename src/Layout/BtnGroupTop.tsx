import React from "react";
import { useAppDispatch } from "../store";
import { btnClick } from "../slices/ModalSelect";

interface playMode {
    isplay: boolean
}

const BtnGroupTop:React.FC<playMode> = ({isplay}) => {
    // const type:string = useAppSelector((state) => state.modal.type);
    const dispatch = useAppDispatch();

    return(
        <div className={`absolute top-0 left-0 w-full flex items-center justify-center uppercase font-[700] text-[30px] gap-[30px] mt-[2%] text-[#2E282D] z-10 `}>
            <div className={`menu-item ${isplay && "opacity-50"}`} onClick={() => dispatch(btnClick("Maneki"))}>about maneki</div>
            <div className={`menu-item ${isplay && "opacity-50"}`} onClick={() => dispatch(btnClick("Swap"))}>buy now</div>
            <div className={`menu-item ${isplay && "opacity-50"}`} onClick={() => dispatch(btnClick("Tokenomics"))}>tokenomics</div>
        </div>
    )
}

export default BtnGroupTop;