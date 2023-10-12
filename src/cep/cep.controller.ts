import { Controller, Get, Param } from '@nestjs/common';
import { CepService } from './cep.service';
import { Cep } from './entities/cep.entity';

@Controller('api')
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Get('cep/:cep')
  async findCep(@Param('cep') cep : Cep) {
    return await this.cepService.findCep(cep);
  }
}
