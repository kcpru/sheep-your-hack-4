import { NavLink, useLocation } from 'react-router-dom'

import '@chakra-ui/react'
import {
  ButtonGroup,
  Link as ChakraLink,
  HStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'

import { BsFillStarFill } from 'react-icons/bs'
import { HiSwitchVertical } from 'react-icons/hi'
import { IoMdSettings } from 'react-icons/io'
import { MdDashboard, MdLeaderboard } from 'react-icons/md'

import { HeaderComponent } from './Header.types'
import Link from './Link'

const Header: HeaderComponent = () => {
  const { pathname: currentPath } = useLocation()

  const leftLinks = NAV_LINKS.left.map((props) => (
    <Link {...props} currentPath={currentPath} key={props.path} />
  ))
  const rightLinks = NAV_LINKS.right.map((props) => (
    <Link {...props} currentPath={currentPath} key={props.path} />
  ))

  return (
    <HStack
      position="fixed"
      bottom={0}
      w="full"
      py={2}
      px={6}
      h="20"
      borderTopWidth={5}
      justifyContent="space-between"
      // backdropFilter="saturate(60%) blur(10px)"
      bg={useColorModeValue('gray.100', 'gray.800')}
    >
      <ButtonGroup>{leftLinks}</ButtonGroup>

      <ChakraLink
        as={NavLink}
        to={'/transaction'}
        w="20"
        h="20"
        transform={'translateY(-30%)'}
        rounded="full"
        bg="orange.100"
        border="5px solid"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        borderColor="orange.200"
      >
        <Icon as={HiSwitchVertical} fontSize="4xl" color="orange.400" />

        {/* {currentPath === '/transaction' && (
          <Box
            as={motion.div}
            position="absolute"
            className="marker"
            layoutId="marker"
            bg={useColorModeValue(`orange.100`, 'gray.200')}
            w="100%"
            h="100%"
            top="0"
            left="0"
            border="5px solid"
            borderColor={useColorModeValue(`orange.200`, 'gray.800')}
            borderRadius="full"
            zIndex="-1"
          /> 
        )} */}
      </ChakraLink>
      <ButtonGroup>{rightLinks}</ButtonGroup>
    </HStack>
  )
}

const NAV_LINKS = {
  left: [
    {
      label: 'Panel',
      path: '/dashboard',
      color: 'teal',
      icon: MdDashboard,
    },
    {
      label: 'Wyniki',
      path: '/leaderboard',
      color: 'purple',
      icon: MdLeaderboard,
    },
  ],
  right: [
    {
      label: 'Cele',
      path: '/achievements',
      color: 'green',
      icon: BsFillStarFill,
    },
    {
      label: 'Ustawienia',
      path: '/settings',
      color: 'red',
      icon: IoMdSettings,
    },
  ],
}

export default Header
