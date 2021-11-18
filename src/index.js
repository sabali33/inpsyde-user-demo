/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

registerBlockType("eliasu/inpsyde-user", {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __("User Overview", "inpsyde-user"),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __("A block to display user details", "inpsyde-user"),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: "common",

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: "smiley",
	/**
	 *
	 **/
	attributes: {
		first_name: {
			type: "string",
			source: "text",
			selector: ".first-name",
		},
		last_name: {
			type: "string",
			source: "text",
			selector: ".last-name",
		},
		image_url: {
			type: "string",
			source: "attribute",
			selector: ".user-card img",
			attribute: "src",
		},
		short_description: {
			type: "string",
			source: "html",
			multiline: "p",
			selector: ".intro",
		},
		position: {
			type: "string",
			source: "text",
			selector: ".position",
		},
		social_media_networks: {
			type: "array",
			source: "query",
			selector: "ul.social-media-networks",
			query: {
				facebook: {
					type: "string",
					source: "text",
					selector: "li.facebook",
				},
				github: {
					type: "string",
					source: "text",
					selector: "li.github",
				},
				xing: {
					type: "string",
					source: "text",
					selector: "li.xing",
				},
				linkedin: {
					type: "string",
					source: "text",
					selector: "li.linkedin",
				},
			},
			default: [],
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
