import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { userType, formData } = req.body
    const tableName = userType === 'student' ? 'lead_gen' : 'college_lead_gen'
    
    const relevantData = Object.keys(formData).reduce((acc, key) => {
      if (
        userType === 'student' && ['designation', 'department', 'institute_name'].includes(key) ||
        userType === 'college' && ['github', 'year', 'programming_acumen'].includes(key)
      ) {
        return acc
      }
      return { ...acc, [key]: formData[key] }
    }, {})

    const { data, error } = await supabase
      .from(tableName)
      .insert([relevantData])

    if (error) throw error

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Error processing lead:', error)
    return res.status(500).json({ 
      success: false, 
      message: 'Error submitting form' 
    })
  }
}