<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$content_id = $attributes['contentId'];
$additional_padding = $attributes['additionalPadding'];

if (!defined('DEBUG_RADPPTX_URL')) {
	$url = 'https://radpptx.com/mss-embed?content_id=' . $content_id;
} else {
	$url = DEBUG_RADPPTX_URL . '/mss-embed?content_id=' . $content_id;
}

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<iframe src="<?php echo esc_url($url); ?>" data-additional-padding="<?php echo esc_attr($additional_padding); ?>" class="mss-radpptx-embed-page-iframe"></iframe>
</div>
