import { IsOptional, IsString, Max, Min } from '@nestjs/class-validator';

export class ResponseCep {
    @IsString()
    @Min(9)
    @Max(9)
    cep: string

    @IsString()
    @Min(1)
    @Max(100)
    logradouro: string

    @IsString()
    @IsOptional()
    complemento?: string

    @IsString()
    @Min(1)
    @Max(100)
    bairro?: string

    @IsString()
    @Min(1)
    @Max(100)
    localidade: string

    @IsString()
    @Min(1)
    @Max(100)
    uf: string

    @IsString()
    @IsOptional()
    ibge?: string

    @IsString()
    @IsOptional()
    gia?: string

    @IsString()
    @IsOptional()
    ddd?: string

    @IsString()
    @IsOptional()
    siafi?: string
}