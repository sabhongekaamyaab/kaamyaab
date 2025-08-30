import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, name, linkedinId, pageId } = req.body

  try {
    await prisma.emailList.create({
      data: {
        email,
        name,
        linkedinId: linkedinId || null,
        pageAccessed: pageId
      }
    })

    res.status(200).json({ message: 'Access granted' })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Error granting access' })
  }
}