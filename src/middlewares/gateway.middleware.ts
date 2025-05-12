import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";
import { NotAuthorizedError } from "../utils/errorHandler";

const tokens: string[] = [
  "auth",
  "seller",
  "gig",
  "search",
  "buyer",
  "chat",
  "chat",
  "review",
];

interface IPayload {
  id: string;
  iat: number;
}

const unAuthorized = () => {
  throw new NotAuthorizedError(
    "Invalid request",
    "verifyGatewayRequest() method: Request not coming from the api gateway"
  );
};
export const verifyGatewayRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token: string = req.headers.gateway_token as string;
  if (!token) {
    unAuthorized();
  }
  try {
    const payload: IPayload = JWT.verify(token, "secret") as IPayload;
    if (!tokens.includes(payload.id)) {
      unAuthorized();
    }
  } catch (error) {
    unAuthorized();
  }
};
