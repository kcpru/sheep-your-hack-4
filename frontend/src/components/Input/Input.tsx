import {
  Icon as ChakraIcon,
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react'

export type InputProps = {
  type: string
  name: string
  label: string
  placeholder: string
  icon: React.FC
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = ({
  type,
  name,
  label,
  placeholder,
  icon,
  onChange,
  value,
  ...rest
}: InputProps) => {
  return (
    <FormControl>
      <FormLabel color="gray.600" mb="1" fontWeight={600}>
        {label}
      </FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <ChakraIcon
            as={icon}
            transform="translate(2px, 2px)"
            fontSize={26}
            color={useColorModeValue('gray.600', 'gray.300')}
          />
        </InputLeftElement>

        <ChakraInput
          placeholder={placeholder}
          _placeholder={{
            color: 'gray.400',
            fontWeight: '00',
          }}
          border="5px solid"
          size="lg"
          borderColor="gray.200"
          color="gray.600"
          autoComplete="off"
          id={name}
          name={name}
          type={type}
          onChange={onChange}
          _focus={{
            borderColor: 'blue.100',
            bg: 'blue.50',
            boxShadow: 'none',
          }}
          {...rest}
        />
      </InputGroup>
    </FormControl>
  )
}

export default Input
