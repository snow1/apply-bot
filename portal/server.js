import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3010

// Get path to unknown.json (project root directory)
const unknownJsonPath = path.join(__dirname, '..', 'unknown.json')

app.use(cors())
app.use(express.json())

// Read unknown.json
app.get('/api/unknown', (req, res) => {
  try {
    if (!fs.existsSync(unknownJsonPath)) {
      return res.json([])
    }
    const data = fs.readFileSync(unknownJsonPath, 'utf-8')
    const json = data.trim() ? JSON.parse(data) : []
    res.json(Array.isArray(json) ? json : [])
  } catch (error) {
    console.error('Error reading unknown.json:', error)
    res.status(500).json({ error: 'Failed to read unknown.json' })
  }
})

// Update unknown.json
app.post('/api/unknown', (req, res) => {
  try {
    const questions = req.body
    if (!Array.isArray(questions)) {
      return res.status(400).json({ error: 'Invalid data format' })
    }
    fs.writeFileSync(unknownJsonPath, JSON.stringify(questions, null, 2), 'utf-8')
    res.json({ success: true })
  } catch (error) {
    console.error('Error writing unknown.json:', error)
    res.status(500).json({ error: 'Failed to write unknown.json' })
  }
})

// Update single question
app.put('/api/unknown/:index', (req, res) => {
  try {
    const index = parseInt(req.params.index)
    const updatedQuestion = req.body
    
    if (!fs.existsSync(unknownJsonPath)) {
      return res.status(404).json({ error: 'unknown.json not found' })
    }
    
    const data = fs.readFileSync(unknownJsonPath, 'utf-8')
    const questions = data.trim() ? JSON.parse(data) : []
    
    if (!Array.isArray(questions) || index < 0 || index >= questions.length) {
      return res.status(400).json({ error: 'Invalid index' })
    }
    
    questions[index] = updatedQuestion
    fs.writeFileSync(unknownJsonPath, JSON.stringify(questions, null, 2), 'utf-8')
    res.json({ success: true, question: updatedQuestion })
  } catch (error) {
    console.error('Error updating question:', error)
    res.status(500).json({ error: 'Failed to update question' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

