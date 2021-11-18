import createElement, { useEffect, useState } from "@wordpress/element";
import { RichText, useBlockProps } from "@wordpress/block-editor";

import apiFetch from "@wordpress/api-fetch";

const custom_completer = {
	name: "inpsyde-user/autocompleters",
	triggerPrefix: "",
	// The option data
	options: [],
	getOptionLabel: (option) => (
		<span>
			<span className="icon">{option.visual}</span>
			{option.title.rendered}
		</span>
	),
	// Declares that options should be matched by their title
	getOptionKeywords: (option) => [option.title.rendered],
	// Declares that the Grapes option is disabled
	isOptionDisabled: (option) => option.name === "Grapes",
	// Declares completions should be inserted as abbreviations
	getOptionCompletion: (option) => {
		return {
			action: "replace",
			value: {
				...option._inpsyde_user_meta,
				image_url: option._featured_image,
			},
		};
	},
	allowNode: true,
	isDebounced: true,
};

const AddUser = (props) => {
	const [users, set_users] = useState(custom_completer.options);
	const [enteredText, setEnteredText] = useState("");
	const block_props = useBlockProps();
	custom_completer.options = users;
	useEffect(() => {
		apiFetch({ path: `/wp/v2/inpsyde-user?search=${enteredText}` })
			.then((users) => {
				set_users(users);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [enteredText]);

	return (
		<div>
			<RichText
				{...block_props}
				tagName="div"
				contentEditable
				suppressContentEditableWarning
				aria-autocomplete="list"
				onChange={(nextContent) => {
					setEnteredText(nextContent);
				}}
				value={enteredText}
				autocompleters={[custom_completer]}
				placeholder="Search to select a user"
				onReplace={(opt) => {
					const user_meta = opt[0];
					setEnteredText(user_meta);
					console.log(user_meta);
					props.onSelectUser({
						first_name: user_meta.first_name,
						last_name: user_meta.last_name,
						position: user_meta.position,
						short_description: user_meta.intro,
						social_media_networks: [user_meta.social_media_networks],
						image_url: user_meta.image_url,
					});
				}}
			/>
		</div>
	);
};
export default AddUser;
