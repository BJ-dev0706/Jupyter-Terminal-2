import Maneki from "../contains/Maneki";
import Tokenomics from "../contains/Tokenomics";
import Swap from "../contains/Swap";
import result from "../imgdata";
import { useAppDispatch, useAppSelector } from "../store";
import { btnClick } from "../slices/ModalSelect";


const Modal = () => {
    const type:string = useAppSelector((state) => state.modal.type);
    const dispatch = useAppDispatch();
    return(
        <div className={`${type === "" ? "hidden" : "middle-container"}`}>
            { type === "Maneki" && <Maneki /> }
            { type === "Tokenomics" && <Tokenomics />}
            { type === "Swap" &&  <Swap /> }
            <img className="absolute top-[35px] right-[35px] cursor-pointer" src={result.close} alt="" onClick={() => dispatch(btnClick(""))} />
        </div>
    )
}

export default Modal;