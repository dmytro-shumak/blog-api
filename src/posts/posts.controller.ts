import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { PostsService } from './posts.service';
import { PostBodySwagger } from './swaggers/post-body-swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all blog posts' })
  @ApiResponse({
    status: 200,
    description: 'List of all posts',
    type: [PostBodySwagger],
  })
  async getAll(@Query('page') page: string, @Query('limit') limit: string) {
    const pageNumber = parseInt(page, 10) || 1;
    const limitNumber = parseInt(limit, 10) || 10;

    return this.postsService.findAll(pageNumber, limitNumber);
  }

  @ApiOperation({ summary: 'Retrieve a single post by ID' })
  @ApiResponse({
    status: 200,
    description: 'Post details',
    type: PostBodySwagger,
  })
  @ApiResponse({ status: 404, description: 'Post not found' })
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @ApiBody({ type: PostBodySwagger })
  @ApiResponse({
    status: 201,
    description: 'Post created successfully',
    type: PostBodySwagger,
  })
  @ApiOperation({ summary: 'Create a new blog post' })
  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @ApiOperation({ summary: 'Update an existing post' })
  @ApiBody({ type: PostBodySwagger })
  @ApiResponse({
    status: 200,
    description: 'Post updated successfully',
    type: PostBodySwagger,
  })
  @ApiResponse({ status: 404, description: 'Post not found' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @ApiOperation({ summary: 'Delete a post' })
  @ApiResponse({ status: 200, description: 'Post deleted successfully' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.postsService.delete(id);
  }
}
