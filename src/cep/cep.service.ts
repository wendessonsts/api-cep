import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cep } from './entities/cep.entity';
import { Observable, map } from 'rxjs';
import { ResponseCep } from './entities/responses/cep.response';
import { AxiosResponse } from 'axios';

@Injectable()
export class CepService {
  constructor(private readonly httpService: HttpService) { }
  async findCep(cep: Cep): Promise<Observable<AxiosResponse<ResponseCep, any>>> {
    return this.httpService.get(`${process.env.ENDPOINT_API_CEP}${cep}/json`).pipe(
      map(response => response.data),
    );
  }
}
