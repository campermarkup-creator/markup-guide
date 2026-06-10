export default {
  title: 'Foundation/Color',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

const colorGroups = [
  {
    label: 'Core',
    description: '브랜드 핵심 색상입니다.',
    tokens: [
      { name: 'core-primary',   var: '--color-core-primary' },
      { name: 'core-secondary', var: '--color-core-secondary' },
      { name: 'core-tertiary',  var: '--color-core-tertiary' },
    ],
  },
  {
    label: 'Gray Scale',
    description: '명도 단계별 회색 팔레트입니다.',
    tokens: [
      { name: 'gray-01', var: '--color-gray-01' },
      { name: 'gray-02', var: '--color-gray-02' },
      { name: 'gray-03', var: '--color-gray-03' },
      { name: 'gray-04', var: '--color-gray-04' },
      { name: 'gray-05', var: '--color-gray-05' },
      { name: 'gray-06', var: '--color-gray-06' },
      { name: 'gray-07', var: '--color-gray-07' },
      { name: 'gray-08', var: '--color-gray-08' },
      { name: 'gray-09', var: '--color-gray-09' },
      { name: 'gray-10', var: '--color-gray-10' },
      { name: 'gray-11', var: '--color-gray-11' },
      { name: 'gray-12', var: '--color-gray-12' },
      { name: 'gray-13', var: '--color-gray-13' },
      { name: 'gray-14', var: '--color-gray-14' },
    ],
  },
  {
    label: 'Neutral Text',
    description: '텍스트 계층에 사용하는 색상입니다.',
    tokens: [
      { name: 'neutral-primary',    var: '--color-neutral-primary' },
      { name: 'neutral-secondary',  var: '--color-neutral-secondary' },
      { name: 'neutral-quaternary', var: '--color-neutral-quaternary' },
    ],
  },
  {
    label: 'Semantic',
    description: '상태를 나타내는 색상입니다.',
    tokens: [
      { name: 'success', var: '--color-success' },
      { name: 'warning', var: '--color-warning' },
      { name: 'error',   var: '--color-error' },
    ],
  },
  {
    label: 'Category',
    description: '카테고리별 브랜드 색상입니다.',
    tokens: [
      { name: 'category-gift',               var: '--color-category-gift' },
      { name: 'category-subsc',              var: '--color-category-subsc' },
      { name: 'category-group-primary',      var: '--color-category-group-primary' },
      { name: 'category-group-secondary',    var: '--color-category-group-secondary' },
      { name: 'category-randombox',          var: '--color-category-randombox' },
      { name: 'category-cooki',              var: '--color-category-cooki' },
      { name: 'category-timedeal-primary',   var: '--color-category-timedeal-primary' },
      { name: 'category-timedeal-secondary', var: '--color-category-timedeal-secondary' },
    ],
  },
];

function renderColorGroup({ label, description, tokens }) {
  return `
    <div style="margin-bottom: 48px;">
      <h3 style="font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280; margin-bottom: 4px;">${label}</h3>
      ${description ? `<p style="font-size: 13px; color: #9ca3af; margin-bottom: 16px;">${description}</p>` : ''}
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${tokens.map(({ name, var: cssVar }) => `
          <div style="display: flex; flex-direction: column; gap: 6px; width: 88px;">
            <div style="
              width: 88px;
              height: 64px;
              background-color: var(${cssVar});
              border-radius: 6px;
              border: 1px solid rgba(0,0,0,0.08);
            "></div>
            <div style="font-size: 11px; color: #374151; line-height: 1.4;">
              <div style="font-weight: 600; word-break: break-all;">${name}</div>
              <div style="color: #9ca3af; font-family: monospace; word-break: break-all; font-size: 10px;">${cssVar}</div>
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
        <p style="color: #6b7280; margin-bottom: 40px;">Figma에서 연동된 색상 토큰입니다. CSS 변수로 정의되어 있습니다.</p>
        ${colorGroups.map(renderColorGroup).join('')}
      </div>
    `;
    return el;
  },
};

export const Core = {
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = renderColorGroup(colorGroups[0]);
    return el;
  },
};

export const GrayScale = {
  name: 'Gray Scale',
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = renderColorGroup(colorGroups[1]);
    return el;
  },
};

export const NeutralText = {
  name: 'Neutral Text',
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = renderColorGroup(colorGroups[2]);
    return el;
  },
};

export const Semantic = {
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = renderColorGroup(colorGroups[3]);
    return el;
  },
};

export const Category = {
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = renderColorGroup(colorGroups[4]);
    return el;
  },
};
