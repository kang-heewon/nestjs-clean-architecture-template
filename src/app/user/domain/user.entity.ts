import { IsNotEmpty, IsString } from 'class-validator';
export class User {
  readonly id?: number;

  @IsString()
  @IsNotEmpty()
  email!: string;

  @IsString()
  name!: string | null;
}
