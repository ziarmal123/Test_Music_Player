import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa'

const PlayPause = ({song,handlePause,handlePlay,activeSong,isPlaying}) => 
  (isPlaying && activeSong?.title===song.title ?(<FaPauseCircle size={25} className="text-gray-300 items-center" onClick={handlePause}
  />):(<FaPlayCircle size={25} className="text-gray-300" onClick={handlePlay} />)
);

export default PlayPause;
