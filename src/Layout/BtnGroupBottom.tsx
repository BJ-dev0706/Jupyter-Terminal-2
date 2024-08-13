import React, { useEffect } from "react";
import result from "../imgdata";
import Marquee from "react-fast-marquee";

interface playMode {
    isplay: boolean
}

const x: string = "opacity-[0] translate-x-[1000px] pointer-events-none";
const y: string = "opacity-[1] translate-x-[0px]";

const BtnGroupBottom:React.FC<playMode> = ({isplay}) => {

    useEffect(() => {
        
    }, [isplay]);

    return(
        <div className="socials-container w-full px-[10%] transition-all duration-[500ms] flex gap-[15px] fixed bottom-[2%] items-center justify-center z-[10] ">
            <div className={`token-address relative kojiro gap-[15px]  duration-[300ms]  w-fit px-4 text-[#2E282D]  ${isplay ? x : y}`}>
                <div className="mt-[4px] uppercase text-[25px]">Address</div>
                <div className="pointer-events-none absolute flex items-center justify-center w-full h-full top-0 left-0 bg-[#fff] transition-all duration-[300ms]  opacity-[0]">Copied!</div>
            </div>
            <div className={`w-[800px] bg-white py-2 rounded-[25px]  duration-[400ms] markets flex flex-col ${isplay ? x : y}`}>
                <Marquee direction={"left"} gradient={false} speed={50} pauseOnHover={true} className="swiper swiper-initialized swiper-horizontal mySwiper swiper-backface-hidden">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" data-swiper-slide-index="1" >
                            <a target="_blank" href="https://www.gate.io"  className="slide-link"  rel="noreferrer">
                                <img className="h-[65px] !w-[160px]" src="/assets/gateio-DelJyfqx.svg" alt="Gate.io" />
                            </a>
                        </div>
                        <div className="swiper-slide" data-swiper-slide-index="2" >
                            <a target="_blank" href="https://www.htx.com"  className="slide-link"  rel="noreferrer">
                                <img className="h-[50px] !w-[120px] mt-2" src="/assets/htx-DaJqMKzi.svg" alt="HTX" />
                            </a>
                        </div>
                        <div className="swiper-slide" data-swiper-slide-index="3" >
                            <a target="_blank" href="https://www.bitget.com"  className="slide-link"  rel="noreferrer">
                                <img className="h-[65px] !w-[150px]" src="/assets/bitget-B3LC3ogZ.svg" alt="Bitget" />
                            </a>
                        </div>
                        <div className="swiper-slide" data-swiper-slide-index="4" >
                            <a target="_blank" href="https://crypto.com" className="slide-link" rel="noreferrer">
                                <img className="h-[65px] !w-[220px]" src="/assets/cryptocom-BofsZMnV.svg" alt="Crypto.com" />
                            </a>
                        </div>
                        <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="5" >
                            <a target="_blank" href="https://www.mexc.com"  className="slide-link"  rel="noreferrer">
                                <img className="h-[65px] !w-[220px]" src="/assets/mexc-VLwQodOa.svg" alt="MEXC" />
                            </a>
                        </div>
                        <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="6" >
                            <a target="_blank" href="https://www.bitmart.com"  className="slide-link"  rel="noreferrer">
                                <img className="h-[65px] !w-[150px]" src="/assets/bitmart-BApid5_E.svg" alt="Bitmart" />
                            </a></div>
                        <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="7" >
                            <a target="_blank" href="https://www.coinex.com"  className="slide-link"  rel="noreferrer">
                                <img className="h-[65px] !w-[150px]" src="/assets/coinex-CnNicHze.svg" alt="CoinEx" />
                            </a>
                        </div>
                        <div className="swiper-slide" data-swiper-slide-index="8" >
                            <a target="_blank" href="https://www.lbank.info"  className="slide-link"  rel="noreferrer">
                                <img className="h-[65px] !w-[120px]" src="/assets/lbank--HJusvpd.svg" alt="LBank" />
                            </a>
                        </div>
                        <div className="swiper-slide" data-swiper-slide-index="9" >
                            <a target="_blank" href="https://www.poloniex.com"  className="slide-link"  rel="noreferrer">
                                <img className="h-[65px] !w-[170px]" src="data:image/svg+xml,%3csvg%20width='151'%20height='44'%20viewBox='0%200%20151%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M47.6562%2028.5625L47.6756%2014.7754H53.7365C56.6411%2014.7754%2058.2483%2016.7699%2058.2483%2019.1129C58.2483%2021.4559%2056.6024%2023.4311%2053.7365%2023.4311H50.0961V28.5819H47.6562V28.5625ZM53.388%2016.9054H50.0767V21.301H53.388C54.7628%2021.301%2055.7504%2020.4297%2055.7504%2019.1129C55.7504%2017.7962%2054.7628%2016.9054%2053.388%2016.9054Z'%20fill='%2341D9BF'/%3e%3cpath%20d='M66.6696%2014.5626C70.8134%2014.5626%2073.718%2017.5834%2073.718%2021.7079C73.718%2025.8324%2070.7941%2028.8338%2066.6502%2028.8338C62.5063%2028.8338%2059.6211%2025.813%2059.6211%2021.6885C59.6211%2017.564%2062.545%2014.5432%2066.6696%2014.5626ZM66.6696%2016.712C63.8812%2016.712%2062.0997%2018.842%2062.0997%2021.6885C62.0997%2024.535%2063.8618%2026.6651%2066.6696%2026.6651C69.4773%2026.6651%2071.2395%2024.5157%2071.2395%2021.6885C71.2395%2018.8614%2069.4386%2016.712%2066.6696%2016.712Z'%20fill='%2341D9BF'/%3e%3cpath%20d='M76.0625%2028.6016L76.0819%2014.8145H78.5024L78.483%2026.4715H84.5633V28.6016H76.0625Z'%20fill='%2341D9BF'/%3e%3cpath%20d='M92.5581%2014.6017C96.702%2014.6017%2099.6065%2017.6224%2099.6065%2021.7469C99.6065%2025.8715%2096.6826%2028.8729%2092.5387%2028.8729C88.3948%2028.8729%2085.4902%2025.8521%2085.4902%2021.7276C85.4902%2017.6031%2088.4336%2014.5823%2092.5581%2014.6017ZM92.5581%2016.7317C89.7697%2016.7317%2087.9882%2018.8617%2087.9882%2021.7082C87.9882%2024.5547%2089.7503%2026.7041%2092.5581%2026.7041C95.3465%2026.7041%2097.128%2024.5547%2097.128%2021.7276C97.128%2018.9004%2095.3465%2016.7511%2092.5581%2016.7317Z'%20fill='%2341D9BF'/%3e%3cpath%20d='M111.575%2028.6405L104.391%2018.5712V28.6211H101.971L101.99%2014.834H104.469L111.498%2024.6321V14.8533H113.918L113.899%2028.6405H111.575Z'%20fill='%2341D9BF'/%3e%3cpath%20d='M116.842%2028.6406L116.861%2014.8535H119.282L119.262%2028.6406H116.842Z'%20fill='%2341D9BF'/%3e%3cpath%20d='M122.207%2028.66L122.226%2014.8535H131.676V16.9835L124.647%2016.9642V20.5465H131.54V22.6766H124.647V26.4912H131.676V28.6213L122.207%2028.66Z'%20fill='%2341D9BF'/%3e%3cpath%20d='M143.371%2028.6776L139.518%2023.275L135.645%2028.6776H132.74L137.93%2021.6097L133.089%2014.8711H135.993L139.537%2019.9444L143.081%2014.8905H146.005L141.164%2021.5904L146.295%2028.6969L143.371%2028.6776Z'%20fill='%2341D9BF'/%3e%3cpath%20d='M33.3629%2013.3994V21.6485L26.2176%2017.524L19.0723%2013.3801L26.2369%209.27491L33.3822%205.15039L33.3629%2013.3994Z'%20fill='%23072B38'/%3e%3cpath%20d='M19.0543%2021.6318V29.8809L11.909%2025.7564L4.76367%2021.6125L11.909%2017.5073L19.0543%2013.3828V21.6318Z'%20fill='%23144556'/%3e%3cpath%20d='M4.76367%2013.3623V5.11328L11.909%209.2378L19.0543%2013.3623L11.909%2017.5062L4.76367%2021.6114V13.3623Z'%20fill='%2341D9BF'/%3e%3cpath%20d='M4.74414%2029.8584L4.76351%2021.6094L11.9088%2025.7533L19.0541%2029.8778L11.9088%2034.0023L4.74414%2038.1074V29.8584Z'%20fill='%23072B38'/%3e%3cpath%20d='M26.2176%2017.5267L19.0723%2013.3828V21.6318V29.8809L26.1982%2034.0248L33.3435%2038.1493V29.9003L33.3629%2021.6512L26.2176%2017.5267Z'%20fill='%2341D9BF'/%3e%3c/svg%3e" alt="Poloniex" />
                            </a>
                        </div>
                        <div className="swiper-slide" data-swiper-slide-index="0" >
                            <a target="_blank" href="https://www.kucoin.com"  className="slide-link"  rel="noreferrer">
                                <img className="h-[65px] !w-[170px]" src="/assets/kucoin-DaRJq4E8.svg" alt="KuCoin" />
                            </a>
                        </div>
                    </div>
                </Marquee>
            </div>
            <a className={`relative transition-all duration-[500ms] ${isplay ? x : y}`} href="http://t.me/maneki_official" target="_blank" rel="noreferrer">
                    <img src={result.x} alt="" />
                    <img src={result.x_h}className="absolute top-0 transition-all"  alt=""></img>
            </a>
            <a className={`relative transition-all duration-[600ms] ${isplay ? x : y}`} href="http://t.me/maneki_official" target="_blank" rel="noreferrer">
                    <img src={result.telegram} alt="" />
                    <img src={result.telegram}className="absolute top-0 transition-all"  alt=""></img>
            </a>
            <a className={`relative transition-all duration-[700ms] ${isplay ? x : y}`} href="http://t.me/maneki_official" target="_blank" rel="noreferrer">
                    <img src={result.dex} alt="" />
                    <img src={result.dex_h}className="absolute top-0 transition-all"  alt=""></img>
            </a>
            <a className={`relative transition-all duration-[800ms] ${isplay ? x : y}`} href="http://t.me/maneki_official" target="_blank" rel="noreferrer">
                    <img src={result.dexscrener} alt="" />
                    <img src={result.dexscrener_h}className="absolute top-0 transition-all"  alt=""></img>
            </a>
            <a className={`relative transition-all duration-[900ms] ${isplay ? x : y}`} href="http://t.me/maneki_official" target="_blank" rel="noreferrer">
                    <img src={result.bird} alt="" />
                    <img src={result.bird_h}className="absolute top-0 transition-all"  alt=""></img>
            </a>
            <a className={`relative transition-all duration-[1000ms] ${isplay ? x : y}`} href="http://t.me/maneki_official" target="_blank" rel="noreferrer">
                    <img src={result.solscan} alt="" />
                    <img src={result.solscan_h}className="absolute top-0 transition-all"  alt=""></img>
            </a>
            <a className={`relative transition-all duration-[1100ms] ${isplay ? x : y}`} href="http://t.me/maneki_official" target="_blank" rel="noreferrer">
                    <img src={result.coin} alt="" />
                    <img src={result.coin_h}className="absolute top-0 transition-all"  alt=""></img>
            </a>
            <a className={`relative transition-all duration-[1200ms] ${isplay ? x : y}`} href="http://t.me/maneki_official" target="_blank" rel="noreferrer">
                    <img src={result.coinmarket} alt="" />
                    <img src={result.coinmarket_h}className="absolute top-0 transition-all"  alt=""></img>
            </a>
        </div>

    )
}

export default BtnGroupBottom;