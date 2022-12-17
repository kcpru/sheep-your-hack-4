import { NavLink, useLocation } from 'react-router-dom'

import '@chakra-ui/react'
import {
  Box,
  Button,
  ButtonGroup,
  Link as ChakraLink,
  HStack,
  Icon,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

import { BsFillStarFill, BsPiggyBankFill } from 'react-icons/bs'
import { IoMdSettings } from 'react-icons/io'
import { MdDashboard, MdLeaderboard } from 'react-icons/md'

import { HeaderComponent } from './Header.types'

const Header: HeaderComponent = ({ siteTitle }) => {
  console.log({ siteTitle })
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
        to={'/money'}
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
        <Icon as={BsPiggyBankFill} fontSize="3xl" color="orange.400" />
        {currentPath === '/money' && (
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
        )}
      </ChakraLink>
      <ButtonGroup>{rightLinks}</ButtonGroup>
    </HStack>
  )
}

const Link = ({ path, icon, color, currentPath }) => {
  const isActive = currentPath === path

  return (
    <ChakraLink
      as={NavLink}
      to={path}
      key={path}
      color={
        isActive
          ? useColorModeValue(`${color}.400`, 'gray.800')
          : useColorModeValue('gray.400', 'gray.500')
      }
      position="relative"
      borderRadius="xl"
      fontWeight="bold"
      p="2px 12px"
      userSelect="none"
      display="flex"
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      w="12"
      h="12"
      _hover={{
        color: isActive
          ? useColorModeValue(`${color}.500`, `${color}.700`)
          : useColorModeValue('gray.500', 'gray.100'),
      }}
    >
      {isActive && (
        <Box
          as={motion.div}
          position="absolute"
          className="marker"
          layoutId="marker"
          bg={useColorModeValue(`${color}.100`, 'gray.200')}
          w="100%"
          h="100%"
          top="0"
          left="0"
          border="5px solid"
          borderColor={useColorModeValue(`${color}.200`, 'gray.800')}
          borderRadius="full"
          zIndex="-1"
        />
      )}
      <Icon as={icon} fontSize="2xl" />
    </ChakraLink>
  )
}

const NAV_LINKS = {
  left: [
    {
      label: 'Panel',
      path: '/',
      color: 'green',
      icon: MdDashboard,
    },
    {
      label: 'Wyniki',
      path: '/results',
      color: 'red',
      icon: MdLeaderboard,
    },
  ],
  right: [
    {
      label: 'Cele',
      path: '/goals',
      color: 'blue',
      icon: BsFillStarFill,
    },
    {
      label: 'Ustawienia',
      path: '/settings',
      color: 'purple',
      icon: IoMdSettings,
    },
  ],
}

export default Header
