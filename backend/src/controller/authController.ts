import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middleware/async";
import ErrorResponse from "../utils/errorResponse";

// @desc Login user
// @route POST /api/v1/auth/login
// @access Public

export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    // Validate emil & password
    if (!email || !password) {
      return next(
        new ErrorResponse("Please provide an email and password", 400)
      );
    }

    // TODO: handle login logic

    return res.status(200).json({
      success: true,
    });
  }
);

// @desc Register user
// @route POST /api/v1/auth/register
// @access Public

export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;

    // Validate emil & password
    if (!name || !email || !password) {
      return next(new ErrorResponse("Please provide all fields", 400));
    }

    // TODO: handle register logic

    return res.status(200).json({
      success: true,
    });
  }
);
