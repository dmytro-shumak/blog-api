import { ApiProperty } from '@nestjs/swagger';

export class PostBodySwagger {
  @ApiProperty({ example: 'My First Post', description: 'Title of the post' })
  title: string;

  @ApiProperty({
    example: 'Description about my post',
    description: 'Description of the post',
  })
  description: string;

  @ApiProperty({
    example: '<p>Content of the post</p>',
    description: 'Content as HTML',
  })
  content: string;

  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'Featured image URL',
  })
  image: string;
}
