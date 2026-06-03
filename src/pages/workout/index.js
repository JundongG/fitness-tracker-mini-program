Page({
  data: {
    exercises: [],
    currentExercise: '',
    sets: []
  },
  onLoad() {
    // TODO: load from storage or cloud
  },
  addSet() {
    // TODO: add set logic
    wx.showToast({ title: '功能开发中' });
  },
  saveWorkout() {
    // TODO: save logic
    wx.showToast({ title: '训练已保存 (mock)' });
  }
});
