class OptimizedScrollEvent {
  private callbacks: Function[] = [];
  private running: boolean = false;

  constructor() {
    this.scroll.bind(this);
    this.runCallbacks.bind(this);
  }

  private runCallbacks() {
    this.callbacks.forEach((callback) => callback(window.scrollY));
    this.running = false;
  }

  private scroll() {
    if (!this.running) {
      this.running = true;
      setTimeout(
        () => window.requestAnimationFrame(this.runCallbacks.bind(this)),
        500
      );
    }
  }

  private addCallback(callback: Function) {
    this.callbacks.push(callback);
  }

  add(callback: Function) {
    if (!this.callbacks.length)
      window.addEventListener("scroll", this.scroll.bind(this));
    this.addCallback(callback);
  }
}

export const optimizedScrollEvent = new OptimizedScrollEvent();
