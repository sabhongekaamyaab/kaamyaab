import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { userType, formData } = req.body

    if (!userType || !formData) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      })
    }

    const tableName = userType === 'student' ? 'lead_gen' : 'college_lead_gen'
    
    // Keep only relevant fields based on user type
    const relevantData = userType === 'student' 
      ? {
          name: formData.name,
          phone: formData.phone,
          college: formData.college,
          github: formData.github,
          year: formData.year,
          programming_acumen: formData.programming_acumen
        }
      : {
          name: formData.name,
          phone: formData.phone,
          college: formData.college,
          highest_package: formData.highest_package,
          average_package: formData.average_package,
          placement_percentage: formData.placement_percentage
        }

    // Validate required fields
    const requiredFields = Object.keys(relevantData)
    const missingFields = requiredFields.filter(field => !relevantData[field])
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      })
    }

    const { data, error } = await supabase
      .from(tableName)
      .insert([relevantData])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Data submitted successfully',
      data 
    })
  } catch (error) {
    console.error('Error processing lead:', error)
    return res.status(500).json({ 
      success: false, 
      message: error.message || 'Error submitting form' 
    })
  }
}