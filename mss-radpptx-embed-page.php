<?php
/**
 * Plugin Name:       Mss Radpptx Embed Page
 * Description:       Simple plugin, made with Create Block tool, that provides a Block allowing the embedding of RadPPTX Pages on a 3rd party wordpress website.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Modir Shanechi Solutions LLC
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       mss-radpptx-embed-page
 *
 * @package MssRadPPTXEmbedPage
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function create_block_mss_radpptx_embed_page_block_init() {
	register_block_type( __DIR__ . '/build/mss-radpptx-embed-page');
}
add_action( 'init', 'create_block_mss_radpptx_embed_page_block_init' );
