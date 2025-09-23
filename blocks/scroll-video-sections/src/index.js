/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import metadata from '../block.json';

/**
 * Styles
 */
import './style.scss';
import './editor.scss';

/**
 * Register the Scroll Video Sections block
 */
registerBlockType(metadata.name, {
	edit,
	save,
});