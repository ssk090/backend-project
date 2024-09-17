export const getKeyName = (...args: string[]) => {
  return `backend:${args.join(":")}`;
};
