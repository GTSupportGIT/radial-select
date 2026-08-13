const PETAL_PATH = "M36 132 C36 122 33 114 27 106 C20 98 12 88 10 73 C7 55 8 36 17 20 C25 6 38 1 54 1 C70 1 83 6 91 20 C100 36 101 55 98 73 C96 88 88 98 81 106 C75 114 72 122 72 132 C62 129 46 129 36 132 Z";

const sharedStyles = `
  :host {
    --radial-size:440px; --radial-radius:136px; --radial-primary:#fff; --radial-primary-text:#2e3642;
    --radial-option-bg:#fff; --radial-option-text:#fff; --radial-option-border:rgba(255,255,255,.65);
    --radial-option-width:108px; --radial-option-height:132px; --radial-option-font-size:1rem;
    --radial-hub-size:112px; --radial-hub-font-size:1.05rem; --radial-hint-font-size:.78rem;
    --radial-font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    --radial-option-shadow:0 10px 22px rgba(50,55,76,.16); --radial-transition:420ms cubic-bezier(.2,.82,.22,1);
    --radial-trigger-size:112px; --radial-trigger-bg:#fff; --radial-trigger-text:#30384a; --radial-trigger-border:#e5e9ef;
    --radial-arrow-bg:#fff; --radial-arrow-text:#4d5d74; --radial-arrow-size:46px; --radial-shape-clip:none; --radial-option-radius:28px;
    --radial-petal-1:#ff6486; --radial-petal-2:#ffad36; --radial-petal-3:#a7d74c; --radial-petal-4:#3cc7c0;
    --radial-petal-5:#4e9df3; --radial-petal-6:#9973eb; --radial-petal-7:#d65ed6; --radial-petal-8:#ff7b71;
    display:inline-block; font-family:var(--radial-font-family); color:var(--radial-option-text); contain:layout style;
  }
  *,*::before,*::after{box-sizing:border-box}
  .root{position:relative;width:var(--radial-size);height:var(--radial-size);display:grid;place-items:center;touch-action:none;user-select:none;-webkit-user-select:none}
  .trigger-wrap{position:relative;width:var(--radial-trigger-size);min-height:calc(var(--radial-trigger-size) + 34px);display:grid;justify-items:center;align-content:start;z-index:7;transition:transform var(--radial-transition),opacity 220ms ease}
  .trigger{position:relative;width:var(--radial-trigger-size);height:var(--radial-trigger-size);border-radius:50%;border:1px solid var(--radial-trigger-border);background:var(--radial-trigger-bg);color:var(--radial-trigger-text);box-shadow:0 10px 26px rgba(52,62,78,.16),inset 0 0 0 7px rgba(255,255,255,.72);display:grid;place-items:center;cursor:pointer;padding:0;overflow:visible}
  .trigger::after{content:"";position:absolute;inset:8px;border-radius:50%;border:1px solid rgba(143,157,178,.18);pointer-events:none}
  .trigger:hover{transform:scale(1.045)}
  .trigger:focus-visible,.arrow:focus-visible{outline:3px solid color-mix(in srgb,var(--radial-primary-text),white 55%);outline-offset:4px}
  .trigger-flower{position:absolute;width:78px;height:78px;left:50%;top:50%;transform:translate(-50%,-50%)}
  .mini-petal{position:absolute;left:50%;top:50%;width:23px;height:34px;margin-left:-11.5px;margin-top:-31px;transform-origin:50% 31px;background:linear-gradient(145deg,rgba(255,255,255,.72),rgba(255,255,255,0) 48%),var(--mini-color);clip-path:path("M7.5 34 C7.5 31 6.7 28.5 5.5 26.5 C3.5 23 1.5 20 1 15.5 C0.5 10 2 5.5 5.5 2.5 C8 0.5 14.5 0.5 17.5 2.5 C21 5.5 22.5 10 22 15.5 C21.5 20 19.5 23 17.5 26.5 C16.3 28.5 15.5 31 15.5 34 C13.5 33 9.5 33 7.5 34 Z");box-shadow:inset 0 -4px 8px rgba(55,55,80,.08)}
  .trigger-center{position:absolute;left:50%;top:50%;width:25px;height:25px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#f0f2f5 72%);border:2px solid #fff;box-shadow:0 3px 9px rgba(46,55,72,.2);z-index:2;pointer-events:none}
  .trigger-label{margin-top:9px;max-width:160px;color:var(--radial-trigger-text);font-size:.82rem;font-weight:800;line-height:1.2;text-align:center;overflow-wrap:anywhere;text-shadow:none}
  .stage{position:absolute;inset:0;display:grid;place-items:center;opacity:0;pointer-events:none;transform:scale(.28);transition:transform var(--radial-transition),opacity 240ms ease;transform-origin:50% 50%}
  :host([open]) .stage{opacity:1;pointer-events:auto;transform:scale(1)} :host([open]) .trigger-wrap{opacity:0;pointer-events:none;transform:scale(.55)}
  .hub{width:var(--radial-hub-size);height:var(--radial-hub-size);border-radius:50%;background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.98),rgba(255,255,255,.9) 62%,rgba(236,239,244,.96));color:var(--radial-primary-text);border:5px solid rgba(255,255,255,.96);box-shadow:0 12px 26px rgba(55,63,79,.14);display:grid;align-content:center;justify-items:center;text-align:center;padding:12px;z-index:5;pointer-events:none}
  .hub strong{font-size:var(--radial-hub-font-size);line-height:1.08;max-width:88px}.hub small{font-size:var(--radial-hint-font-size);opacity:.66;margin-top:4px;line-height:1.1}
  .options{position:absolute;inset:0;pointer-events:none}
  .option{position:absolute;left:50%;top:50%;width:var(--radial-option-width);height:var(--radial-option-height);border:2px solid var(--slot-border,var(--radial-option-border));border-radius:var(--radial-option-radius);clip-path:var(--radial-shape-clip);background:linear-gradient(145deg,rgba(255,255,255,.66) 0%,rgba(255,255,255,.2) 38%,rgba(255,255,255,0) 55%),var(--slot-bg,var(--radial-option-bg));color:var(--slot-text,var(--radial-option-text));box-shadow:inset 0 -10px 16px rgba(34,39,66,.08),var(--slot-shadow,var(--radial-option-shadow));font:inherit;font-size:var(--radial-option-font-size);font-weight:800;cursor:pointer;pointer-events:auto;opacity:var(--slot-opacity,1);transform:translate(-50%,-50%) translate(var(--slot-x),var(--slot-y)) rotate(var(--slot-rotate,0deg)) scale(var(--slot-scale,1));transition:transform var(--radial-transition),opacity var(--radial-transition),filter 180ms ease,box-shadow 180ms ease;z-index:2}
  .option-label{position:relative;display:grid;place-items:center;width:100%;height:100%;padding:13px;text-align:center;line-height:1.1;transform:rotate(var(--slot-counter-rotate,0deg));transition:transform var(--radial-transition);text-shadow:0 1px 3px rgba(0,0,0,.2);z-index:2;pointer-events:none}
  .option[aria-selected="true"]{filter:saturate(1.08) brightness(1.03);box-shadow:inset 0 -10px 16px rgba(34,39,66,.07),0 0 0 3px rgba(255,255,255,.95),0 12px 28px rgba(56,58,88,.2);z-index:3}
  .option:hover:not(:disabled){filter:saturate(1.07) brightness(1.04);transform:translate(-50%,-50%) translate(var(--slot-x),var(--slot-y)) rotate(var(--slot-rotate,0deg)) scale(calc(var(--slot-scale,1) * 1.06))}
  .option:disabled{cursor:not-allowed;filter:grayscale(.75);opacity:.28}

  .option--petal{border:0;border-radius:0;clip-path:none;background:transparent;box-shadow:none;overflow:visible}
  .option--petal .petal-svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none}
  .option--petal .petal-fill{fill:var(--slot-bg,var(--radial-option-bg));stroke:var(--slot-border,var(--radial-option-border));stroke-width:2.1;vector-effect:non-scaling-stroke;filter:drop-shadow(0 10px 12px rgba(50,55,76,.16))}
  .option--petal .petal-highlight{fill:rgba(255,255,255,.16);pointer-events:none}
  .option--petal .option-label{padding:14px 11px 24px}
  .option--petal[aria-selected="true"]{box-shadow:none;filter:none}
  .option--petal[aria-selected="true"] .petal-fill{stroke:#fff;stroke-width:4;filter:drop-shadow(0 0 8px rgba(255,255,255,.5)) drop-shadow(0 12px 14px rgba(56,58,88,.2))}
  .option--petal:focus-visible{outline:none}.option--petal:focus-visible .petal-fill{stroke:#fff;stroke-width:4;filter:drop-shadow(0 0 9px rgba(255,255,255,.72))}
  .option--petal:hover:not(:disabled) .petal-fill{filter:brightness(1.04) drop-shadow(0 12px 14px rgba(50,55,76,.18))}

  :host([shape="rounded"]){--radial-option-width:112px;--radial-option-height:72px;--radial-option-radius:26px;--radial-shape-clip:none}
  :host([shape="circle"]){--radial-option-width:92px;--radial-option-height:92px;--radial-option-radius:50%;--radial-shape-clip:none}
  :host([shape="petal"]){--radial-option-width:108px;--radial-option-height:132px;--radial-option-radius:0;--radial-shape-clip:none}
  :host([shape="hex"]){--radial-option-width:112px;--radial-option-height:97px;--radial-option-radius:0;--radial-shape-clip:polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)}
  :host([shape="tech"]){--radial-option-width:108px;--radial-option-height:82px;--radial-option-radius:18px 34px 18px 34px;--radial-shape-clip:none}

  :host([theme="flower"]){--radial-primary:#fff;--radial-primary-text:#394153;--radial-option-text:#fff;--radial-option-border:rgba(255,255,255,.72);--radial-option-shadow:0 10px 22px rgba(61,58,84,.18);--radial-trigger-bg:#fff;--radial-trigger-text:#394153;--radial-trigger-border:#e5e9ef;--radial-arrow-bg:#fff;--radial-arrow-text:#59677e}
  :host([theme="future"]){--radial-primary:#071d2b;--radial-primary-text:#e7fbff;--radial-option-bg:#102b3a;--radial-option-text:#e9fcff;--radial-option-border:#46dfff;--radial-option-shadow:0 0 0 1px rgba(65,220,255,.34),0 0 16px rgba(35,190,255,.2);--radial-trigger-bg:radial-gradient(circle at 40% 32%,#173d54,#071824 64%);--radial-trigger-text:#e9fcff;--radial-trigger-border:#49dcff;--radial-arrow-bg:#0a2331;--radial-arrow-text:#7ceeff}
  :host([theme="future"]) .trigger{box-shadow:0 0 0 4px #091622,0 0 0 7px #49dcff,0 0 0 11px #0c2333,0 0 26px rgba(62,218,255,.35)}
  :host([theme="future"]) .trigger::after{inset:12px;border:2px solid #61e8ff;box-shadow:inset 0 0 12px rgba(76,226,255,.35)}
  :host([theme="future"]) .trigger-flower{display:none}:host([theme="future"]) .trigger-center{width:56px;height:56px;background:transparent;border:0;box-shadow:none}:host([theme="future"]) .trigger-label{color:#effcff;text-shadow:0 0 8px rgba(79,225,255,.65)}
  :host([theme="future"]) .hub{background:radial-gradient(circle at 40% 32%,#173d54,#071824 68%);border:4px solid #49dcff;color:#effcff;box-shadow:0 0 0 4px #081521,0 0 0 7px rgba(73,220,255,.45),0 0 28px rgba(49,202,255,.27)}
  :host([theme="future"]) .option{background:linear-gradient(145deg,rgba(83,154,190,.22),rgba(8,25,38,.08) 55%),var(--slot-bg,var(--radial-option-bg));text-shadow:0 0 6px rgba(74,222,255,.4)}
  :host([theme="future"]) .option--petal{background:transparent}:host([theme="future"]) .option--petal .petal-fill{stroke:#46dfff;filter:drop-shadow(0 0 8px rgba(35,190,255,.24))}
  :host([theme="future"]) .option--petal[aria-selected="true"] .petal-fill{stroke:#9cf6ff;stroke-width:3.5;filter:drop-shadow(0 0 11px rgba(54,210,255,.72)) drop-shadow(0 0 20px rgba(54,210,255,.35))}
  @media(prefers-reduced-motion:reduce){:host{--radial-transition:1ms linear}}
`;

function makeTemplate({rotary=false}={}){
  const t=document.createElement('template');
  t.innerHTML=`<style>${sharedStyles}${rotary?`.arrows{position:absolute;left:50%;bottom:4px;transform:translateX(-50%);display:flex;gap:12px;z-index:8}.arrow{width:var(--radial-arrow-size);height:var(--radial-arrow-size);border-radius:50%;border:1px solid color-mix(in srgb,var(--radial-arrow-text),transparent 72%);background:var(--radial-arrow-bg);color:var(--radial-arrow-text);box-shadow:var(--radial-option-shadow);font:inherit;font-size:1.75rem;line-height:1;cursor:pointer}`:''}</style><div class="root" part="root"><div class="trigger-wrap"><button class="trigger" part="trigger" type="button" aria-haspopup="listbox" aria-expanded="false"><span class="trigger-flower" aria-hidden="true"></span><span class="trigger-center" part="glyph"></span></button><span class="trigger-label" part="trigger-label"></span></div><div class="stage" part="stage" role="listbox"><div class="hub" part="hub"><strong part="label"></strong><small part="hint"></small></div><div class="options" part="options"></div>${rotary?`<div class="arrows" part="arrows"><button class="arrow previous" part="previous" type="button" aria-label="Previous options">‹</button><button class="arrow next" part="next" type="button" aria-label="Next options">›</button></div>`:''}</div></div>`;
  return t;
}
const radialTemplate=makeTemplate(),rotaryTemplate=makeTemplate({rotary:true});

class SelectorBase extends HTMLElement{
  static formAssociated=true;
  static get observedAttributes(){return['value','label','hint','disabled','open','shape','theme']}
  constructor(template){super();this.attachShadow({mode:'open'});this.shadowRoot.append(template.content.cloneNode(true));this._internals=this.attachInternals?this.attachInternals():null;this.$trigger=this.shadowRoot.querySelector('.trigger');this.$triggerFlower=this.shadowRoot.querySelector('.trigger-flower');this.$triggerLabel=this.shadowRoot.querySelector('.trigger-label');this.$stage=this.shadowRoot.querySelector('.stage');this.$hubLabel=this.shadowRoot.querySelector('.hub strong');this.$hubHint=this.shadowRoot.querySelector('.hub small');this.$options=this.shadowRoot.querySelector('.options');this.$trigger.addEventListener('click',()=>this.toggle());this.addEventListener('keydown',e=>this._onKeyDown(e))}
  connectedCallback(){if(!this.hasAttribute('tabindex'))this.tabIndex=0;if(!this.hasAttribute('shape'))this.setAttribute('shape','petal');this._sync();this._observeOptions()}
  disconnectedCallback(){this._observer?.disconnect()}
  attributeChangedCallback(){if(this.isConnected)this._sync()}
  _observeOptions(){this._observer?.disconnect();this._observer=new MutationObserver(()=>this._sync());this._observer.observe(this,{childList:true,subtree:true,attributes:true,characterData:true})}
  get options(){return[...this.querySelectorAll(':scope > option')].map((o,index)=>({value:o.value,label:o.textContent.trim(),disabled:o.disabled,selected:o.selected,index}))}
  get value(){return this.getAttribute('value')??this.querySelector(':scope > option[selected]')?.value??''} set value(v){this.setAttribute('value',v??'')}
  get disabled(){return this.hasAttribute('disabled')} set disabled(v){this.toggleAttribute('disabled',Boolean(v))}
  open(){if(!this.disabled){this.setAttribute('open','');this.dispatchEvent(new CustomEvent('open'))}} close(){if(this.hasAttribute('open')){this.removeAttribute('open');this.dispatchEvent(new CustomEvent('close'))}} toggle(){this.hasAttribute('open')?this.close():this.open()}
  _paletteColor(index){const s=getComputedStyle(this),slot=(index%8)+1;return s.getPropertyValue(`--radial-petal-${slot}`).trim()||'#4e9df3'}
  _renderTrigger(selected,options){this.$triggerFlower.innerHTML='';const visible=Math.min(Math.max(options.length,6),8);for(let i=0;i<visible;i++){const p=document.createElement('i');p.className='mini-petal';p.style.setProperty('--mini-color',this._paletteColor(i));p.style.transform=`rotate(${i*360/visible}deg)`;this.$triggerFlower.append(p)}this.$triggerLabel.textContent=selected?.label||this.getAttribute('label')||'Select'}
  _choose(option){if(option.disabled)return;[...this.querySelectorAll(':scope > option')].forEach(el=>{el.selected=el.value===option.value});this.setAttribute('value',option.value);this._internals?.setFormValue(option.value);this._sync();this.dispatchEvent(new Event('input',{bubbles:true,composed:true}));this.dispatchEvent(new Event('change',{bubbles:true,composed:true}));this.close()}
  _sync(){const options=this.options,selected=options.find(o=>o.value===this.value)||options.find(o=>o.selected)||options[0];this.$hubLabel.textContent=this.getAttribute('label')||'Choose an option';const hint=this.getAttribute('hint')||'';this.$hubHint.textContent=hint;this.$hubHint.hidden=!hint;this.$trigger.disabled=this.disabled;this.$trigger.setAttribute('aria-expanded',String(this.hasAttribute('open')));this._internals?.setFormValue(selected?.value||this.value||'');this._renderTrigger(selected,options);this._renderOptions(options)}
  _makePetalSvg(){const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');svg.classList.add('petal-svg');svg.setAttribute('viewBox','0 0 108 132');svg.setAttribute('aria-hidden','true');const fill=document.createElementNS(ns,'path');fill.classList.add('petal-fill');fill.setAttribute('d',PETAL_PATH);svg.append(fill);const hi=document.createElementNS(ns,'path');hi.classList.add('petal-highlight');hi.setAttribute('d',PETAL_PATH);hi.setAttribute('transform','translate(9 7) scale(.82 .72)');svg.append(hi);return svg}
  _makeOption(option,angle,radius,opacity=1,scale=1){const rad=angle*Math.PI/180,button=document.createElement('button'),label=document.createElement('span'),theme=this.getAttribute('theme')||'',shape=this.getAttribute('shape')||'petal';button.type='button';button.className='option';button.part='option';button.role='option';button.disabled=option.disabled;button.setAttribute('aria-selected',String(option.value===this.value));label.className='option-label';label.textContent=option.label;button.style.setProperty('--slot-x',`${Math.cos(rad)*radius}px`);button.style.setProperty('--slot-y',`${Math.sin(rad)*radius}px`);button.style.setProperty('--slot-opacity',String(opacity));button.style.setProperty('--slot-scale',String(scale));if(theme==='flower'){button.style.setProperty('--slot-bg',this._paletteColor(option.index));button.style.setProperty('--slot-text','#fff');button.style.setProperty('--slot-border','rgba(255,255,255,.78)')}if(shape==='petal'){button.classList.add('option--petal');button.append(this._makePetalSvg())}if(shape==='petal'||shape==='tech'){const r=angle+90;button.style.setProperty('--slot-rotate',`${r}deg`);button.style.setProperty('--slot-counter-rotate',`${-r}deg`)}else{button.style.setProperty('--slot-rotate','0deg');button.style.setProperty('--slot-counter-rotate','0deg')}button.append(label);button.addEventListener('click',e=>{e.stopPropagation();this._choose(option)});return button}
  _onKeyDown(e){if(e.key==='Escape'){this.close();return}if((e.key==='Enter'||e.key===' ')&&!this.hasAttribute('open')){e.preventDefault();this.open()}}
  formResetCallback(){const original=this.querySelector(':scope > option[selected]')||this.querySelector(':scope > option');if(original)this.value=original.value}
}

export class RadialSelect extends SelectorBase{constructor(){super(radialTemplate)}_renderOptions(options){this.$options.innerHTML='';const count=Math.min(options.length,8);if(!count)return;const radius=parseFloat(getComputedStyle(this).getPropertyValue('--radial-radius'))||136;options.slice(0,8).forEach((o,i)=>this.$options.append(this._makeOption(o,-90+i*360/count,radius)))}}

export class RotarySelect extends SelectorBase{
  static get observedAttributes(){return[...super.observedAttributes,'visible-count']}
  constructor(){super(rotaryTemplate);this._offset=0;this._lastAngle=null;this._accumulatedAngle=0;this._dragStartOffset=0;this.$prev=this.shadowRoot.querySelector('.previous');this.$next=this.shadowRoot.querySelector('.next');this.$prev.addEventListener('pointerdown',e=>e.stopPropagation());this.$next.addEventListener('pointerdown',e=>e.stopPropagation());this.$prev.addEventListener('click',e=>{e.stopPropagation();this.rotate(-1)});this.$next.addEventListener('click',e=>{e.stopPropagation();this.rotate(1)});this.$stage.addEventListener('pointerdown',e=>this._onPointerDown(e));this.$stage.addEventListener('pointermove',e=>this._onPointerMove(e));this.$stage.addEventListener('pointerup',()=>this._onPointerUp());this.$stage.addEventListener('pointercancel',()=>this._onPointerUp());this.$stage.addEventListener('wheel',e=>this._onWheel(e),{passive:false})}
  _slotAngle(){const n=Math.max(3,Math.min(parseInt(this.getAttribute('visible-count')||'7',10),this.options.length||7));return n<=5?54:44}
  rotate(delta){if(!this.options.length)return;this._offset+=delta;this._renderOptions(this.options);this.dispatchEvent(new CustomEvent('rotate',{detail:{offset:this._offset}}))}
  _pointerAngle(e){const b=this.$stage.getBoundingClientRect(),x=e.clientX-(b.left+b.width/2),y=e.clientY-(b.top+b.height/2);return Math.atan2(y,x)*180/Math.PI}
  _onPointerDown(e){if(e.target.closest('.arrow')||e.target.closest('.option'))return;this._lastAngle=this._pointerAngle(e);this._accumulatedAngle=0;this._dragStartOffset=this._offset;this.$stage.setPointerCapture?.(e.pointerId)}
  _onPointerMove(e){if(this._lastAngle===null)return;const a=this._pointerAngle(e);let d=a-this._lastAngle;if(d>180)d-=360;if(d<-180)d+=360;this._accumulatedAngle+=d;this._lastAngle=a;const next=this._dragStartOffset+Math.round(this._accumulatedAngle/this._slotAngle());if(next!==this._offset){this._offset=next;this._renderOptions(this.options);this.dispatchEvent(new CustomEvent('rotate',{detail:{offset:this._offset}}))}}
  _onPointerUp(){this._lastAngle=null;this._accumulatedAngle=0}
  _onWheel(e){e.preventDefault();this.rotate(e.deltaY>0||e.deltaX>0?1:-1)}
  _onKeyDown(e){super._onKeyDown(e);if(!this.hasAttribute('open'))return;if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();this.rotate(-1)}if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();this.rotate(1)}}
  _renderOptions(options){this.$options.innerHTML='';if(!options.length)return;const visible=Math.max(3,Math.min(parseInt(this.getAttribute('visible-count')||'7',10),options.length)),half=Math.floor(visible/2),radius=parseFloat(getComputedStyle(this).getPropertyValue('--radial-radius'))||136,slotAngle=this._slotAngle();for(let i=0;i<visible;i++){const rel=i-half,raw=this._offset+rel,index=((raw%options.length)+options.length)%options.length,edge=Math.abs(rel)/Math.max(1,half);this.$options.append(this._makeOption(options[index],-90+rel*slotAngle,radius,Math.max(.2,1-edge*.66),1-edge*.12))}}
}

if(!customElements.get('radial-select'))customElements.define('radial-select',RadialSelect);
if(!customElements.get('rotary-select'))customElements.define('rotary-select',RotarySelect);