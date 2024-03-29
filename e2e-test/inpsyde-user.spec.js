"use strict";

import {
	insertBlock,
	getEditedPostContent,
	createNewPost,
	enablePageDialogAccept,
	publishPost,
	setBrowserViewport,
} from "@wordpress/e2e-test-utils";
import { createInpsydeUser, deleteInpsydeUser } from "./helper";

describe("Insyde User", () => {
	beforeAll(async () => {
		await enablePageDialogAccept();
		await setBrowserViewport({ width: 1600, height: 900 });
	});
	it("Can add block", async () => {
		await createNewPost({ postType: "page", title: "New User" });
		await insertBlock("User Overview");
		expect(await page.$('[data-type="eliasu/inpsyde-user"]')).not.toBeNull();
		expect(await getEditedPostContent()).toMatchSnapshot();
	});
	it("Can create Inpsyde user", async () => {
		await createNewPost({ postType: "inpsyde-user", title: "Eliasu Abraman" });
		await createInpsydeUser();
		await publishPost();
	});
	it("Can set block attributes", async () => {
		await createNewPost({ postType: "page", title: "New User" });
		await insertBlock("User Overview");
		await page.type("#search-inpsyde-user-box > div", "Eliasu Abraman");
		await page.waitForSelector(
			".components-autocomplete__result.components-button"
		);
		await page.click(".components-autocomplete__result.components-button");
		//await page.waitForSelector(".user-card img");
		expect(await getEditedPostContent()).toMatchSnapshot();
		await deleteInpsydeUser();
	});
});
