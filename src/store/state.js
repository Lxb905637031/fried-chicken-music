import { PLAY_MODE, SEARCH_KEY } from '../assets/js/constant'
import { load } from '@/assets/js/array-store'

const state = {
  sequenceList: [], // 顺序列表
  playlist: [], // 播放列表
  playing: false, // 是否播放
  palyMode: PLAY_MODE.sequence, // 顺序播放
  currentIndex: 0, // 当前索引
  fullScreen: false, // 是否全屏
  favoriteList: [], // 喜欢列表
  searchHistoty: load(SEARCH_KEY), // 搜索历史
  playHistory: [] // 播放历史
}

export default state
