interface params {
    data?: any;
    message?: string;
    statusCode?: number;
    success?: boolean;
}

export class ResponseEntity implements params {
    readonly data: any;
    readonly message: string;
    readonly statusCode: number;
    readonly success: boolean;

    constructor(params: params) {
        this.data = params.data;
        this.message = params.message;
        this.statusCode = params.statusCode;
        this.success = params.success;
      }
}
  
const response1 = new ResponseEntity({ data: '', message: 'Success', statusCode: 200, success: true });