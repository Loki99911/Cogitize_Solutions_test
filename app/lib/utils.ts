import mongoose from 'mongoose';
import { ConnectionToDB } from '../types/positions';

export const connectToDB = async () => {
  const connection: ConnectionToDB = { isConnected: false };

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect('');
    connection.isConnected =
      db.connections[0].readyState === mongoose.ConnectionStates.connected;
  } catch (error) {
    throw new Error('Failed to connect to DB!!!');
  }
};
