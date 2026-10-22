const form = document.querySelector('#song-form');
const packageSelect = document.querySelector('#package');
const result = document.querySelector('#order-result');
const summary = document.querySelector('#order-summary');
const copyButton = document.querySelector('#copy-order');
const copyStatus = document.querySelector('#copy-status');

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('.package-button').forEach(button => {
  button.addEventListener('click', () => {
    const option = [...packageSelect.options].find(item => item.value === button.dataset.package);
    if (option) packageSelect.value = option.value;
    document.querySelector('#order').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('#customer-name').focus({ preventScroll: true });
  });
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const selected = packageSelect.options[packageSelect.selectedIndex];
  const price = selected.dataset.price || 'To be confirmed';
  const brief = [
    'MELODYFORGE AI — SONG REQUEST',
    '--------------------------------',
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Package: ${data.get('package')} ($${price})`,
    `Genre: ${data.get('genre')}`,
    `Sound: ${data.get('sound')}`,
    `Mood: ${data.get('mood')}`,
    '',
    'SONG DETAILS:',
    data.get('story'),
    '',
    'STATUS: Draft only — payment, rights, delivery time, and production must be confirmed.'
  ].join('\n');

  summary.textContent = brief;
  result.hidden = false;
  copyStatus.textContent = '';
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(summary.textContent);
    copyStatus.textContent = 'Order brief copied.';
  } catch {
    copyStatus.textContent = 'Copy was blocked by your browser. Select the text above and copy it manually.';
  }
});
