import { NavLink } from 'react-router-dom'

import '@chakra-ui/react'
import { Box, HStack, Icon, useColorModeValue } from '@chakra-ui/react'

import { MdDashboard } from 'react-icons/md'

import { HeaderComponent } from './Header.types'

const Header: HeaderComponent = ({ siteTitle }) => {
  console.log({ siteTitle })

  return (
    <HStack
      position="fixed"
      bottom={0}
      w="full"
      py={2}
      px={6}
      // backdropFilter="saturate(60%) blur(10px)"
      bg={useColorModeValue('blue.100', 'gray.800')}
    >
      {NAV_LINKS.map(({ label, path, icon }) => (
        <Box textAlign={'center'} key={path}>
          <Icon as={MdDashboard} fontSize="3xl" />
          <Box>{label}</Box>
        </Box>
      ))}
    </HStack>
  )
}

const NAV_LINKS = [
  {
    label: 'Panel',
    path: '/',
    icon: MdDashboard,
  },
  {
    label: 'Ustawienia',
    path: '/settings',
    icon: MdDashboard,
  },
]

export default Header
