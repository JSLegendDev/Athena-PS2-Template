export class Timer {
  paused = false;

  constructor() {
    this.initTime = Date.now();
    this.currentTime = Date.now() - this.initTime;
  }

  get() {
    if (!this.paused) {
      this.currentTime = Date.now() - this.initTime;
    }

    return this.currentTime;
  }

  reset() {
    this.initTime = Date.now();
  }

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
  }
}
