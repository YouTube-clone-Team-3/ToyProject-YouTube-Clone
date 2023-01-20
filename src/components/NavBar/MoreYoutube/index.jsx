import React from 'react';
import TabItem from '../Tab/TabItem';
import { createStudio, youtubeMusic, youtubeKids, youtubeTV } from './svgList';

const MoreYoutube = () => {
  return (
    <div>
      <TabItem title="크리에이터 스튜디오" svgYoutube={createStudio} />
      <TabItem title="YouTube Music" svgYoutube={youtubeMusic} />
      <TabItem title="YouTube Kids" svgYoutube={youtubeKids} />
      <TabItem title="YouTube TV" svgYoutube={youtubeTV} />
    </div>
  )
}

export default MoreYoutube