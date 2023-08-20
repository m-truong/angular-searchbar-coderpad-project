export const logger = (component: string, instance: any) => {
	console.log(
		`=> Logging this ${component} component was initialized`,
		instance
	);
};
