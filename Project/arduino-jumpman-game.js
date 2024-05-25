document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const copyButton = document.getElementById('copy-button');
    const codeContainer = document.getElementById('code-container');
    const codeElement = codeContainer.querySelector('code');

    toggleButton.addEventListener('click', () => {
        if (codeContainer.classList.contains('collapsed')) {
            codeContainer.classList.remove('collapsed');
            codeContainer.classList.add('expanded');
            toggleButton.textContent = 'See Less';
        } else {
            codeContainer.classList.remove('expanded');
            codeContainer.classList.add('collapsed');
            toggleButton.textContent = 'See More';
        }
    });

    copyButton.addEventListener('click', () => {
        const codeText = codeElement.innerText;
        navigator.clipboard.writeText(codeText).then(() => {
            alert('Code copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy code: ', err);
        });
    });
});
