import { ElementType } from 'react';
import { Link, Icon, LinkProps } from '@chakra-ui/react';

import { usePageContext } from '../../context'

interface ShareLinkProps extends LinkProps {
  link: string
  label: string
  indication?: boolean
  icon: ElementType<any>
}

const ShareLink: React.FC<ShareLinkProps> = ({
  link, label, indication = false, icon, ...props
}) => {
  const { safeAnalytics } = usePageContext()
  let analyticsEvent = ""
  let prefix = "share_on"
  if(indication) {
    prefix = "indication"
  }
  const labelLow = label.toLowerCase()
  if(labelLow.includes("whatsapp")) {
    analyticsEvent = `${prefix}_whatsapp`
  } else if (labelLow.includes("facebook")) {
    analyticsEvent = `${prefix}_facebook`
  } else if (labelLow.includes("twitter")) {
    analyticsEvent = `${prefix}_twitter`
  } else {
    analyticsEvent = `${prefix}_linkedin`
  }
  return (
    <Link
      href={link}
      fontFamily="Barlow"
      fontSize="15px"
      fontWeight="700"
      border="2px solid black"
      borderRadius="8px"
      w="100%"
      h="48px"
      _hover={{bg: "#F2F6EA"}}
      display="flex"
      flexDir="row"
      justifyContent="center"
      alignItems="center"
      onClick={() => safeAnalytics(analyticsEvent)}
      {...props}
      isExternal
    >
      <Icon as={icon} w="24px" h="24px" mr="8px" />
      {label}
    </Link>
  );
}

export default ShareLink;
