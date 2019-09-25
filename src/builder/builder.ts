enum HttpMethod {
    GET = "get",
    POST = "post"
}

// 最终要发送的request
class HttpRequest {
    private _method: HttpMethod;
    private _headers: { [key: string]: string };
    private _querys: { [key: string]: string };
    private _body: any;
    constructor(method: HttpMethod, headers: { [key: string]: string }, querys: { [key: string]: string }, body: { [key: string]: string }) {
        this._method = method;
        this._headers = headers;
        this._querys = querys;
        this._body = body;
    }

    send() {
        console.log(`send http request, method: ${this._method}, querys: ${JSON.stringify(this._querys)}`);
    }
}

class RequestBuilder {
    private _method: HttpMethod;

    private _headers: { [key: string]: string } = {};

    private _querys: { [key: string]: string } = {};

    private _body: { [key: string]: string } = {};

    setMethod(method: HttpMethod): RequestBuilder {
        this._method = method;
        return this;
    }

    setHeader(key: string, value: string): RequestBuilder {
        this._headers[key] = value;
        return this;
    }

    setQuery(key: string, value: string): RequestBuilder {
        this._querys[key] = value;
        return this;
    }

    setBody(body: any): RequestBuilder {
        this._body = body;
        return this;
    }

    buildRequest(): HttpRequest {
        // 根据上面信息生成HttpRequest
        const request = new HttpRequest(this._method, this._headers, this._querys, this._body);
        return request;
    }
}

{
    const getRequest = new RequestBuilder()
                        .setMethod(HttpMethod.GET)
                        .setHeader(`content-type`, `text/plain`)
                        .setQuery(`pi`, `1`)
                        .setQuery(`ps`, `20`)
                        .buildRequest();
    getRequest.send();                    
}
