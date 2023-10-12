import { IsString, Max, Min } from "@nestjs/class-validator";

export class Cep {
    @IsString()
    @Min(8)
    @Max(8)
    cep: string
}
