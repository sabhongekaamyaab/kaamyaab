import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { email } = req.body

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: 'Valid Email is Required' })
  }

  try {
    // Insert the email into Supabase
    const { data, error } = await supabase
      .from('reachout')
      .insert([{ email }])
      .select()

    if (error) throw error

    return res.status(200).json({ message: 'Thank you, we will reach-out soon!' })
  } catch (error) {
    console.error('error subscribing:', error)
    return res.status(500).json({ message: 'Error registering your email' })
  }
}