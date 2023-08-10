import { DiaryEntry, EntriesWithoutSensitiveInfo } from '../types'
import diaryData from './diary.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): EntriesWithoutSensitiveInfo[] => diaries

export const addEntry = (): undefined => {}
