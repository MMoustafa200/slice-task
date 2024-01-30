export interface ProcessResult<T = any> {
    success: boolean;
    errorMessage?: string;
    innerError?: string;
    data?: T;
}
