import { NextFunction } from "express";
import Joi from "joi";
import { AppError, HttpCode } from "../utils/AppError";

export const validator = async(
    schemaName: Joi.ObjectSchema,
    body: object,
    next: NextFunction
):Promise<void> => {
    const value = await schemaName.validate(body, {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    })
}