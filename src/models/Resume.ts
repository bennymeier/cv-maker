import mongoose, { Document as MongoDBDocument, Schema } from 'mongoose';

interface SectionItem {
  name: string;
  city: string;
  level: string;
  phone: string;
  email: string;
  finished: string;
  company: string;
  institution: string;
  contactPerson: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  description: string;
  expanded: boolean;
  url: string;
}

interface Section {
  name: string;
  label: string;
  visible: boolean;
  placement: string;
  description: string;
  items: SectionItem[];
}

interface ResumeTemplateSettings {
  color: string;
  fontSize: string;
  fontFamily: string;
}

export interface ResumeDocument extends MongoDBDocument {
  title: string;
  thumbnail: string;
  sections: Section[];
  template: {
    name: string;
    settings: ResumeTemplateSettings;
  };
}

const resumeSchema = new Schema<ResumeDocument>({
  title: { type: String },
  thumbnail: { type: String },
  sections: { type: [Object], default: [] },
  template: {
    name: { type: String },
    settings: {
      color: { type: String },
      fontSize: { type: String },
      fontFamily: { type: String },
    },
  },
});

resumeSchema.set('timestamps', true);
const ResumeModel =
  mongoose.models?.Resume ||
  mongoose.model<ResumeDocument>('Resume', resumeSchema);

export default ResumeModel;
