import { useState, useEffect } from 'react'
import { Stack } from '@chakra-ui/react'
import { 
  FaWhatsappSquare, FaFacebookSquare, FaLinkedin, FaTwitterSquare 
} from 'react-icons/fa'

import ShareLink from './ShareLink'

const SharingBar: React.FC = () => {
  const [mainUrl, setMainUrl] = useState("")
  const [sharingMsg, setSharingMsg] = useState("")
  useEffect(() => {
    let url = "https://appjusto-ladingpage.vercel.app/"
    if(process.env.NODE_ENV === "production") {
      const newUrl = window.location.href
      const main = newUrl.split("//")[1].split("/")[0]
      url = `https://${main}`
    }
    const message = encodeURIComponent("AppJusto. Mais do que um app de entregas. Somo um movimento por relações mais justas e transparentes. Faça parte agora!")
    setMainUrl(url)
    setSharingMsg(message)
  }, [])
  return (
    <Stack
      w="100%"
      maxW="560px"
      direction="row"
      spacing={4}
      mt="6px"
    >
      <ShareLink 
        link={`https://api.whatsapp.com/send?text=${sharingMsg}%20${mainUrl}`}
        label="Whatsapp"
        icon={FaWhatsappSquare}  
      />
      <ShareLink 
        link={`https://www.facebook.com/sharer/sharer.php?u=${mainUrl}%3Fsource%3Dsocial.fb&display=page&facebook%2Fclose`}
        label="Facebook"
        icon={FaFacebookSquare}  
      />
      <ShareLink 
        link={`https://twitter.com/intent/tweet?url=${mainUrl}&text=${sharingMsg}`}
        label="Twitter"
        icon={FaTwitterSquare}  
      />
      <ShareLink 
        link={`https://www.linkedin.com/sharing/share-offsite/?url=${mainUrl}`}
        label="Linkedin"
        icon={FaLinkedin}  
      />
    </Stack>
  );
}

export default SharingBar;

//https://www.linkedin.com/shareArticle?mini=true&url=${mainUrl}&source=AppJusto

//https://www.facebook.com/v5.0/dialog/share?app_id=542599432471018&href=${mainUrl}%3Fsource%3Dsocial.fb&display=page&facebook%2Fclose`