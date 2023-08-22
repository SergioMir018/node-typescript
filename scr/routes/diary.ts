import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils/newEntry'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diaryEntry = diaryServices.findById(+req.params.id)

  return (diaryEntry != null)
    ? res.send(diaryEntry)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedNewDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedNewDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
