export default {
  title: 'Foundation/Border Radius',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

const radiusTokens = [
  { name: 'none', token: '--radius-none', value: '0' },
  { name: 'sm',   token: '--radius-sm',   value: '2px' },
  { name: 'md',   token: '--radius-md',   value: '6px' },
  { name: 'lg',   token: '--radius-lg',   value: '8px' },
  { name: 'xl',   token: '--radius-xl',   value: '12px' },
  { name: '2xl',  token: '--radius-2xl',  value: '16px' },
  { name: 'full', token: '--radius-full', value: '9999px' },
];

export const BorderRadiusScale = {
  name: 'Border Radius Scale',
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = `
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Border Radius</h2>
      <p style="color: #6b7280; margin-bottom: 40px;">모서리 곡률 토큰입니다.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-end;">
        ${radiusTokens.map(({ name, token, value }) => `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
            <div style="
              width: 80px;
              height: 80px;
              background-color: #3b82f6;
              border-radius: var(${token});
            "></div>
            <div style="text-align: center;">
              <div style="font-size: 13px; font-weight: 600; color: #374151;">radius-${name}</div>
              <div style="font-size: 11px; color: #9ca3af; font-family: monospace;">${value}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    return el;
  },
};

export const Shadow = {
  name: 'Shadow',
  render: () => {
    const shadowTokens = [
      { name: 'sm', token: '--shadow-sm' },
      { name: 'md', token: '--shadow-md' },
      { name: 'lg', token: '--shadow-lg' },
      { name: 'xl', token: '--shadow-xl' },
    ];
    const el = document.createElement('div');
    el.innerHTML = `
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Shadow</h2>
      <p style="color: #6b7280; margin-bottom: 40px;">그림자 토큰입니다.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-end; padding: 24px 0;">
        ${shadowTokens.map(({ name, token }) => `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
            <div style="
              width: 100px;
              height: 100px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: var(${token});
            "></div>
            <div style="text-align: center;">
              <div style="font-size: 13px; font-weight: 600; color: #374151;">shadow-${name}</div>
              <div style="font-size: 11px; color: #9ca3af; font-family: monospace;">${token}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    return el;
  },
};
