import { IsString, IsNumber } from 'class-validator';

export class studentDtos {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  sex: string;
}
