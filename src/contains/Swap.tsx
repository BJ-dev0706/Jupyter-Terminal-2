import { FormProps } from "../types";
import { SwapMode } from "../types/enums";
import JupiterTerminal from "./Jupiter";

const data: FormProps = {
    swapMode: SwapMode.ExactInOrOut,
    initialAmount: '0',
    fixedAmount: false,
    initialInputMint: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
    fixedInputMint: false,
    initialOutputMint: 'AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR',
    fixedOutputMint: false,
    initialSlippageBps: 0
}

const Swap:React.FC = () => {
    return(
        <div className="flex">
            <div className="relative z-[1] bg-[#292936] rounded-[20px] p-[30px] shadow-[10px_0_15px_-5px_#000]">
                <JupiterTerminal
                    rpcUrl={"https://docs-demo.solana-mainnet.quiknode.pro/"}
                    formProps={data}
                    simulateWalletPassthrough={false}
                    strictTokenList={false}
                    defaultExplorer={"Solscan"}
                    useUserSlippage={true}
                />
            </div>
            <div className="flex flex-col justify-center items-center relative left-[-50px] bg-[#E83030] kojiro text-[#2B1612] text-[25px] font-[900] rounded-[20px] w-[500px]">
                <div className="bg-[#ffffff] relative left-[25px] pt-[70px] py-[40px] mt-[35px] px-[20px] rounded-[10px] flex flex-col shadow-[3px_3px_0px_3px_#DED7D1] justify-center items-center">
                    <img className="h-[136px] w-[136px] absolute top-[-70px]" src="/assets/logo-_o_2Ourq.png" alt="" />
                    <div> Swap your</div>
                    <div>$SOL to $MANEKI</div>
                </div>
            </div>
        </div>
    )
};

export default Swap;