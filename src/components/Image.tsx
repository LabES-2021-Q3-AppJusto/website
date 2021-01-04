import { useState, useEffect } from 'react';
import { Box, Image as ChakraImg, ImageProps } from '@chakra-ui/react';
import VisibilitySensor  from 'react-visibility-sensor';

interface ImgProps extends ImageProps{
  src: string
  srcMob?: string
}

const Image: React.FC<ImgProps> = ({
  src,
  srcMob,
  ...props
}) => {
  const [load, setLoad] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const [width, setWidth] = useState(0)
  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      let w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
      setWidth( prevWidth => {
        if(srcMob && prevWidth !== w) {
          return w
        } else if (prevWidth === 0) {
          return w
        } else {
          return prevWidth
        }
      })
    }
  }
  useEffect(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])
  const handleVisibility = (value: boolean) => {
    if(value) {
      setIsActive(false)
      setLoad(true)
    }
  }
  return (
    <VisibilitySensor
      partialVisibility={true}
      active={isActive}
      onChange={handleVisibility}
    >
      <Box
        minW="1px"
        minH="1px"
      >
        {
          width > 0 && load && (
            <ChakraImg
              src={srcMob ? width < 1000 ? srcMob : src : src}
              ignoreFallback
              {...props}
            />
          )
        }
      </Box>
    </VisibilitySensor>
  );
}

export default Image;
