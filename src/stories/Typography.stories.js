export default {
  title: 'Foundation/Typography',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

const fontSizes = [
  { name: 'xs',   token: '--font-size-xs',   value: '12px', sample: 'The quick brown fox' },
  { name: 'sm',   token: '--font-size-sm',   value: '14px', sample: 'The quick brown fox' },
  { name: 'base', token: '--font-size-base', value: '16px', sample: 'The quick brown fox' },
  { name: 'lg',   token: '--font-size-lg',   value: '18px', sample: 'The quick brown fox' },
  { name: 'xl',   token: '--font-size-xl',   value: '20px', sample: 'The quick brown fox' },
  { name: '2xl',  token: '--font-size-2xl',  value: '24px', sample: 'The quick brown fox' },
  { name: '3xl',  token: '--font-size-3xl',  value: '30px', sample: 'The quick brown fox' },
  { name: '4xl',  token: '--font-size-4xl',  value: '36px', sample: 'The quick brown fox' },
  { name: '5xl',  token: '--font-size-5xl',  value: '48px', sample: 'The quick brown fox' },
];

const fontWeights = [
  { name: 'Regular',  token: '--font-weight-regular',  value: '400' },
  { name: 'Medium',   token: '--font-weight-medium',   value: '500' },
  { name: 'Semibold', token: '--font-weight-semibold', value: '600' },
  { name: 'Bold',     token: '--font-weight-bold',     value: '700' },
];

const lineHeights = [
  { name: 'tight',   token: '--line-height-tight',   value: '1.25' },
  { name: 'snug',    token: '--line-height-snug',    value: '1.375' },
  { name: 'normal',  token: '--line-height-normal',  value: '1.5' },
  { name: 'relaxed', token: '--line-height-relaxed', value: '1.625' },
  { name: 'loose',   token: '--line-height-loose',   value: '2' },
];

export const FontSize = {
  name: 'Font Size',
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = `
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Font Size</h2>
      <p style="color: #6b7280; margin-bottom: 40px;">텍스트 크기 토큰입니다. rem 단위로 정의되어 있습니다.</p>
      <div style="display: flex; flex-direction: column; gap: 0;">
        ${fontSizes.map(({ name, token, value, sample }) => `
          <div style="display: flex; align-items: baseline; gap: 24px; padding: 16px 0; border-bottom: 1px solid #f3f4f6;">
            <div style="min-width: 140px; flex-shrink: 0;">
              <div style="font-size: 13px; font-weight: 600; color: #374151;">${name}</div>
              <div style="font-size: 11px; color: #9ca3af; font-family: monospace; margin-top: 2px;">${token}</div>
              <div style="font-size: 11px; color: #9ca3af; margin-top: 1px;">${value}</div>
            </div>
            <div style="font-size: var(${token}); line-height: 1.2; color: #111827;">${sample}</div>
          </div>
        `).join('')}
      </div>
    `;
    return el;
  },
};

export const FontWeight = {
  name: 'Font Weight',
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = `
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Font Weight</h2>
      <p style="color: #6b7280; margin-bottom: 40px;">폰트 굵기 토큰입니다.</p>
      <div style="display: flex; flex-direction: column; gap: 0;">
        ${fontWeights.map(({ name, token, value }) => `
          <div style="display: flex; align-items: center; gap: 24px; padding: 20px 0; border-bottom: 1px solid #f3f4f6;">
            <div style="min-width: 140px; flex-shrink: 0;">
              <div style="font-size: 13px; font-weight: 600; color: #374151;">${name}</div>
              <div style="font-size: 11px; color: #9ca3af; font-family: monospace; margin-top: 2px;">${token}</div>
              <div style="font-size: 11px; color: #9ca3af; margin-top: 1px;">weight: ${value}</div>
            </div>
            <div style="font-size: 20px; font-weight: var(${token}); color: #111827;">The quick brown fox jumps over the lazy dog</div>
          </div>
        `).join('')}
      </div>
    `;
    return el;
  },
};

export const LineHeight = {
  name: 'Line Height',
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = `
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Line Height</h2>
      <p style="color: #6b7280; margin-bottom: 40px;">줄 간격 토큰입니다.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 24px;">
        ${lineHeights.map(({ name, token, value }) => `
          <div style="width: 200px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <div style="font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 4px;">${name}</div>
            <div style="font-size: 11px; color: #9ca3af; font-family: monospace; margin-bottom: 12px;">${value}</div>
            <div style="font-size: 14px; line-height: var(${token}); color: #374151; background: linear-gradient(transparent calc(var(${token}) * 1em - 1px), #dbeafe calc(var(${token}) * 1em)) 0 0 / 100% calc(var(${token}) * 1em);">
              가나다라마바사아자차카타파하 The quick brown fox jumps over the lazy dog.
            </div>
          </div>
        `).join('')}
      </div>
    `;
    return el;
  },
};

export const HeadingScale = {
  name: 'Heading Scale',
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = `
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Heading Scale</h2>
      <p style="color: #6b7280; margin-bottom: 40px;">h1 ~ h6 기본 스타일입니다.</p>
      ${['h1','h2','h3','h4','h5','h6'].map(tag => `
        <div style="display: flex; align-items: baseline; gap: 24px; padding: 16px 0; border-bottom: 1px solid #f3f4f6;">
          <div style="min-width: 60px; flex-shrink: 0; font-size: 12px; font-weight: 600; color: #9ca3af; font-family: monospace;">${tag}</div>
          <${tag} style="margin: 0;">${tag} — 제목 텍스트 샘플</${tag}>
        </div>
      `).join('')}
    `;
    return el;
  },
};
