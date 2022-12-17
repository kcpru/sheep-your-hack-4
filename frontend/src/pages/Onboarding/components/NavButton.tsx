import { Button } from '@chakra-ui/react'

interface NavButtonProps {
  children: string
  onClick: () => void
}

const NavButton = ({ children, onClick }: NavButtonProps) => {
  return (
    <Button
      type="submit"
      colorScheme="green"
      mt="8"
      border="5px solid"
      borderColor="green.200"
      bg="green.100"
      color="green.400"
      _hover={{
        bg: 'green.200',
      }}
      _active={{
        bg: 'green.200',
      }}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  )
}

export default NavButton
