import { DiaryEntry, EntriesWithoutSensitiveInfo, NewDiaryEntry } from '../types'
import diaryData from './diary.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): EntriesWithoutSensitiveInfo | undefined => {
  const entry = diaries.find(d => d.id === id)

  if (entry != null) {
    const { comment, ...restEntry } = entry

    return restEntry
  }

  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): EntriesWithoutSensitiveInfo[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility }
  })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)

  return newDiary
}
