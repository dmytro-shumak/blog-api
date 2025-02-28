import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Trim } from '../../common/decorators/trim.decorator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  content: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  image: string;
}

export class UpdatePostDto {
  title?: string;
  description?: string;
  content?: string;
  image?: string;
}
