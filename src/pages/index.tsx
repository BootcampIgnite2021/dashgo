import { Flex, Button, Stack, InputGroup } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";

type DataProps = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido!")
    .required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

export default function SignIn() {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const handleSubmitSignIn: SubmitHandler<DataProps> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDirection="column"
        onSubmit={handleSubmit(handleSubmitSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-Mail"
            error={errors.email}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.email}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
