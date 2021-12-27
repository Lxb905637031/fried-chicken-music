import { PLAY_MODE } from '../assets/js/constant'

const state = {
  sequenceList: [], // 顺序列表
  playlist: [], // 播放列表
  playing: false, // 是否播放
  palyMode: PLAY_MODE.sequence, // 顺序播放
  currentIndex: 0, // 当前索引
  fullScreen: false
}

export default state
