class FakeContext {
  constructor() {
    this.lineWidth = 1;
    this.strokeStyle = '#000';
  }

  beginPath() {
    return this;
  }

  moveTo() {
    return this;
  }

  lineTo() {
    return this;
  }

  stroke() {
    return this;
  }

  clearRect() {
    return this;
  }
}

export function createFakeCanvas() {
  const $canvas = document.createElement('div');
  $canvas.getContext = () => new FakeContext();
  $canvas.width = 300;
  $canvas.height = 150;
  return $canvas;
}

export function stubGraphControllerSetCanvas() {
  this.$canvas = createFakeCanvas();
  this.ctx = this.$canvas.getContext();
  this.refreshCanvasSpace();
  return this;
}
