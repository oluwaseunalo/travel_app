import { model, Schema, Document } from 'mongoose';
import { PersonInterface } from '@interfaces/person.interface';

const AddressSchema: Schema = new Schema({
  person: {
    type: Schema.Types.ObjectId,
    ref: 'person',
  },
});

const AddressModel = model<PersonInterface & Document>('Person', AddressSchema);

export default AddressModel;
