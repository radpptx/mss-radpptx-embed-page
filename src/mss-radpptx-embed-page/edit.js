/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes, clientId }) {
	const { contentId, additionalPadding } = attributes;
	console.log(attributes);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings')}>

					<TextControl
						type="number"
						label={__('Content ID')}
						help="The content ID you want to embed. This is a number that can be found under your RadPPTX account My Teaching section."
						value={contentId || ''}
						onChange={(value) =>
							setAttributes({ contentId: Number(value) || 0 })
						}
					/>
					<TextControl
						type="number"
						label={__('Additional Padding')}
						help="Additional padding to add to the calculated height for the embedded page. Modify this only if you are seeing scrollbars when you embed your desired page."
						value={additionalPadding || ''}
						onChange={(value) =>
							setAttributes({ additionalPadding: Number(value) || 0 })
						}
					/>
				</PanelBody>

			</InspectorControls>
			<div {...useBlockProps()}>
				{__(
					'This is where the embedded page will go.',
					'mss-radpptx-embed-page'
				)}
			</div>
		</>
	);
}
