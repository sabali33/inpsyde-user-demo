/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { TextControl, Button, Modal } from "@wordpress/components";

import Card from "./components/Card";
import AddUser from "./container/AddUser";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit(props) {
	const { isSelected, attributes, setAttributes } = props;
	const blockProps = useBlockProps();
	const { social_media_networks } = attributes;
	if (!isSelected && Object.values(attributes).length > 0) {
		return <Card {...attributes} />;
	}

	const handleInputChange = (field, value) => {
		if (field.startsWith("social_media_networks")) {
			const fieldArr = field.split(".");
			setAttributes({ ...attributes, [fieldArr[1]]: value });
		} else {
			setAttributes({ [field]: value });
		}
	};
	const setUserAttributes = (attributes) => {
		console.log(attributes);
		setAttributes(attributes);
	};
	if (isSelected && Object.values(attributes).length < 1) {
		return <AddUser onSelectUser={setUserAttributes} />;
	}
	return (
		<div {...blockProps}>
			<AddUser onSelectUser={setUserAttributes} />
			<TextControl
				label={__("First Name")}
				value={attributes.first_name}
				onChange={handleInputChange.bind(this, "first_name")}
			/>
			<TextControl
				label={__("Last Name")}
				value={attributes.last_name}
				onChange={handleInputChange.bind(this, "last_name")}
			/>
			<TextControl
				label={__("Position")}
				value={attributes.position}
				onChange={handleInputChange.bind(this, "position")}
			/>
			<RichText
				{...blockProps}
				value={attributes.short_description}
				onChange={handleInputChange.bind(this, "short_description")}
				tagName="div"
				contentEditable
				suppressContentEditableWarning
				placeholder={__("Enter a short description")}
			/>
			<TextControl
				label={__("Facebook")}
				value={social_media_networks[0].facebook}
				onChange={handleInputChange.bind(
					this,
					"social_media_networks.facebook"
				)}
			/>
			<TextControl
				label={__("Github")}
				value={social_media_networks[0].github}
				onChange={handleInputChange.bind(this, "social_media_networks.github")}
			/>
			<TextControl
				label={__("Xing")}
				value={social_media_networks[0].xing}
				onChange={handleInputChange.bind(this, "social_media_networks.xing")}
			/>
			<TextControl
				label={__("Linkedin")}
				value={social_media_networks[0].linkedin}
				onChange={handleInputChange.bind(
					this,
					"social_media_networks.linkedin"
				)}
			/>
		</div>
	);
}
