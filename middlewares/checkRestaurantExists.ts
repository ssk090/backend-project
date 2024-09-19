import type { NextFunction, Request, Response } from "express";
import { initializeRedisClient } from "../utils/client.js";
import { restaurantKeyById } from "../utils/keys.js";
import { errorResponse, successResponse } from "../utils/responses.js";

export const checkRestaurantExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { restaurantId } = req.params;
  if (!restaurantId) {
    return errorResponse(res, 400, "Restaurant id is required");
  }
  const client = await initializeRedisClient();
  const restaurantKey = restaurantKeyById(restaurantId);
  const exists = await client.exists(restaurantKey);
  if (exists === 0) {
    return errorResponse(res, 404, "Restaurant not found");
  }
  next();
};
