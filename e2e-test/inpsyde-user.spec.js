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
	beforeEach(async () => {
		await jest.setTimeout(60000);
	});
	it("Can add block", async () => {
		await createNewPost({ postType: "page", title: "New User" });
		await insertBlock("User Overview");
		expect(await page.$('[data-type="eliasu/inpsyde-user"]')).not.toBeNull();
		expect(await getEditedPostContent()).toMatchSnapshot();
	});
	it("Can create Inpsyde user", async () => {
		await createNewPost({ postType: "inpsyde-user", title: "Eliasu Abraman" });
		await page.type("#first-name", "Eliasu");
		await page.type("#last-name", "Abraman");
		await page.type("#position", "Developer");
		await page.type("#intro", "I like myself");
		await page.type("#inpsyde-userfacebook", "http://fb.com/tester");
		await page.type("#inpsyde-userxing", "http://xing.com/tester");
		await page.type("#inpsyde-userlinkedin", "http://lkd.com/tester");
		await page.type("#inpsyde-usergithub", "http://gt.com/tester");
		const arrows = await page.$$(
			".components-button.components-panel__body-toggle[aria-expanded='false']"
		);
		await Promise.all(arrows.map(async (arrow) => await arrow.click()));
		await page.waitForSelector(".editor-post-featured-image");
		await page.click(".editor-post-featured-image__toggle");
		await page.waitForSelector(".supports-drag-drop");
		await page.click("#menu-item-browse");
		await page.click(".save-ready");
		await page.click(".media-button-select");
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
		await page.waitForSelector(".user-card img");
		expect(await getEditedPostContent()).toMatchSnapshot();
		await deleteInpsydeUser();
	});
});
