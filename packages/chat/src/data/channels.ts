import { apiCall } from '../utils/networking'
import { IChannel } from '../utils/types'

const cachedChannelRecords: any = {}

export async function getChannelById(id: string): Promise<IChannel> {
  let cached = cachedChannelRecords[id]
  if (typeof cached !== 'undefined') return await cached
  cached = cachedChannelRecords[id] = apiCall(`Channels/${id}`)

  return await cached
}
