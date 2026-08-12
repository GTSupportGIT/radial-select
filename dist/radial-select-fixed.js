import { RadialSelect, RotarySelect } from './radial-select.js';

function chooseOption(option) {
  if (!option || option.disabled) return;

  const nextValue = option.value;
  const optionElements = [...this.querySelectorAll(':scope > option')];

  // Prevent the light-DOM observer from re-rendering halfway through the
  // selection update. Keep the option state and value attribute in sync,
  // then render once from the finished state.
  this._observer?.disconnect();

  optionElements.forEach((element) => {
    const selected = element.value === nextValue;
    element.selected = selected;
    element.toggleAttribute('selected', selected);
  });

  this.setAttribute('value', nextValue);
  this._internals?.setFormValue(nextValue);
  this._sync();
  this._observeOptions();

  this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  this.close();
}

RadialSelect.prototype._choose = chooseOption;
RotarySelect.prototype._choose = chooseOption;

export { RadialSelect, RotarySelect };
