import { extendTheme, ColorModeScript } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';



const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const Theme = extendTheme({ config })

export default Theme;