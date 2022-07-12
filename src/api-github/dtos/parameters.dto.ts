import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class ParametersDto {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @Min(1)
  @Max(100)
  topNumber: number;

  @IsString()
  @IsNotEmpty()
  language: string;
}
