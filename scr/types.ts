export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'good' | 'great' | 'poor' | 'danger'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type EntriesWithoutSensitiveInfo = Omit<DiaryEntry, 'comment'>
