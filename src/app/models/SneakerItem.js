import mongoose, { Schema, model, models } from 'mongoose';

const SizeSchema = new Schema({
  name: String,
  size: Number,
});

const SneakerItemSchema = new Schema(
  {
    image: { type: String },
    name: { type: String },
    description: { type: String },
    redirect: { type: String },
    category: { type: mongoose.Types.ObjectId },
    basePrice: { type: Number },
    imageHeight: { type: Number, default: 1200 },
    imageWidth: { type: Number, default: 1200 },
    topSeller: { type: Boolean },
    newArrival: { type: Boolean },
    popular: { type: Boolean },
    sale: { type: Boolean },
    brand: {
      type: String,
    },
    sizes: { type: [SizeSchema] },
  },
  { timestamps: true }
);

export const SneakerItem =
  models?.SneakerItem || model('SneakerItem', SneakerItemSchema);

// to_do: add brand (string - do I want an enum? [probably...]), sales flag (boolean)
