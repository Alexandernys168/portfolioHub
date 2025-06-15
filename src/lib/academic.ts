import data from '../data/academic.json'

export interface AcademicWork {
  name: string
  description?: string
  demoImage?: string
  link?: string
  pdf?: string
  tech?: string[]
  featured?: boolean
}

export async function getAcademicWorks(): Promise<AcademicWork[]> {
  return data as AcademicWork[]
}
