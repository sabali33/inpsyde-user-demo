/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { TextControl, Button, Modal } from "@wordpress/components";

import Card from "./components/Card.js";
import AddUser from "./container/AddUser.js";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

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
	const [openModal, setOpenModal] = useState(false);
	const closeModal = () => {
		setOpenModal(false);
	};
	console.log(props);
	if (!isSelected && Object.values(attributes).length > 0) {
		return (
			<Card {...attributes} editContext={true} onCloseModal={closeModal} />
		);
	}
	const handleInputChange = (field, value) => {
		if (field.startsWidth("social_media_networks")) {
			const fieldArr = field.split(".");
			setAttributes({ ...attributes, [fieldArr[1]]: value });
		} else {
			setAttributes({ [field]: value });
		}
	};
	const setUserAttributes = (attributes) => {
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
				value={attributes.intro}
				onChange={handleInputChange.bind(this, "intro")}
				tagName="div"
				contentEditable
				suppressContentEditableWarning
				placeholder={__("Enter a short description")}
			/>
			<TextControl
				label={__("Facebook")}
				value={attributes.social_media_networks.facebook}
				onChange={handleInputChange.bind(
					this,
					"social_media_networks.facebook"
				)}
			/>
			<TextControl
				label={__("Github")}
				value={attributes.social_media_networks.github}
				onChange={handleInputChange.bind(this, "social_media_networks.github")}
			/>
			<TextControl
				label={__("Xing")}
				value={attributes.social_media_networks.xing}
				onChange={handleInputChange.bind(this, "social_media_networks.xing")}
			/>
			<TextControl
				label={__("Linkedin")}
				value={attributes.social_media_networks.linkedin}
				onChange={handleInputChange.bind(
					this,
					"social_media_networks.linkedin"
				)}
			/>
		</div>
	);
}
