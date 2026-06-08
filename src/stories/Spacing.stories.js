export default {
  title: 'Foundation/Spacing',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

const spacingTokens = [
  { name: '0',  token: '--spacing-0',  value: '0',       px: '0px' },
  { name: '1',  token: '--spacing-1',  value: '0.25rem', px: '4px' },
  { name: '2',  token: '--spacing-2',  value: '0.5rem',  px: '8px' },
  { name: '3',  token: '--spacing-3',  value: '0.75rem', px: '12px' },
  { name: '4',  token: '--spacing-4',  value: '1rem',    px: '16px' },
  { name: '5',  token: '--spacing-5',  value: '1.25rem', px: '20px' },
  { name: '6',  token: '--spacing-6',  value: '1.5rem',  px: '24px' },
  { name: '8',  token: '--spacing-8',  value: '2rem',    px: '32px' },
  { name: '10', token: '--spacing-10', value: '2.5rem',  px: '40px' },
  { name: '12', token: '--spacing-12', value: '3rem',    px: '48px' },
  { name: '16', token: '--spacing-16', value: '4rem',    px: '64px' },
  { name: '20', token: '--spacing-20', value: '5rem',    px: '80px' },
  { name: '24', token: '--spacing-24', value: '6rem',    px: '96px' },
];

export const SpacingScale = {
  name: 'Spacing Scale',
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = `
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Spacing Scale</h2>
      <p style="color: #6b7280; margin-bottom: 40px;">여백 토큰입니다. padding, margin, gap 등에 사용합니다.</p>
      <div style="display: flex; flex-direction: column; gap: 0;">
        ${spacingTokens.map(({ name, token, value, px }) => `
          <div style="display: flex; align-items: center; gap: 24px; padding: 10px 0; border-bottom: 1px solid #f9fafb;">
            <div style="min-width: 160px; flex-shrink: 0; display: flex; align-items: baseline; gap: 8px;">
              <span style="font-size: 13px; font-weight: 600; color: #374151; min-width: 24px;">${name}</span>
              <span style="font-size: 11px; color: #9ca3af; font-family: monospace;">${value}</span>
              <span style="font-size: 11px; color: #d1d5db;">/ ${px}</span>
            </div>
            <div style="
              height: 20px;
              width: var(${token});
              min-width: 2px;
              background-color: #3b82f6;
              border-radius: 2px;
              transition: width 0.2s;
            "></div>
          </div>
        `).join('')}
      </div>
    `;
    return el;
  },
};

export const SpacingInContext = {
  name: 'Spacing in Context',
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = `
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Spacing in Context</h2>
      <p style="color: #6b7280; margin-bottom: 40px;">실제 padding/gap 적용 예시입니다.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-start;">
        ${[1,2,3,4,5,6,8,10,12].map(n => {
          const token = `--spacing-${n}`;
          const size = spacingTokens.find(s => s.name === String(n));
          return `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <div style="
                padding: var(${token});
                background-color: #eff6ff;
                border: 2px solid #3b82f6;
                border-radius: 4px;
                position: relative;
              ">
                <div style="
                  background-color: #3b82f6;
                  width: 40px;
                  height: 40px;
                  border-radius: 2px;
                "></div>
              </div>
              <div style="text-align: center;">
                <div style="font-size: 12px; font-weight: 600; color: #374151;">spacing-${n}</div>
                <div style="font-size: 11px; color: #9ca3af;">${size?.px || ''}</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    return el;
  },
};
