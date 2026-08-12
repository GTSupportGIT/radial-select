const sharedStyles = `
  :host {
    --radial-size: 440px;
    --radial-radius: 136px;
    --radial-primary: #ffffff;
    --radial-primary-text: #2e3642;
    --radial-option-bg: #ffffff;
    --radial-option-text: #ffffff;
    --radial-option-border: rgba(255,255,255,.65);
    --radial-option-width: 108px;
    --radial-option-height: 132px;
    --radial-option-font-size: 1rem;
    --radial-hub-size: 112px;
    --radial-hub-font-size: 1.05rem;
    --radial-hint-font-size: .78rem;
    --radial-font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --radial-shadow: 0 16px 34px rgba(49,57,70,.16);
    --radial-option-shadow: 0 10px 22px rgba(50,55,76,.16);
    --radial-transition: 420ms cubic-bezier(.2,.82,.22,1);
    --radial-trigger-size: 112px;
    --radial-trigger-bg: #ffffff;
    --radial-trigger-text: #30384a;
    --radial-trigger-border: #e5e9ef;
    --radial-arrow-bg: #ffffff;
    --radial-arrow-text: #4d5d74;
    --radial-arrow-size: 46px;
    --radial-shape-clip: none;
    --radial-option-radius: 28px;
    --radial-petal-1: #ff6486;
    --radial-petal-2: #ffad36;
    --radial-petal-3: #a7d74c;
    --radial-petal-4: #3cc7c0;
    --radial-petal-5: #4e9df3;
    --radial-petal-6: #9973eb;
    --radial-petal-7: #d65ed6;
    --radial-petal-8: #ff7b71;
    display: inline-block;
    font-family: var(--radial-font-family);
    color: var(--radial-option-text);
    contain: layout style;
  }

  *, *::before, *::after { box-sizing: border-box; }

  .root {
    position: relative;
    width: var(--radial-size);
    height: var(--radial-size);
    display: grid;
    place-items: center;
    touch-action: none;
    user-select: none;
    -webkit-user-select: none;
  }

  .trigger-wrap {
    position: relative;
    width: var(--radial-trigger-size);
    min-height: calc(var(--radial-trigger-size) + 34px);
    display: grid;
    justify-items: center;
    align-content: start;
    z-index: 7;
    transition: transform var(--radial-transition), opacity 220ms ease;
  }

  .trigger {
    position: relative;
    width: var(--radial-trigger-size);
    height: var(--radial-trigger-size);
    border-radius: 50%;
    border: 1px solid var(--radial-trigger-border);
    background: var(--radial-trigger-bg);
    color: var(--radial-trigger-text);
    box-shadow: 0 10px 26px rgba(52,62,78,.16), inset 0 0 0 7px rgba(255,255,255,.72);
    display: grid;
    place-items: center;
    cursor: pointer;
    padding: 0;
    overflow: visible;
  }

  .trigger::after {
    content: "";
    position: absolute;
    inset: 8px;
    border-radius: 50%;
    border: 1px solid rgba(143,157,178,.18);
    pointer-events: none;
  }

  .trigger:hover { transform: scale(1.045); }
  .trigger:focus-visible, .option:focus-visible, .arrow:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--radial-primary-text), white 55%);
    outline-offset: 4px;
  }

  .trigger-flower {
    position: absolute;
    width: 78px;
    height: 78px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

  .mini-petal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 23px;
    height: 34px;
    margin-left: -11.5px;
    margin-top: -31px;
    transform-origin: 50% 31px;
    background: linear-gradient(145deg, rgba(255,255,255,.72), rgba(255,255,255,0) 48%), var(--mini-color);
    clip-path: path("M11.5 34 C7.5 31 4 27 2 21 C0 15 1.5 8 5.5 4 C8.5 1 14.5 0 17.5 3 C22 7 24 14 22 20 C20 26 16 31 11.5 34 Z");
    box-shadow: inset 0 -4px 8px rgba(55,55,80,.08);
  }

  .trigger-center {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 25px;
    height: 25px;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #ffffff, #f0f2f5 72%);
    border: 2px solid #ffffff;
    box-shadow: 0 3px 9px rgba(46,55,72,.2);
    z-index: 2;
    pointer-events: none;
  }

  .trigger-label {
    margin-top: 9px;
    max-width: 160px;
    color: var(--radial-trigger-text);
    font-size: .82rem;
    font-weight: 800;
    line-height: 1.2;
    text-align: center;
    overflow-wrap: anywhere;
    text-shadow: none;
  }

  .stage {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    opacity: 0;
    pointer-events: none;
    transform: scale(.28);
    transition: transform var(--radial-transition), opacity 240ms ease;
    transform-origin: 50% 50%;
  }

  :host([open]) .stage { opacity: 1; pointer-events: auto; transform: scale(1); }
  :host([open]) .trigger-wrap { opacity: 0; pointer-events: none; transform: scale(.55); }

  .hub {
    width: var(--radial-hub-size);
    height: var(--radial-hub-size);
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, rgba(255,255,255,.98), rgba(255,255,255,.9) 62%, rgba(236,239,244,.96));
    color: var(--radial-primary-text);
    border: 5px solid rgba(255,255,255,.96);
    box-shadow: 0 12px 26px rgba(55,63,79,.14);
    display: grid;
    align-content: center;
    justify-items: center;
    text-align: center;
    padding: 12px;
    z-index: 5;
    pointer-events: none;
  }

  .hub strong { font-size: var(--radial-hub-font-size); line-height: 1.08; max-width: 88px; }
  .hub small { font-size: var(--radial-hint-font-size); opacity: .66; margin-top: 4px; line-height: 1.1; }
  .options { position: absolute; inset: 0; pointer-events: none; }

  .option {
    position: absolute;
    left: 50%;
    top: 50%;
    width: var(--radial-option-width);
    height: var(--radial-option-height);
    border: 2px solid var(--slot-border, var(--radial-option-border));
    border-radius: var(--radial-option-radius);
    clip-path: var(--radial-shape-clip);
    background: linear-gradient(145deg, rgba(255,255,255,.66) 0%, rgba(255,255,255,.2) 38%, rgba(255,255,255,0) 55%), var(--slot-bg, var(--radial-option-bg));
    color: var(--slot-text, var(--radial-option-text));
    box-shadow: inset 0 -10px 16px rgba(34,39,66,.08), var(--slot-shadow, var(--radial-option-shadow));
    font: inherit;
    font-size: var(--radial-option-font-size);
    font-weight: 800;
    cursor: pointer;
    pointer-events: auto;
    opacity: var(--slot-opacity, 1);
    transform: translate(-50%, -50%) translate(var(--slot-x), var(--slot-y)) rotate(var(--slot-rotate, 0deg)) scale(var(--slot-scale, 1));
    transition: transform var(--radial-transition), opacity var(--radial-transition), filter 180ms ease, box-shadow 180ms ease;
    z-index: 2;
  }

  .option > span {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    padding: 13px;
    text-align: center;
    line-height: 1.1;
    transform: rotate(var(--slot-counter-rotate, 0deg));
    transition: transform var(--radial-transition);
    text-shadow: 0 1px 3px rgba(0,0,0,.2);
  }

  .option[aria-selected="true"] {
    filter: saturate(1.08) brightness(1.03);
    box-shadow: inset 0 -10px 16px rgba(34,39,66,.07), 0 0 0 3px rgba(255,255,255,.95), 0 0 0 6px color-mix(in srgb, var(--slot-bg, var(--radial-option-bg)), white 18%), 0 12px 28px rgba(56,58,88,.2);
    z-index: 3;
  }

  .option:hover:not(:disabled) {
    filter: saturate(1.07) brightness(1.04);
    transform: translate(-50%, -50%) translate(var(--slot-x), var(--slot-y)) rotate(var(--slot-rotate, 0deg)) scale(calc(var(--slot-scale, 1) * 1.06));
  }

  .option:disabled { cursor: not-allowed; filter: grayscale(.75); opacity: .28; }

  :host([shape="rounded"]) {
    --radial-option-width: 112px;
    --radial-option-height: 72px;
    --radial-option-radius: 26px;
    --radial-shape-clip: none;
  }
  :host([shape="circle"]) {
    --radial-option-width: 92px;
    --radial-option-height: 92px;
    --radial-option-radius: 50%;
    --radial-shape-clip: none;
  }
  :host([shape="petal"]) {
    --radial-option-width: 108px;
    --radial-option-height: 132px;
    --radial-option-radius: 0;
    --radial-shape-clip: path("M54 132 C41 125 27 115 17 101 C7 87 2 68 5 49 C8 28 22 10 39 4 C49 0 59 0 69 4 C86 10 100 28 103 49 C106 68 101 87 91 101 C81 115 67 125 54 132 Z");
  }
  :host([shape="hex"]) {
    --radial-option-radius: 0;
    --radial-shape-clip: polygon(22% 0,78% 0,100% 50%,78% 100%,22% 100%,0 50%);
  }
  :host([shape="tech"]) {
    --radial-option-width: 108px;
    --radial-option-height: 82px;
    --radial-option-radius: 18px 34px 18px 34px;
    --radial-shape-clip: none;
  }

  :host([theme="flower"]) {
    --radial-primary: #ffffff;
    --radial-primary-text: #394153;
    --radial-option-text: #ffffff;
    --radial-option-border: rgba(255,255,255,.68);
    --radial-shadow: 0 16px 34px rgba(53,60,76,.16);
    --radial-option-shadow: 0 10px 22px rgba(61,58,84,.18);
    --radial-trigger-bg: #ffffff;
    --radial-trigger-text: #394153;
    --radial-trigger-border: #e5e9ef;
    --radial-arrow-bg: #ffffff;
    --radial-arrow-text: #59677e;
  }

  :host([theme="future"]) {
    --radial-primary: #071d2b;
    --radial-primary-text: #e7fbff;
    --radial-option-bg: #102b3a;
    --radial-option-text: #e9fcff;
    --radial-option-border: #46dfff;
    --radial-shadow: 0 0 0 2px rgba(62,218,255,.45), 0 0 30px rgba(29,181,255,.25);
    --radial-option-shadow: 0 0 0 1px rgba(65,220,255,.34), 0 0 16px rgba(35,190,255,.2);
    --radial-trigger-bg: radial-gradient(circle at 40% 32%, #173d54, #071824 64%);
    --radial-trigger-text: #e9fcff;
    --radial-trigger-border: #49dcff;
    --radial-arrow-bg: #0a2331;
    --radial-arrow-text: #7ceeff;
  }

  :host([theme="future"]) .trigger { box-shadow: 0 0 0 4px #091622, 0 0 0 7px #49dcff, 0 0 0 11px #0c2333, 0 0 26px rgba(62,218,255,.35); }
  :host([theme="future"]) .trigger::after { inset: 12px; border: 2px solid #61e8ff; box-shadow: inset 0 0 12px rgba(76,226,255,.35); }
  :host([theme="future"]) .trigger-flower { display: none; }
  :host([theme="future"]) .trigger-center { width: 56px; height: 56px; background: transparent; border: 0; box-shadow: none; }
  :host([theme="future"]) .trigger-label { color: #effcff; text-shadow: 0 0 8px rgba(79,225,255,.65); }
  :host([theme="future"]) .hub { background: radial-gradient(circle at 40% 32%, #173d54, #071824 68%); border: 4px solid #49dcff; color: #effcff; box-shadow: 0 0 0 4px #081521, 0 0 0 7px rgba(73,220,255,.45), 0 0 28px rgba(49,202,255,.27); }
  :host([theme="future"]) .option { background: linear-gradient(145deg, rgba(83,154,190,.22), rgba(8,25,38,.08) 55%), var(--slot-bg, var(--radial-option-bg)); text-shadow: 0 0 6px rgba(74,222,255,.4); }
  :host([theme="future"]) .option[aria-selected="true"] { box-shadow: 0 0 0 2px #8af2ff, 0 0 20px rgba(54,210,255,.75), inset 0 0 20px rgba(39,194,255,.22); }

  @media (prefers-reduced-motion: reduce) { :host { --radial-transition: 1ms linear; } }
`;

function makeTemplate({ rotary = false } = {}) {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      ${sharedStyles}
      ${rotary ? `
      .arrows { position: absolute; left: 50%; bottom: 4px; transform: translateX(-50%); display: flex; gap: 12px; z-index: 8; }
      .arrow { width: var(--radial-arrow-size); height: var(--radial-arrow-size); border-radius: 50%; border: 1px solid color-mix(in srgb,var(--radial-arrow-text),transparent 72%); background: var(--radial-arrow-bg); color: var(--radial-arrow-text); box-shadow: var(--radial-option-shadow); font: inherit; font-size: 1.75rem; line-height: 1; cursor: pointer; }
      ` : ''}
    </style>
    <div class="root" part="root">
      <div class="trigger-wrap">
        <button class="trigger" part="trigger" type="button" aria-haspopup="listbox" aria-expanded="false">
          <span class="trigger-flower" aria-hidden="true"></span>
          <span class="trigger-center" part="glyph"></span>
        </button>
        <span class="trigger-label" part="trigger-label"></span>
      </div>
      <div class="stage" part="stage" role="listbox">
        <div class="hub" part="hub"><strong part="label"></strong><small part="hint"></small></div>
        <div class="options" part="options"></div>
        ${rotary ? `<div class="arrows" part="arrows"><button class="arrow previous" part="previous" type="button" aria-label="Previous options">‹</button><button class="arrow next" part="next" type="button" aria-label="Next options">›</button></div>` : ''}
      </div>
    </div>`;
  return template;
}

const radialTemplate = makeTemplate();
const rotaryTemplate = makeTemplate({ rotary: true });

class SelectorBase extends HTMLElement {
  static formAssociated = true;
  static get observedAttributes() { return ['value','label','hint','disabled','open','shape','theme']; }

  constructor(template) {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(template.content.cloneNode(true));
    this._internals = this.attachInternals ? this.attachInternals() : null;
    this.$triggerWrap = this.shadowRoot.querySelector('.trigger-wrap');
    this.$trigger = this.shadowRoot.querySelector('.trigger');
    this.$triggerFlower = this.shadowRoot.querySelector('.trigger-flower');
    this.$triggerCenter = this.shadowRoot.querySelector('.trigger-center');
    this.$triggerLabel = this.shadowRoot.querySelector('.trigger-label');
    this.$stage = this.shadowRoot.querySelector('.stage');
    this.$hubLabel = this.shadowRoot.querySelector('.hub strong');
    this.$hubHint = this.shadowRoot.querySelector('.hub small');
    this.$options = this.shadowRoot.querySelector('.options');
    this.$trigger.addEventListener('click', () => this.toggle());
    this.addEventListener('keydown', (event) => this._onKeyDown(event));
  }

  connectedCallback() {
    if (!this.hasAttribute('tabindex')) this.tabIndex = 0;
    if (!this.hasAttribute('shape')) this.setAttribute('shape','petal');
    this._sync();
    this._observeOptions();
  }

  disconnectedCallback() { this._observer?.disconnect(); }
  attributeChangedCallback() { if (this.isConnected) this._sync(); }

  _observeOptions() {
    this._observer?.disconnect();
    this._observer = new MutationObserver(() => this._sync());
    this._observer.observe(this, { childList: true, subtree: true, attributes: true, characterData: true });
  }

  get options() {
    return [...this.querySelectorAll(':scope > option')].map((option, index) => ({
      value: option.value,
      label: option.textContent.trim(),
      disabled: option.disabled,
      selected: option.selected,
      index
    }));
  }

  get value() { return this.getAttribute('value') ?? this.querySelector(':scope > option[selected]')?.value ?? ''; }
  set value(next) { this.setAttribute('value', next ?? ''); }
  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(value) { this.toggleAttribute('disabled', Boolean(value)); }

  open() {
    if (!this.disabled) {
      this.setAttribute('open','');
      this.dispatchEvent(new CustomEvent('open'));
    }
  }

  close() {
    if (this.hasAttribute('open')) {
      this.removeAttribute('open');
      this.dispatchEvent(new CustomEvent('close'));
    }
  }

  toggle() { this.hasAttribute('open') ? this.close() : this.open(); }

  _paletteColor(index) {
    const style = getComputedStyle(this);
    const slot = (index % 8) + 1;
    return style.getPropertyValue(`--radial-petal-${slot}`).trim() || '#4e9df3';
  }

  _renderTrigger(selected, options) {
    this.$triggerFlower.innerHTML = '';
    const visible = Math.min(Math.max(options.length, 6), 8);

    for (let i = 0; i < visible; i++) {
      const petal = document.createElement('i');
      petal.className = 'mini-petal';
      petal.style.setProperty('--mini-color', this._paletteColor(i));
      petal.style.transform = `rotate(${i * 360 / visible}deg)`;
      this.$triggerFlower.append(petal);
    }

    this.$triggerLabel.textContent = selected?.label || this.getAttribute('label') || 'Select';
  }

  _choose(option) {
    if (option.disabled) return;
    this.setAttribute('value', option.value);
    [...this.querySelectorAll(':scope > option')].forEach((element) => {
      element.selected = element.value === option.value;
    });
    this._internals?.setFormValue(option.value);
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    this.close();
  }

  _sync() {
    const options = this.options;
    const selected = options.find((option) => option.value === this.value) ||
      options.find((option) => option.selected) ||
      options[0];

    this.$hubLabel.textContent = this.getAttribute('label') || 'Choose an option';
    const hint = this.getAttribute('hint') || '';
    this.$hubHint.textContent = hint;
    this.$hubHint.hidden = !hint;
    this.$trigger.disabled = this.disabled;
    this.$trigger.setAttribute('aria-expanded', String(this.hasAttribute('open')));
    this._internals?.setFormValue(selected?.value || this.value || '');
    this._renderTrigger(selected, options);
    this._renderOptions(options);
  }

  _makeOption(option, angle, radius, opacity = 1, scale = 1) {
    const radians = angle * Math.PI / 180;
    const button = document.createElement('button');
    const label = document.createElement('span');

    button.type = 'button';
    button.className = 'option';
    button.part = 'option';
    button.role = 'option';
    button.disabled = option.disabled;
    button.setAttribute('aria-selected', String(option.value === this.value));
    label.textContent = option.label;
    button.append(label);

    button.style.setProperty('--slot-x', `${Math.cos(radians) * radius}px`);
    button.style.setProperty('--slot-y', `${Math.sin(radians) * radius}px`);
    button.style.setProperty('--slot-opacity', String(opacity));
    button.style.setProperty('--slot-scale', String(scale));

    const theme = this.getAttribute('theme') || '';
    const shape = this.getAttribute('shape') || '';

    if (theme === 'flower') {
      button.style.setProperty('--slot-bg', this._paletteColor(option.index));
      button.style.setProperty('--slot-text', '#ffffff');
      button.style.setProperty('--slot-border', 'rgba(255,255,255,.78)');
    }

    if (shape === 'petal' || shape === 'tech') {
      const rotation = angle + 90;
      button.style.setProperty('--slot-rotate', `${rotation}deg`);
      button.style.setProperty('--slot-counter-rotate', `${-rotation}deg`);
    } else {
      button.style.setProperty('--slot-rotate', '0deg');
      button.style.setProperty('--slot-counter-rotate', '0deg');
    }

    button.addEventListener('click', (event) => {
      event.stopPropagation();
      this._choose(option);
    });

    return button;
  }

  _onKeyDown(event) {
    if (event.key === 'Escape') {
      this.close();
      return;
    }
    if ((event.key === 'Enter' || event.key === ' ') && !this.hasAttribute('open')) {
      event.preventDefault();
      this.open();
    }
  }
}

export class RadialSelect extends SelectorBase {
  constructor() { super(radialTemplate); }

  _renderOptions(options) {
    this.$options.innerHTML = '';
    const count = Math.min(options.length, 8);
    if (!count) return;
    const radius = parseFloat(getComputedStyle(this).getPropertyValue('--radial-radius')) || 136;

    options.slice(0, 8).forEach((option, index) => {
      const angle = -90 + (index * 360) / count;
      this.$options.append(this._makeOption(option, angle, radius));
    });
  }
}

export class RotarySelect extends SelectorBase {
  static get observedAttributes() { return [...super.observedAttributes, 'visible-count']; }

  constructor() {
    super(rotaryTemplate);
    this._offset = 0;
    this._lastAngle = null;
    this._accumulatedAngle = 0;
    this._dragStartOffset = 0;
    this.$prev = this.shadowRoot.querySelector('.previous');
    this.$next = this.shadowRoot.querySelector('.next');
    this.$prev.addEventListener('pointerdown', (event) => event.stopPropagation());
    this.$next.addEventListener('pointerdown', (event) => event.stopPropagation());
    this.$prev.addEventListener('click', (event) => { event.stopPropagation(); this.rotate(-1); });
    this.$next.addEventListener('click', (event) => { event.stopPropagation(); this.rotate(1); });
    this.$stage.addEventListener('pointerdown', (event) => this._onPointerDown(event));
    this.$stage.addEventListener('pointermove', (event) => this._onPointerMove(event));
    this.$stage.addEventListener('pointerup', () => this._onPointerUp());
    this.$stage.addEventListener('pointercancel', () => this._onPointerUp());
    this.$stage.addEventListener('wheel', (event) => this._onWheel(event), { passive: false });
  }

  _slotAngle() {
    const visibleCount = Math.max(3, Math.min(
      parseInt(this.getAttribute('visible-count') || '7', 10),
      this.options.length || 7
    ));
    return visibleCount <= 5 ? 54 : 44;
  }

  rotate(delta) {
    if (!this.options.length) return;
    this._offset += delta;
    this._renderOptions(this.options);
    this.dispatchEvent(new CustomEvent('rotate', { detail: { offset: this._offset } }));
  }

  _pointerAngle(event) {
    const bounds = this.$stage.getBoundingClientRect();
    const x = event.clientX - (bounds.left + bounds.width / 2);
    const y = event.clientY - (bounds.top + bounds.height / 2);
    return Math.atan2(y, x) * 180 / Math.PI;
  }

  _onPointerDown(event) {
    if (event.target.closest('.arrow') || event.target.closest('.option')) return;
    this._lastAngle = this._pointerAngle(event);
    this._accumulatedAngle = 0;
    this._dragStartOffset = this._offset;
    this.$stage.setPointerCapture?.(event.pointerId);
  }

  _onPointerMove(event) {
    if (this._lastAngle === null) return;
    const angle = this._pointerAngle(event);
    let delta = angle - this._lastAngle;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    this._accumulatedAngle += delta;
    this._lastAngle = angle;

    const slotDelta = Math.round(this._accumulatedAngle / this._slotAngle());
    const next = this._dragStartOffset + slotDelta;

    if (next !== this._offset) {
      this._offset = next;
      this._renderOptions(this.options);
      this.dispatchEvent(new CustomEvent('rotate', { detail: { offset: this._offset } }));
    }
  }

  _onPointerUp() {
    this._lastAngle = null;
    this._accumulatedAngle = 0;
  }

  _onWheel(event) {
    event.preventDefault();
    this.rotate(event.deltaY > 0 || event.deltaX > 0 ? 1 : -1);
  }

  _onKeyDown(event) {
    super._onKeyDown(event);
    if (!this.hasAttribute('open')) return;

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.rotate(-1);
    }
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      this.rotate(1);
    }
  }

  _renderOptions(options) {
    this.$options.innerHTML = '';
    if (!options.length) return;

    const visibleCount = Math.max(3, Math.min(
      parseInt(this.getAttribute('visible-count') || '7', 10),
      options.length
    ));
    const half = Math.floor(visibleCount / 2);
    const radius = parseFloat(getComputedStyle(this).getPropertyValue('--radial-radius')) || 136;
    const slotAngle = this._slotAngle();

    for (let i = 0; i < visibleCount; i++) {
      const relative = i - half;
      const raw = this._offset + relative;
      const index = ((raw % options.length) + options.length) % options.length;
      const option = options[index];
      const angle = -90 + relative * slotAngle;
      const edge = Math.abs(relative) / Math.max(1, half);
      const opacity = Math.max(.2, 1 - edge * .66);
      const scale = 1 - edge * .12;

      this.$options.append(this._makeOption(option, angle, radius, opacity, scale));
    }
  }
}

if (!customElements.get('radial-select')) customElements.define('radial-select', RadialSelect);
if (!customElements.get('rotary-select')) customElements.define('rotary-select', RotarySelect);
