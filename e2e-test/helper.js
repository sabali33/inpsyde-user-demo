import { openPublishPanel } from "@wordpress/e2e-test-utils";
export const createInpsydeUser = async (data) => {
	await page.type("#first-name", "Eliasu");
	await page.type("#last-name", "Abraman");
	await page.type("#position", "Developer");
	await page.type("#intro", "I like myself");
	await page.type("#inpsyde-userfacebook", "http://fb.com/tester");
	await page.type("#inpsyde-userxing", "http://xing.com/tester");
	await page.type("#inpsyde-userlinkedin", "http://lkd.com/tester");
	await page.type("#inpsyde-usergithub", "http://gt.com/tester");
};
