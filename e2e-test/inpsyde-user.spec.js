"use strict";

import {
	insertBlock,
	getEditedPostContent,
	createNewPost,
	enablePageDialogAccept,
	publishPost,
} from "@wordpress/e2e-test-utils";
import { createInpsydeUser } from "./helper";

describe("Insyde User", () => {
	//file path for plugin
	const plugin = "inpsyde-user-plugin";
	beforeAll(async () => {
		await enablePageDialogAccept();
	});

	it("Can add block", async () => {
		await createNewPost({ postType: "page", title: "New User" });
		await insertBlock("User Overview");
		expect(await page.$('[data-type="eliasu/inpsyde-user"]')).not.toBeNull();
		expect(await getEditedPostContent()).toMatchSnapshot();
		//await publishPost();
	});
	it("Can create Inpsyde user", async () => {
		await createNewPost({ postType: "inpsyde-user", title: "Eliasu Abraman" });
		await createInpsydeUser();
		//await publishPost();
	});
	it("Can set block attributes", async () => {
		await createNewPost({ postType: "page", title: "New User" });
		await insertBlock("User Overview");
		await page.type("#search-inpsyde-user-box > div", "Eliasu Abraman");
		await page.waitForSelector(
			".components-autocomplete__result.components-button"
		);
		await page.click(".components-autocomplete__result.components-button");
		expect(await getEditedPostContent()).toMatchSnapshot();
	});
});
