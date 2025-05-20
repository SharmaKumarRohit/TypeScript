declare enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404
}
declare function handleResponse(status: HttpStatus): void;
