import { User } from '@/app/models/User';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);

  const pass = body.password;
  if (!pass?.length || pass.length < 5) {
    new Error('Your password must be at least 5 characters');
    return false;
  }

  const notHashedPassword = pass;
  const salt = bcrypt.genSaltSync(10);
  body.password = bcrypt.hashSync(notHashedPassword, salt);

  const createdUser = await User.create(body);

  return Response.json(createdUser);
}
