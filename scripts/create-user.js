const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function createUser(email, password) {
  try {
    // Check if user already exists
    const existingUser = await prisma.admin.findUnique({
      where: { email },
    })

    if (existingUser) {
      console.error('❌ User already exists:', email)
      return
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
      },
    })

    console.log('✅ Admin user created successfully:', user.email)
  } catch (error) {
    console.error('❌ Error creating user:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

// Get command line arguments
const [email, password] = process.argv.slice(2)

if (!email || !password) {
  console.log('Usage: node scripts/create-user.js <email> <password>')
  process.exit(1)
}

createUser(email, password)