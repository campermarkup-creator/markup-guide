export default {
  title: 'Guide/Introduction',
  parameters: {
    layout: 'padded',
  },
};

export const Welcome = {
  name: 'Welcome',
  render: () => {
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="padding: 40px 0;">
        <h1 style="font-size: 32px; font-weight: 700; margin-bottom: 12px;">Design Guide</h1>
        <p style="font-size: 16px; color: #6b7280;">가이드를 추가해주세요.</p>
      </div>
    `;
    return el;
  },
};
