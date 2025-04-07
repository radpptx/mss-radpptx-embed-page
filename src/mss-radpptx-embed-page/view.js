/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

function addResizerToWindowElement(elementOrId) {

    window.addEventListener('message', (e) => {
        if (e.data?.source !== 'mss-iframe-resizer') {
            return;
        }

        const element = typeof elementOrId === 'string' ? document.getElementById(elementOrId) : elementOrId;
        if (!element) return;
        
        if (e.source !== element.contentWindow) {
            return;
        }

        const additionalPadding = Number(element.getAttribute("data-additional-padding")) || 0;
        element.style.height = `${e.data.content.scrollHeight + additionalPadding}px`;
    })       
}

window.addEventListener('load', () => {
    const iframes = document.querySelectorAll('.mss-radpptx-embed-page-iframe');
    iframes.forEach(iframe => {
        const currentSrc = iframe.getAttribute('src');
        if (!currentSrc) {
            const contentId = iframe.getAttribute('data-content-id');
            if (!contentId) return;

            iframe.setAttribute('src', `https://radpptx.com/mss-embed?content_id=${contentId}`);
        }
        addResizerToWindowElement(iframe);
    })
})
