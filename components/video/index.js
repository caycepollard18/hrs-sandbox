import { useVideo } from 'react-use'
import { Flex } from 'theme-ui'

const Video = () => {
  const [video, state, controls, ref] = useVideo(
    <video
      src="https://storage.googleapis.com/hrs-sandbox/DREAM-ESCAPE_43_NO-LOGO.mp4"
      as="video"
      muted
      autoPlay
      loop
    />
  )

  return (
    <Flex
      as="div"
      onClick={state.paused ? controls.play : controls.pause}
      sx={{
        width: ['auto', '100%'],
        height: ['100%', 'auto'],
        position: 'absolute',
        top: 0, left: 0,
        overflow: 'hidden',
        zIndex: 0,
        video: {
          width: ['auto', '100%'],
          height: ['100%', 'auto'],
        }
      }}
    >
      {video}
    </Flex>
  )
}

export default Video