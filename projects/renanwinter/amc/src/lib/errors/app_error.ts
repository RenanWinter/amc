

export class AppError extends Error {
  constructor(public override readonly message: string, public readonly code?: string) {
    super(message);
  }
}
