import { visitAdminPage } from "@wordpress/e2e-test-utils/build/visit-admin-page";

export const createInpsydeUser = async (data) => {
	await page.type("#first-name", "Eliasu");
	await page.type("#last-name", "Abraman");
	await page.type("#position", "Developer");
	await page.type("#intro", "I like myself");
	await page.type("#inpsyde-userfacebook", "http://fb.com/tester");
	await page.type("#inpsyde-userxing", "http://xing.com/tester");
	await page.type("#inpsyde-userlinkedin", "http://lkd.com/tester");
	await page.type("#inpsyde-usergithub", "http://gt.com/tester");
	// await page.click(".interface-pinned-items");
	// await page.waitForSelector(".interface-interface-skeleton__sidebar");
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
};

export const deleteInpsydeUser = async () => {
	await visitAdminPage("edit.php", "post_type=inpsyde-user");
	await page.waitForSelector("#cb-select-all-1");
	await page.click("#cb-select-all-1");
	await page.select("#bulk-action-selector-top", "trash");
	await page.click("#doaction", "trash");
};
