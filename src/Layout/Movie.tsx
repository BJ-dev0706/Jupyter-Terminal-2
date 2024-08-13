import React, { useEffect, useRef } from "react";
import { useAppDispatch } from "../store";
import { isVideoEnded, VideoPlay } from "../slices/VideoPlay";

interface playMode {
    isplay: boolean
}

const Movie:React.FC<playMode> = ({isplay}) => {
    const dispatch = useAppDispatch();
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };
  
    const handleStop = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
    useEffect(() => {
        isplay ? handlePlay() : handleStop();
    }, [isplay]);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleEnded = () => {
            dispatch(isVideoEnded());
            dispatch(VideoPlay());
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
            }
        };

        if (videoElement) {
            videoElement.addEventListener("ended", handleEnded);

            // Cleanup listener on unmount
            return () => {
                videoElement.removeEventListener("ended", handleEnded);
            };
        }
    });


    return(
        <video ref={videoRef} src={'./assets/video.mp4'} className="w-full h-full object-cover" id="video"></video>
    )
}

export default Movie;