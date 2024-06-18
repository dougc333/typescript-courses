import { apiCall } from '../utils/networking'
import { ITeam } from '../utils/types'

let cachedAllTeamsList: Promise<ITeam[]>
export async function getAllTeams() {
  if (typeof cachedAllTeamsList === 'undefined')
    cachedAllTeamsList = apiCall('teams')

  return await cachedAllTeamsList
}

const cachedTeamRecords: any = {}

export async function getTeamById(id: string): Promise<ITeam> {
  let cached = cachedTeamRecords[id]
  if (typeof cached === 'undefined')
    cached = cachedTeamRecords[id] = apiCall(`teams/${id}`)
  return await cached
}