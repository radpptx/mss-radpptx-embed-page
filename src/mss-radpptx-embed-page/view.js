/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

function addResizerToWindowElement(elementOrId) {

    window.addEventListener('message', (e) => {
        if (e?.data?.source !== 'mss-iframe-resizer') {
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
        addResizerToWindowElement(iframe);
    })
})

/* eslint-disable no-console */
console.log( 'Hello World! (from create-block-mss-radpptx-embed-page block)' );
/* eslint-enable no-console */
