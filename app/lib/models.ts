import mongoose, { Model, Document } from 'mongoose';

// Define the interface for your position document
interface PositionDocument extends Document {
  title: string;
  responsibilities?: string[];
}

// Define the Mongoose schema
const positionSchema = new mongoose.Schema<PositionDocument>({
  title: { type: String, required: true },
  responsibilities: { type: [String] },
});

// Define the Mongoose model using the schema and the PositionDocument interface
export const Positions: Model<PositionDocument> =
  mongoose.models.Positions ||
  mongoose.model<PositionDocument>('Positions', positionSchema);
