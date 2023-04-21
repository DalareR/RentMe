import { Input, Text, VStack } from "@chakra-ui/react";

interface Props {
  register: any;
  id: string;
  type: string;
  placeholder: string;
  errors: any;
  mr?: string;
}

function FormInput({ register, id, type, placeholder, errors, mr }: Props) {
  return (
    <VStack align="start" mb="10px" mr={mr}>
      <Input {...register} id={id} type={type} placeholder={placeholder} />
      {errors && (
        <Text color="crimson" p="0">
          {errors.message}
        </Text>
      )}
    </VStack>
  );
}

export default FormInput;
