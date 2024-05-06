export interface IControllers {
  handle(request: any): Promise<IHttpResponse>;
}
export interface IHttpResponse {
  statusCode: number;
  body: any;
}
