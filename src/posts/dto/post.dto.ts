import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  image: string;
}

export class UpdatePostDto {
  title?: string;
  description?: string;
  content?: string;
  image?: string;
}
