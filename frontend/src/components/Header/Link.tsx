import { NavLink } from 'react-router-dom'

import {
  Box,
  Link as ChakraLink,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

interface LinkProps {
  path: string
  icon: React.FC
  color: string
  currentPath: string
}

const Link = ({ path, icon, color, currentPath }: LinkProps) => {
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
      userSelect="none"
      display="flex"
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      w="14"
      h="14"
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
          layout="position"
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

export default Link
