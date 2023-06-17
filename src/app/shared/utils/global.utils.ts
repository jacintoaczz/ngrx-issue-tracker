/**
 * Generates a random string to be used as Id
 * replacement.
 */
export const generateRandomId = () => Math.random().toString(36).substring(2, 9);
