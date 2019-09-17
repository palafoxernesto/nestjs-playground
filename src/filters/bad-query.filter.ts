import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Response } from 'express'
import { STATUS_CODES } from 'http'
import { QueryFailedError } from 'typeorm'

@Catch(QueryFailedError)
export class QueryFailedFilter implements ExceptionFilter {
  constructor(public reflector: Reflector) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()

    const status = HttpStatus.BAD_REQUEST
    console.log(exception, 'la exep')
    response.status(status).json({
      statusCode: status,
      error: STATUS_CODES[status],
      message: exception.detail
    })
  }
}
