import { model, Schema, Document } from 'mongoose';
import { LikedRepo } from '@/interfaces/LikedRepo.interface';

const LikedRepoSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  stars: {
    type: String,
    required: true,
  },
});

const LikedModel = model<LikedRepo & Document>('LikedRepo', LikedRepoSchema);

export default LikedModel;
