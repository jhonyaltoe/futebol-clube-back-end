export class CustonError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default function HandleThrowError(message: string, status: number): void {
  throw new CustonError(message, status);
}
