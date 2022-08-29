import { IsString } from 'class-validator';

export class LikedRepoDto {
  @IsString()
  public name: string;

  @IsString()
  public link: string;

  @IsString()
  public desc: string;
  @IsString()
  public stars: string;
}
