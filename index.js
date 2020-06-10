import { NativeModules } from 'react-native';

/**
 * @returns {Promise<boolean> | Promise<*>|*}
 */
const isSandbox = (): Promise<boolean> => {
	return new Promise((resolve) => {
		try {
			const SandboxChecker = NativeModules.SandboxChecker;
			if (SandboxChecker == null) {
				console.warn('SandboxChecker module is not available.');
				resolve(false);
			} else {
				SandboxChecker.getReceiptLocation().then((location) => {
					resolve(location.indexOf('sandboxReceipt') !== -1);
				});
			}
		} catch (e) {
			console.warn('There was a problem checking the sandbox environment.');
			resolve(false);
		}
	});
};

export { isSandbox };

