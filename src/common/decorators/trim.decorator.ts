import { Transform, TransformFnParams } from 'class-transformer';

export function Trim(): PropertyDecorator {
  return Transform((params: TransformFnParams) => {
    if (typeof params.value === 'string') {
      return params.value.trim();
    }

    return params.value as unknown;
  });
}
