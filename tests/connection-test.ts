import mongoose from 'mongoose';
import { connectToDatabase } from '../lib/database/index';

async function testDatabaseConnection() {
  try {
    // Connect to the database
    await connectToDatabase();

    // Define a Mongoose model
    const TestModel = mongoose.model('Test', new mongoose.Schema({ name: String }));

    // Try to create a new document
    const testDocument = new TestModel({ name: 'Test' });
    await testDocument.save();

    console.log('Successfully connected to the database and created a document');

    // Try to read the document
    const foundDocument = await TestModel.findOne({ name: 'Test' });
    console.log('Successfully read the document:', foundDocument);

  } catch (error) {
    console.error('Failed to connect to the database or interact with it:', error);
  }
}

testDatabaseConnection();