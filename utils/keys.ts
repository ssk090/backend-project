export const getKeyName = (...args: string[]) => {
  return `backend:${args.join(":")}`;
};

export const restaurantKeyById = (id: string) => getKeyName("restaurants", id);
