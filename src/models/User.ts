import mongoose, { Document as MongoDBDocument, Schema } from 'mongoose';

export interface UserDocument extends MongoDBDocument {
  email: string;
  lastName: string;
  firstName: string;
  currentPosition: string;
  city: string;
  country: string;
  website: string;
  gender: string;
  linkedin: string;
  postalCode: string;
  streetName: string;
  nationality: string;
  phoneNumber: string;
  countryCode: string;
  dateOfBirth: string;
  houseNumber: string;
  placeOfBirth: string;
  maritalStatus: string;
  drivingLicenses: string;
  avatar: string;
}

const userSchema = new Schema<UserDocument>({
  email: { type: String },
  lastName: { type: String },
  firstName: { type: String },
  currentPosition: { type: String },
  city: { type: String },
  country: { type: String },
  website: { type: String },
  gender: { type: String },
  linkedin: { type: String },
  postalCode: { type: String },
  streetName: { type: String },
  nationality: { type: String },
  phoneNumber: { type: String },
  countryCode: { type: String },
  dateOfBirth: { type: String },
  houseNumber: { type: String },
  placeOfBirth: { type: String },
  maritalStatus: { type: String },
  drivingLicenses: { type: String },
  avatar: { type: String },
});

userSchema.set('timestamps', true);
const UserModel =
  mongoose.models?.User || mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
