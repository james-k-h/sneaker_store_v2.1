import mongoose, { Schema, model, models } from 'mongoose';

const HomeFeaturedItemsSchema = new Schema(
  {
    image: { type: String },
    name: { type: String },
    url: { type: String },
    // height: { type: Number, default: 1000 },
    // width: { type: Number, default: 1200 },
    height: { type: String },
    width: { type: String },
    tags: { type: String },
    filter: { type: String },
    brand: {
      type: String,
    },
  },
  { timestamps: true }
);

export const HomeFeaturedItems =
  models?.HomeFeaturedItems ||
  model('HomeFeaturedItems', HomeFeaturedItemsSchema);
