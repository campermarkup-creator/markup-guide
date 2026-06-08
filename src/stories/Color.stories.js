export default {
  title: 'Foundation/Color',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

const colorGroups = [
  {
    label: 'Primary',
    tokens: [
      { name: 'primary-50',  var: '--color-primary-50' },
      { name: 'primary-100', var: '--color-primary-100' },
      { name: 'primary-200', var: '--color-primary-200' },
      { name: 'primary-300', var: '--color-primary-300' },
      { name: 'primary-400', var: '--color-primary-400' },
      { name: 'primary-500', var: '--color-primary-500' },
      { name: 'primary-600', var: '--color-primary-600' },
      { name: 'primary-700', var: '--color-primary-700' },
      { name: 'primary-800', var: '--color-primary-800' },
      { name: 'primary-900', var: '--color-primary-900' },
    ],
  },
  {
    label: 'Neutral',
    tokens: [
      { name: 'neutral-0',   var: '--color-neutral-0' },
      { name: 'neutral-50',  var: '--color-neutral-50' },
      { name: 'neutral-100', var: '--color-neutral-100' },
      { name: 'neutral-200', var: '--color-neutral-200' },
      { name: 'neutral-300', var: '--color-neutral-300' },
      { name: 'neutral-400', var: '--color-neutral-400' },
      { name: 'neutral-500', var: '--color-neutral-500' },
      { name: 'neutral-600', var: '--color-neutral-600' },
      { name: 'neutral-700', var: '--color-neutral-700' },
      { name: 'neutral-800', var: '--color-neutral-800' },
      { name: 'neutral-900', var: '--color-neutral-900' },
    ],
  },
  {
    label: 'Semantic',
    tokens: [
      { name: 'success', var: '--color-success' },
      { name: 'warning', var: '--color-warning' },
      { name: 'error',   var: '--color-error' },
      { name: 'info',    var: '--color-info' },
    ],
  },
];

function renderColorGroup({ label, tokens }) {
  return `
    <div style="margin-bottom: 40px;">
      <h3 style="font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280; margin-bottom: 16px;">${label}</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${tokens.map(({ name, var: cssVar }) => `
          <div style="display: flex; flex-direction: column; gap: 6px; width: 80px;">
            <div style="
              width: 80px;
              height: 60px;
              background-color: var(${cssVar});
              border-radius: 6px;
              border: 1px solid rgba(0,0,0,0.08);
            "></div>
            <div style="font-size: 11px; color: #374151; line-height: 1.4;">
              <div style="font-weight: 600;">${name}</div>
              <div style="color: #9ca3af; font-family: monospace;">${cssVar}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export const AllColors = {
  name: 'All Colors',
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="padding: 8px 0;">
        <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Color Tokens</h2>
        <p style="color: #6b7280; margin-bottom: 40px;">프로젝트에서 사용하는 색상 토큰입니다. CSS 변수로 정의되어 있습니다.</p>
        ${colorGroups.map(renderColorGroup).join('')}
      </div>
    `;
    return el;
  },
};

export const Primary = {
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = renderColorGroup(colorGroups[0]);
    return el;
  },
};

export const Neutral = {
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = renderColorGroup(colorGroups[1]);
    return el;
  },
};

export const Semantic = {
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = renderColorGroup(colorGroups[2]);
    return el;
  },
};
