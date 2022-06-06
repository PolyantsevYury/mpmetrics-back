import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable({})
export class AuthService {
  signup() {
    return { message: 'I am signed up' }
  }

  signin() {
    return { message: 'I am signed in' }
  }
}