export const cache = {};

export const VALID_MODS = new Set(['AP', 'AT', 'CL', 'CN', 'DT', 'EZ', 'FL', 'HD', 'HR', 'HT', 'NC', 'NF', 'NM', 'PF', 'RX', 'SD', 'SO', 'TD', 'TP', 'v2']);

export const updateCache = (key, value, onChange) => {
  if (value === undefined || cache[key] === value) return false;
  cache[key] = value;
  if (typeof onChange === 'function') onChange(value);
  return true;
};

export const updateCacheKeys = (keys, source) => keys.forEach((k) => updateCache(k, source[k]));

export const setText = (node, value) => {
  if (!node) return;
  const next = `${value}`;
  if (node.textContent !== next) node.textContent = next;
};

export const setHTML = (node, value) => {
  if (!node) return;
  const next = `${value}`;
  if (node.innerHTML !== next) node.innerHTML = next;
};

export const setStyle = (node, prop, value) => {
  if (!node) return;
  if (node.style[prop] !== value) node.style[prop] = value;
};

export function hitJudgementsAdd(type, positionPercentage) {
    const element = document.createElement("div");

    element.setAttribute("class", `tickGraph tick${type}`);

    element.style.transform = `translateX(${positionPercentage}px)`;

    document.getElementById(`graph${type}`).appendChild(element);
    setTimeout(function(){ element.style.opacity = 1; element.style.transition = `opacity ease 300ms` }, 1)
}

export function hitJudgementsClear(type) {
    document.querySelectorAll(`.tick${type}`).forEach(e => e.remove());
}

export function tapJudgement(type) {
    // Create lookup object to avoid switch/if statements
    const judgementStyles = {
        '100': {
            glowId: 'h100Cont',
            textId: 'h100Text',
            color: '#00FF2F',
            color2: '#27b641'
        },
        '50': {
            glowId: 'h50Cont',
            textId: 'h50Text',
            color: '#ff9100',
            color2: '#b87f34'
        },
        '0': {
            glowId: 'h0Cont',
            textId: 'h0Text',
            color: '#FF0004',
            color2: '#b83133'
        },
        'SB': {
            glowId: 'hsbCont',
            textId: 'hSBText',
            color: '#ffffff',
            color2: '#b8b8b8'
        }
    };

    const style = judgementStyles[type];
    if (!style) return;

    const glow = document.getElementById(style.glowId);
    const text = document.getElementById(style.textId);

    glow.style.backgroundColor = style.color;
    text.style.transform = 'scale(85%)';

    if (style.color) {
        text.style.color = style.color;
    }

    setTimeout(() => {
        glow.style.backgroundColor = style.color2;
        text.style.transform = 'scale(100%)';
        if (style.color) {
            text.style.color = 'white';
        }
    }, 300);
}
