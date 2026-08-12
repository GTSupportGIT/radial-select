const sharedStyles = `
  :host {
    --radial-size: 440px;
    --radial-radius: 166px;
    --radial-primary: #174b3a;
    --radial-primary-text: #ffffff;
    --radial-option-bg: #fbfdfc;
    --radial-option-text: #174b3a;
    --radial-option-border: #9bc5b5;
    --radial-option-width: 112px;
    --radial-option-height: 86px;
    --radial-option-radius: 28px;
    --radial-option-font-size: 1rem;
    --radial-hub-size: 144px;
    --radial-hub-font-size: 1.15rem;
    --radial-hint-font-size: .9rem;
    --radial-font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --radial-shadow: 0 18px 42px rgba(23, 75, 58, .14);
    --radial-option-shadow: 0 11px 26px rgba(23, 75, 58, .09);
    --radial-transition: 320ms cubic-bezier(.2,.8,.2,1);
    --radial-trigger-size: 88px;
    --radial-trigger-bg: #ffffff;
    --radial-trigger-text: #174b3a;
    --radial-trigger-border: #bfd9cf;
    --radial-arrow-bg: #ffffff;
    --radial-arrow-text: #174b3a;
    --radial-arrow-size: 48px;
    --radial-shape-clip: none;
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

  .trigger {
    width: var(--radial-trigger-size);
    height: var(--radial-trigger-size);
    border-radius: 50%;
    border: 1px solid var(--radial-trigger-border);
    background: var(--radial-trigger-bg);
    color: var(--radial-trigger-text);
    box-shadow: var(--radial-shadow);
    display: grid;
    place-items: center;
    gap: 4px;
    padding: 8px;
    cursor: pointer;
    transition: transform var(--radial-transition), opacity var(--radial-transition);
    z-index: 5;
  }

  .trigger:hover { transform: scale(1.035); }
  .trigger:focus-visible, .option:focus-visible, .arrow:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--radial-primary), white 35%);
    outline-offset: 3px;
  }

  .glyph { position: relative; width: 34px; height: 34px; display: block; }
  .glyph i {
    position: absolute; left: 50%; top: 50%; width: 10px; height: 18px;
    margin-left: -5px; margin-top: -9px; border-radius: 70% 70% 45% 45%;
    transform-origin: 50% 23px; background: currentColor; opacity: .85;
  }
  .glyph b {
    position: absolute; width: 10px; height: 10px; border-radius: 50%;
    background: currentColor; left: 12px; top: 12px;
  }
  .trigger-label {
    max-width: calc(var(--radial-trigger-size) - 12px); overflow: hidden;
    text-overflow: ellipsis; white-space: nowrap; font-size: .72rem;
    font-weight: 700; line-height: 1;
  }

  .stage {
    position: absolute; inset: 0; display: grid; place-items: center;
    opacity: 0; pointer-events: none; transform: scale(.22);
    transition: transform var(--radial-transition), opacity var(--radial-transition);
  }
  :host([open]) .stage { opacity: 1; pointer-events: auto; transform: scale(1); }
  :host([open]) .trigger { opacity: 0; pointer-events: none; transform: scale(.4); }

  .hub {
    width: var(--radial-hub-size); height: var(--radial-hub-size); border-radius: 50%;
    background: var(--radial-primary); color: var(--radial-primary-text);
    box-shadow: var(--radial-shadow); display: grid; align-content: center;
    justify-items: center; text-align: center; padding: 16px; z-index: 4;
    pointer-events: none;
  }
  .hub strong { font-size: var(--radial-hub-font-size); }
  .hub small { font-size: var(--radial-hint-font-size); opacity: .72; margin-top: 4px; }

  .options { position: absolute; inset: 0; pointer-events: none; }

  .option {
    position: absolute; left: 50%; top: 50%;
    width: var(--radial-option-width); height: var(--radial-option-height);
    border: 1px solid var(--radial-option-border); border-radius: var(--radial-option-radius);
    clip-path: var(--radial-shape-clip); background: var(--radial-option-bg);
    color: var(--radial-option-text); box-shadow: var(--radial-option-shadow);
    font: inherit; font-size: var(--radial-option-font-size); font-weight: 750;
    cursor: pointer; pointer-events: auto; opacity: var(--slot-opacity, 1);
    transform:
      translate(-50%, -50%)
      translate(var(--slot-x), var(--slot-y))
      rotate(var(--slot-rotate, 0deg))
      scale(var(--slot-scale, 1));
    transition: transform var(--radial-transition), opacity var(--radial-transition),
      background var(--radial-transition), color var(--radial-transition),
      border-color var(--radial-transition);
    z-index: 2;
  }

  .option > span {
    display: grid; place-items: center; width: 100%; height: 100%;
    transform: rotate(var(--slot-counter-rotate, 0deg));
    transition: transform var(--radial-transition);
  }

  .option[aria-selected="true"] {
    background: color-mix(in srgb, var(--radial-primary), white 86%);
    border-color: color-mix(in srgb, var(--radial-primary), white 28%);
  }

  .option:hover:not(:disabled) {
    transform:
      translate(-50%, -50%)
      translate(var(--slot-x), var(--slot-y))
      rotate(var(--slot-rotate, 0deg))
      scale(calc(var(--slot-scale, 1) * 1.055));
  }
  .option:disabled { cursor: not-allowed; filter: grayscale(.7); opacity: .25; }

  :host([shape="circle"]) {
    --radial-option-width: 92px; --radial-option-height: 92px;
    --radial-option-radius: 50%; --radial-shape-clip: none;
  }

  :host([shape="petal"]) {
    --radial-option-width: 108px;
    --radial-option-height: 126px;
    --radial-option-radius: 0;
    --radial-shape-clip: polygon(50% 100%, 28% 90%, 10% 70%, 3% 44%, 10% 20%, 29% 5%, 50% 0, 71% 5%, 90% 20%, 97% 44%, 90% 70%, 72% 90%);
  }

  :host([shape="hex"]) {
    --radial-option-radius: 0;
    --radial-shape-clip: polygon(22% 0, 78% 0, 100% 50%, 78% 100%, 22% 100%, 0 50%);
  }

  :host([shape="tech"]) {
    --radial-option-radius: 0;
    --radial-shape-clip: polygon(16% 0, 84% 0, 100% 30%, 92% 100%, 8% 100%, 0 30%);
  }

  @media (prefers-reduced-motion: reduce) { :host { --radial-transition: 1ms linear; } }
`;

function makeTemplate({ rotary = false } = {}) {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      ${sharedStyles}
      ${rotary ? `
      .arrows {
        position: absolute; left: 50%; bottom: 2px; transform: translateX(-50%);
        display: flex; gap: 12px; z-index: 6;
      }
      .arrow {
        width: var(--radial-arrow-size); height: var(--radial-arrow-size);
        border-radius: 50%; border: 0; background: var(--radial-arrow-bg);
        color: var(--radial-arrow-text); box-shadow: var(--radial-option-shadow);
        font: inherit; font-size: 2rem; line-height: 1; cursor: pointer;
      }` : ''}
    </style>
    <div class="root" part="root">
      <button class="trigger" part="trigger" type="button" aria-haspopup="listbox" aria-expanded="false">
        <span class="glyph" part="glyph" aria-hidden="true"></span>
        <span class="trigger-label" part="trigger-label"></span>
      </button>
      <div class="stage" part="stage" role="listbox">
        <div class="hub" part="hub">
          <strong part="label"></strong>
          <small part="hint"></small>
        </div>
        <div class="options" part="options"></div>
        ${rotary ? `<div class="arrows" part="arrows">
          <button class="arrow previous" part="previous" type="button" aria-label="Previous options">‹</button>
          <button class="arrow next" part="next" type="button" aria-label="Next options">›</button>
        </div>` : ''}
      </div>
    </div>`;
  return template;
}

const radialTemplate = makeTemplate();
const rotaryTemplate = makeTemplate({ rotary: true });

class SelectorBase extends HTMLElement {
  static formAssociated = true;
  static get observedAttributes() { return ['value', 'label', 'hint', 'disabled', 'open']; }

  constructor(template) {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(template.content.cloneNode(true));
    this._internals = this.attachInternals ? this.attachInternals() : null;
    this.$root = this.shadowRoot.querySelector('.root');
    this.$trigger = this.shadowRoot.querySelector('.trigger');
    this.$glyph = this.shadowRoot.querySelector('.glyph');
    this.$triggerLabel = this.shadowRoot.querySelector('.trigger-label');
    this.$stage = this.shadowRoot.querySelector('.stage');
    this.$hubLabel = this.shadowRoot.querySelector('.hub strong');
    this.$hubHint = this.shadowRoot.querySelector('.hub small');
    this.$options = this.shadowRoot.querySelector('.options');
    this.$trigger.addEventListener('click', () => this.toggle());
    this.addEventListener('keydown', (e) => this._onKeyDown(e));
  }

  connectedCallback() {
    if (!this.hasAttribute('tabindex')) this.tabIndex = 0;
    if (!this.hasAttribute('shape')) this.setAttribute('shape', 'petal');
    this._renderGlyph();
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

  _renderGlyph() {
    this.$glyph.innerHTML = '';
    for (let i = 0; i < 6; i++) {
      const petal = document.createElement('i');
      petal.style.transform = `rotate(${i * 60}deg) translateY(-13px)`;
      this.$glyph.append(petal);
    }
    this.$glyph.append(document.createElement('b'));
  }

  get options() {
    return [...this.querySelectorAll(':scope > option')].map((option) => ({
      value: option.value,
      label: option.textContent.trim(),
      disabled: option.disabled,
      selected: option.selected,
    }));
  }
  get value() { return this.getAttribute('value') ?? this.querySelector(':scope > option[selected]')?.value ?? ''; }
  set value(next) { this.setAttribute('value', next ?? ''); }
  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(value) { this.toggleAttribute('disabled', Boolean(value)); }

  open() {
    if (this.disabled) return;
    this.setAttribute('open', '');
    this.dispatchEvent(new CustomEvent('open'));
  }
  close() {
    if (!this.hasAttribute('open')) return;
    this.removeAttribute('open');
    this.dispatchEvent(new CustomEvent('close'));
  }
  toggle() { this.hasAttribute('open') ? this.close() : this.open(); }

  _choose(option) {
    if (option.disabled) return;
    this.setAttribute('value', option.value);
    [...this.querySelectorAll(':scope > option')].forEach((el) => { el.selected = el.value === option.value; });
    this._internals?.setFormValue(option.value);
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    this.close();
  }

  _sync() {
    const options = this.options;
    const selected = options.find((option) => option.value === this.value) || options.find((option) => option.selected);
    const label = this.getAttribute('label') || 'Select';
    const hint = this.getAttribute('hint') || '';
    this.$hubLabel.textContent = label;
    this.$hubHint.textContent = hint;
    this.$hubHint.hidden = !hint;
    this.$triggerLabel.textContent = selected?.label || label;
    this.$trigger.disabled = this.disabled;
    this.$trigger.setAttribute('aria-expanded', String(this.hasAttribute('open')));
    this._internals?.setFormValue(selected?.value || this.value || '');
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
    label.textContent = option.label;
    button.append(label);
    button.setAttribute('aria-selected', String(option.value === this.value));
    button.style.setProperty('--slot-x', `${Math.cos(radians) * radius}px`);
    button.style.setProperty('--slot-y', `${Math.sin(radians) * radius}px`);
    button.style.setProperty('--slot-opacity', String(opacity));
    button.style.setProperty('--slot-scale', String(scale));

    if (this.getAttribute('shape') === 'petal') {
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
    if (event.key === 'Escape') { this.close(); return; }
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
    const radius = parseFloat(getComputedStyle(this).getPropertyValue('--radial-radius')) || 166;
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
    this._slotAngle = 44;
    this.$prev = this.shadowRoot.querySelector('.previous');
    this.$next = this.shadowRoot.querySelector('.next');
    this.$prev.addEventListener('pointerdown', (e) => e.stopPropagation());
    this.$next.addEventListener('pointerdown', (e) => e.stopPropagation());
    this.$prev.addEventListener('click', (e) => { e.stopPropagation(); this.rotate(-1); });
    this.$next.addEventListener('click', (e) => { e.stopPropagation(); this.rotate(1); });
    this.$stage.addEventListener('pointerdown', (e) => this._onPointerDown(e));
    this.$stage.addEventListener('pointermove', (e) => this._onPointerMove(e));
    this.$stage.addEventListener('pointerup', () => this._onPointerUp());
    this.$stage.addEventListener('pointercancel', () => this._onPointerUp());
    this.$stage.addEventListener('wheel', (e) => this._onWheel(e), { passive: false });
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
    const slotDelta = Math.round(this._accumulatedAngle / this._slotAngle);
    const next = this._dragStartOffset + slotDelta;
    if (next !== this._offset) {
      this._offset = next;
      this._renderOptions(this.options);
      this.dispatchEvent(new CustomEvent('rotate', { detail: { offset: this._offset } }));
    }
  }

  _onPointerUp() { this._lastAngle = null; this._accumulatedAngle = 0; }
  _onWheel(event) { event.preventDefault(); this.rotate(event.deltaY > 0 || event.deltaX > 0 ? 1 : -1); }

  _onKeyDown(event) {
    super._onKeyDown(event);
    if (!this.hasAttribute('open')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') { event.preventDefault(); this.rotate(-1); }
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') { event.preventDefault(); this.rotate(1); }
  }

  _renderOptions(options) {
    this.$options.innerHTML = '';
    if (!options.length) return;
    const visibleCount = Math.max(3, Math.min(parseInt(this.getAttribute('visible-count') || '7', 10), options.length));
    const half = Math.floor(visibleCount / 2);
    const radius = parseFloat(getComputedStyle(this).getPropertyValue('--radial-radius')) || 166;

    for (let i = 0; i < visibleCount; i++) {
      const relative = i - half;
      const raw = this._offset + relative;
      const index = ((raw % options.length) + options.length) % options.length;
      const option = options[index];
      const angle = -90 + relative * this._slotAngle;
      const edge = Math.abs(relative) / Math.max(1, half);
      const opacity = Math.max(.18, 1 - edge * .68);
      const scale = 1 - edge * .14;
      this.$options.append(this._makeOption(option, angle, radius, opacity, scale));
    }
  }
}

if (!customElements.get('radial-select')) customElements.define('radial-select', RadialSelect);
if (!customElements.get('rotary-select')) customElements.define('rotary-select', RotarySelect);
