# Radial Select

Two touch-first Web Components for replacing traditional dropdowns with large, finger-friendly choices.

- `<radial-select>` — intended for **2–8 choices**. All choices expand around the centre at once.
- `<rotary-select>` — intended for **longer lists**. A subset of choices stays visible and the user rotates through the list.

Both are framework-independent custom elements and work in plain HTML, React, Vue, Angular, or any browser environment that supports Web Components.

## Quick start

```html
<script type="module" src="./radial-select.js"></script>

<radial-select name="mode" label="Choose option" hint="Tap a choice">
  <option value="a">Option A</option>
  <option value="b">Option B</option>
  <option value="c">Option C</option>
</radial-select>
```

For a longer list:

```html
<rotary-select name="item" label="Choose option" hint="Rotate to browse" visible-count="7">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
  <option value="4">Option 4</option>
  <option value="5">Option 5</option>
  <option value="6">Option 6</option>
  <option value="7">Option 7</option>
  <option value="8">Option 8</option>
  <option value="9">Option 9</option>
</rotary-select>
```

## Which one should I use?

Use `<radial-select>` when all choices can comfortably fit around the hub. The component intentionally shows no scrolling or rotation controls.

Use `<rotary-select>` when the list is larger. Circular finger movement, mouse wheel, arrow keys, and the two bottom arrow buttons rotate choices through the visible ring.

## Attributes

Shared by both controls:

- `name` — form field name.
- `value` — current selected value.
- `label` — centre hub title.
- `hint` — secondary centre text.
- `shape` — `rounded`, `circle`, `petal`, `hex`, or `tech`.
- `disabled` — disables the control.
- `open` — opens the control.

`<rotary-select>` also supports:

- `visible-count` — number of options kept visible while rotating. Default `7`.

## Styling with CSS custom properties

Both elements use the same CSS variables, so themes can be shared:

```css
radial-select,
rotary-select {
  --radial-size: 360px;
  --radial-radius: 128px;

  --radial-primary: #174b3a;
  --radial-primary-text: #fff;
  --radial-option-bg: #f7fbf8;
  --radial-option-text: #174b3a;
  --radial-option-border: #a8cbbd;

  --radial-font-family: system-ui, sans-serif;
  --radial-option-font-size: 1rem;
  --radial-hub-font-size: 1.15rem;
  --radial-hint-font-size: .9rem;

  --radial-option-width: 108px;
  --radial-option-height: 72px;
  --radial-option-radius: 28px;
  --radial-hub-size: 146px;
  --radial-trigger-size: 88px;
  --radial-arrow-size: 48px;

  --radial-shadow: 0 16px 40px rgba(23,75,58,.14);
  --radial-option-shadow: 0 10px 24px rgba(23,75,58,.08);
  --radial-transition: 320ms cubic-bezier(.2,.8,.2,1);
}
```

## Shape presets

```html
<radial-select shape="rounded">...</radial-select>
<radial-select shape="circle">...</radial-select>
<radial-select shape="petal">...</radial-select>
<radial-select shape="hex">...</radial-select>
<radial-select shape="tech">...</radial-select>
```

The same presets work with `<rotary-select>`.

Advanced users can define their own shape:

```css
radial-select,
rotary-select {
  --radial-option-radius: 0;
  --radial-shape-clip: polygon(20% 0, 80% 0, 100% 65%, 75% 100%, 25% 100%, 0 65%);
}
```

## CSS parts

Shared parts:

- `root`
- `trigger`
- `glyph`
- `trigger-label`
- `stage`
- `hub`
- `label`
- `hint`
- `options`
- `option`

`<rotary-select>` additionally exposes:

- `arrows`
- `previous`
- `next`

Example:

```css
rotary-select::part(option) {
  border-width: 2px;
  text-transform: uppercase;
}

rotary-select::part(hub) {
  box-shadow: 0 0 28px #00d9ff;
}
```

## Events

Both controls dispatch normal `input` and `change` events when a choice is made, plus custom `open` and `close` events.

`<rotary-select>` also dispatches a `rotate` event.

```js
const selector = document.querySelector('radial-select');
selector.addEventListener('change', () => {
  console.log(selector.value);
});
```

## Form support

Where Form Associated Custom Elements are supported, both controls participate directly in forms:

```html
<form>
  <radial-select name="product">
    <option value="A">Product A</option>
    <option value="B">Product B</option>
  </radial-select>
  <button>Submit</button>
</form>
```

## Interaction

### Radial Select

- Tap/click the compact selector to open.
- All 2–8 options appear around the centre.
- Tap a choice to select it and collapse the control.
- Escape closes the control.

### Rotary Select

- Tap/click the compact selector to open.
- Drag in a circular motion around the centre to rotate options.
- Scroll the mouse wheel to rotate.
- Use arrow keys while open.
- Use the bottom previous/next buttons as a fallback.
- Tap a choice to select it and collapse the control.

## Demo

The included `demo/index.html` intentionally uses generic choices rather than an application-specific example.

Run a simple local web server from the project folder:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/demo/
```

## License

MIT
