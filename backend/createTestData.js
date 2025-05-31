import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Journal from "./models/Journal.js";

dotenv.config();

async function seedMockJournals() {
  try {
    connectDB();

    const username = "gappaneo";

    const mockJournals = [
      {
        username,
        title: "A Walk in the Park",
        date: new Date("2025-05-01"),
        caption: `Today’s walk in the park was a much-needed escape from the usual chaos. As I wandered among the towering trees and soft rustling leaves, I found myself slowing down, letting my thoughts drift. The squirrels scampering about seemed so carefree, reminding me of simpler times when I could just enjoy the moment without worrying about deadlines or expectations. It made me realize how important it is to pause and reconnect with nature—and with myself—every now and then.`,
      },
      {
        username,
        title: "Study Grind",
        date: new Date("2025-05-10"),
        caption: `I dedicated the entire day to preparing for exams, pushing through the mental fog and exhaustion. The sheer volume of information felt overwhelming, and there were moments when I doubted if all this effort would really pay off. But then I reminded myself that growth rarely comes from comfort. Despite the fatigue, I felt a strange sense of accomplishment knowing I gave it my all. I just hope I remember to balance hard work with rest moving forward, to avoid burnout.`,
      },
      {
        username,
        title: "Weekend Vibes",
        date: new Date("2025-05-17"),
        caption: `This weekend was a refreshing break from my usual routine. Spending time with friends reminded me how much I value human connection. We stumbled upon a new café, and the cozy atmosphere, combined with the aroma of freshly brewed coffee, made for the perfect setting to share stories and laughter. It struck me how these small moments—simple conversations and shared smiles—build the foundation for lasting memories. It’s a reminder not to take these times for granted.`,
      },
      {
        username,
        title: "Code Breakthrough",
        date: new Date("2025-05-25"),
        caption: `Today marked a significant milestone in my coding journey. After hours of frustration and countless attempts, I finally identified and fixed the elusive bug that had been stalling my app’s progress. The feeling of breakthrough was exhilarating—like a fog lifting and revealing new possibilities. This experience taught me patience and perseverance, reinforcing that setbacks aren’t failures but opportunities to learn and improve. It motivates me to keep tackling challenges head-on, no matter how complex they seem.`,
      },
    ];

    const result = await Journal.insertMany(mockJournals);
    console.log(`Inserted ${result.length} mock journals.`);
  } catch (err) {
    console.error("Failed to insert mock data:", err);
  } finally {
    mongoose.connection.close();
  }
}

seedMockJournals();
