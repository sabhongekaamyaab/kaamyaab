import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secure-secret-here'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle GET requests for fetching emails
  if (req.method === 'GET') {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided' })
    }

    try {
      const token = authHeader.split(' ')[1]
      verify(token, JWT_SECRET)
      
      const emails = await prisma.emailList.findMany({
        orderBy: { createdAt: 'desc' }
      })
      
      return res.status(200).json(emails)
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' })
    }
  }
  
  // Handle POST requests for logout
  if (req.method === 'POST' && req.body.action === 'logout') {
    // You could implement token blacklisting here if needed
    return res.status(200).json({ message: 'Logged out successfully' })
  }

  return res.status(405).json({ message: 'Method not allowed' })
}