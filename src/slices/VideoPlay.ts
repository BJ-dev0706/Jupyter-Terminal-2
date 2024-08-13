// src/slices/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface VideoState {
  view: boolean;
  video_ended: boolean;
}

const initialState: VideoState = {
  view: false,
  video_ended: true
};

const VideoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    VideoPlay: (state) => {
      state.view = !state.view;
    },
    isVideoEnded: (state) => {
      state.video_ended = !state.video_ended;
    }
  },
});

export const { VideoPlay, isVideoEnded } = VideoSlice.actions;
export default VideoSlice.reducer;
