export const mergeNameAndCredentials = (name: string, credentials: string): string => `${name}, ${credentials.replaceAll('.','')}`;
