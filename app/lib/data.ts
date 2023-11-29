import mongoose from "mongoose";
import { Positions } from "./models";

export async function getPositions() {
  try {
    const positions = await Positions.find();
    return positions;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
