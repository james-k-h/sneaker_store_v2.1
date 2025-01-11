import { SneakerItem } from '@/app/models/SneakerItem';
import mongoose from 'mongoose';
import { isAdmin } from '../auth/[...nextauth]/route';

export async function POST(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  if (await isAdmin()) {
    const SneakerItemDoc = await SneakerItem.create(data);
    return Response.json(SneakerItemDoc);
  } else {
    return Response.json({});
  }
}

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  if (await isAdmin()) {
    const { _id, ...data } = await req.json();
    await SneakerItem.findByIdAndUpdate(_id, data);
  }
  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  return Response.json(await SneakerItem.find());
}

export async function DELETE(req) {
  mongoose.connect(process.env.MONGO_URL);
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  if (await isAdmin()) {
    await SneakerItem.deleteOne({ _id });
  }
  return Response.json(true);
}
