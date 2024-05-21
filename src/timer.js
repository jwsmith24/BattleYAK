function createTimer(tickFunction) {
  return {
    seconds: 120,
    interval: null,
    tickFunction,
    start: function () {
      this.interval = setInterval(() => {
        this.seconds--;
        tickFunction();
      }, 1000);
    },
    stop: function () {
      clearInterval(this.interval);
    },
    reset: function () {
      clearInterval(this.interval);
      this.seconds = 120;
    },
  };
}

module.exports = [createTimer];
