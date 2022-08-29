import { model, Schema, Document } from 'mongoose';
import { PersonInterface } from '@interfaces/person.interface';

const personSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  address: {
    type: Schema.Types.ObjectId,
    ref: 'Address',
  },
  friends: {
    type: Schema.Types.ObjectId,
    ref: 'Friends',
  },
});

const PersonModel = model<PersonInterface & Document>('Person', personSchema);

export default PersonModel;
