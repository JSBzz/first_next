import { CustomError } from "./CustomError";

export default class BadRequestError extends CustomError {
  private static readonly _statusCode = 400;
  private readonly _code: number;
  private readonly _logging: boolean;
  private readonly _context: { [key: string]: any };

  constructor(
    message: string,
    code?: number,
    params?: { logging?: boolean; context?: { [key: string]: any } }
  ) {
    const { logging } = params || {};

    super(message || "Bad request");
    this._code = code || BadRequestError._statusCode;
    this._logging = logging || false;
    this._context = params?.context || {};

    if (logging) {
    }

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  get errors() {
    return [{ statusCode: this.statusCode, message: this.message, context: this._context }];
  }

  get statusCode() {
    return this._code;
  }

  get logging() {
    return this._logging;
  }
}
