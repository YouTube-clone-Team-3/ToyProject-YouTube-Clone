import React from 'react'
import Playing from '../../../components/PlayVideoInfo/Playing'
import VideoInfo from '../../../components/PlayVideoInfo/VideoInfo'
import VideoInfoDetail from '../../../components/PlayVideoInfo/VideoInfoDetail'

const PlayVideo = ({ id, video, channelId }) => {
  return (
    <div>
      <Playing id={id} />
      <VideoInfo video={video} />
      <VideoInfoDetail video={video} channelId={channelId} />
    </div>
  )
}

export default PlayVideo