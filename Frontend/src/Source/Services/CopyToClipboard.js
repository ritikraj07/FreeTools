const copyToClipboard = (content) => {
    const textToCopy = content;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Text copied to clipboard:', textToCopy);
        })
        .catch((error) => {
            console.error('Error copying text to clipboard:', error);
        });
};

export default copyToClipboard;