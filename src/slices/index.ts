// src/slices/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import ModalSelect from './ModalSelect';
import VideoPlay from './VideoPlay';

const rootReducer = combineReducers({
  modal: ModalSelect,
  video: VideoPlay
});

export default rootReducer;
