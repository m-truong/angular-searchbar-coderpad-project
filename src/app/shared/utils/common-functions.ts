export const logger = (component: string, instance: any) => {
	console.log(
		`=> Logging this ${component} component was initialized`,
		instance
	);
};

export const loggerCommand = (command: string, data: any) => {
	console.log(`=> Logging this action ${command}`, data);
};
