const { PrismaClient } = require('@prisma/client');

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

const connectPrisma = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Supabase (Prisma) connected");
  } catch (err) {
    console.error("❌ Prisma connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = { prisma, connectPrisma }; 