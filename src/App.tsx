import React, { useEffect, useState } from "react";
import Loader from "./Layout/Loader";
import BtnGroupTop from "./Layout/BtnGroupTop";
import Movie from "./Layout/Movie";
import BtnGroupBottom from "./Layout/BtnGroupBottom";
import Modal from "./Layout/Modals";
import { useAppDispatch, useAppSelector } from "./store";
import { isVideoEnded, VideoPlay } from "./slices/VideoPlay";
import result from "./imgdata";

const App: React.FC = () => {
  const [view, SetView] = useState(false);
  const play = useAppSelector((state) => state.video.view);
  const ended = useAppSelector((state) => state.video.video_ended);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      SetView(true);
    }, 3000);
  }, []);

  const VideoStart = () => {
    dispatch(VideoPlay());
    dispatch(isVideoEnded());
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.id === "video") {
        dispatch(VideoPlay());
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <BtnGroupTop isplay={play} />
      <Movie isplay={play} />
      {
        <img
          className={`cursor-pointer fixed top-[45px] left-[45px] w-[88px] h-[88px] z-40 duration-[400] transition-all hover:opacity-i_0 ${
            play && "opacity-50"
          }`}
          src="/assets/image.png"
          alt="logo"
        />
      }
      {!ended && (
        <img
          className="hover:opacity-i_0 fixed top-[45px] w-[100px] right-[45px] z-40 duration-[400] transition-all cursor-pointer"
          src={play ? result.stopbtn : result.playbtn}
          alt="btn"
          onClick={() => dispatch(VideoPlay())}
        />
      )}
      <Loader view={view} />

      {!play && ended && (
        <img
          className="cursor-pointer absolute transition-all hover:brightness-125"
          src="/assets/play-DqB0jiWs.png"
          alt=""
          onClick={VideoStart}
        />
      )}
      <BtnGroupBottom isplay={play} />

      <Modal />
    </div>
  );
};

export default App;
