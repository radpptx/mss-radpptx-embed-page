<?php
// This file is generated. Do not modify it manually.
return array(
	'mss-radpptx-embed-page' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/mss-radpptx-embed-page',
		'version' => '0.1.0',
		'title' => 'MSS RadPPTX Embed',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Block for embedding pages made with RadPPTX.',
		'example' => array(
			
		),
		'attributes' => array(
			'contentId' => array(
				'type' => 'number'
			),
			'additionalPadding' => array(
				'type' => 'number',
				'default' => 4
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'dimensions' => array(
				'minHeight' => true
			)
		),
		'textdomain' => 'mss-radpptx-embed-page',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	)
);
