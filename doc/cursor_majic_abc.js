// cursor magic: adapted from appy-hour.glitch.me
let mojis = ['👾', '🤖', '✨', '🛸', '🌏'];

let started = false;
let disabled = false;
let mx = 0;
let my = 0;
let speed = .9;
let wid = 0;
let hgt = 0;
let mojiEls;

let trailEl;

function start() {
  if (disabled) return;
  trailEl = document.createElement('div');
  trailEl.id = 'trail';
  document.body.appendChild(trailEl);

  let spawn = document.querySelector('h1');
  mx = spawn.offsetLeft + spawn.offsetWidth / 2;
  my = spawn.offsetTop + spawn.offsetHeight / 2;
  mojiEls = mojis.map(m => {
    let el = document.createElement('span');
    el.innerHTML = m;
    trailEl.appendChild(el);
    console.log('Created element:', el); // Debugging line
    return {
      el,
      a: 0,
      x: mx,
      y: my,
      r: 0
    };
  });
  wid = mojiEls[0].el.offsetWidth / 2;
  hgt = mojiEls[0].el.offsetHeight / 2;
  started = true;
  update();
}

function update() {
  let is = 1 - speed;
  let ap = 1200;
  mojiEls.forEach((o, i, a) => {
    let angle = i / mojiEls.length * 6.28;
    let oldX = o.x;
    let oldY = o.y;
    if (i === 0) {
      o.x = mx * is + o.x * speed;
      o.y = my * is + o.y * speed;
    } else {
      o.x = o.x * speed + a[i - 1].x * is;
      o.y = o.y * speed + a[i - 1].y * is;
    }
    let r = 1 / (1 + Math.hypot(o.x - oldX, o.y - oldY));
    o.r = r * is + o.r * speed;
    let tx = o.x + 120 * Math.cos(angle - Date.now() / ap) * o.r - wid;
    let ty = o.y + 120 * Math.sin(angle - Date.now() / ap) * o.r - hgt;
    o.el.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
  });
  if (started) {
    requestAnimationFrame(update);
  }
  if (window.screen.width < 1000) {
    mojiEls.forEach((o) => { 
      o.el.style.opacity = '0';
    });
  } else {
    mojiEls.forEach((o) => { 
      o.el.style.opacity = '1';
    });
  }
}

document.body.addEventListener('mousemove', function (e) {
  if (!started && screen.width > 1000) {
    start();
  }
  mx = e.pageX;
  my = e.pageY;
});
