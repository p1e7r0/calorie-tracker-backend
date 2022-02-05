export interface Response extends Error {
  response: {
    data: {
      errorMessage?: string;
    };
  };
}

export class ErrorResponse extends Error {
  public message: string;

  public name: string;

  public stack: string;

  public response: Response['response'];

  constructor(message: string, response: Response['response']) {
    super(message);
    this.message = '';
    this.name = '';
    this.stack = '';
    this.response = response;
  }
}

export const isErrorWithResponse = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: ErrorResponse | any,
): error is ErrorResponse => !!(error instanceof Error && (error as ErrorResponse).response?.data);

export const isError = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: Error | any,
): error is Error => !!(error instanceof Error);
