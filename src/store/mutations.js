const mutations = {
  // 改变播放状态
  setPlayingState(state, playing) {
    state.playing = playing
  },
  // 改变顺序列表
  setSequenceList(state, list) {
    state.sequenceList = list
  },
  // 改变播放列表
  setPlaylist(state, list) {
    state.playlist = list
  },
  // 改变播放模式
  setPlayMode(state, mode) {
    state.playMode = mode
  },
  // 改变当前索引
  setCurrentIndex(state, index) {
    state.currentIndex = index
  },
  // 设置全屏
  setFullScreen(state, fullScreen) {
    state.fullScreen = fullScreen
  }
}

export default mutations
