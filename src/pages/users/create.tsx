import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useMutation } from "react-query";

import * as Yup from "yup";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

interface Props {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatorio"),
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Nome obrigatorio"),
  password: Yup.string()
    .min(8, "Senha deve ter pelo menos 8 caracteres de comprimento.")
    .required("Senha é obrigatorio"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "As senhas devem coincidir")
    .required("Senha de confimação obrigatoria"),
});

export default function UserCreate() {
  const router = useRouter();

  const createUser = useMutation(
    async (user: Props) => {
      const response = await api.post("users", {
        user: {
          ...user,
          created_at: new Date(),
        },
      });
      return response.data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  // const handleSubmitCreateUser: SubmitHandler<Props> = async (
  //   values: Props
  // ) => {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   console.log(values);
  // };

  const handleSubmitCreateUser: SubmitHandler<Props> = async (
    values: Props
  ) => {
    await createUser.mutateAsync(values);
    router.push("/users");
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleSubmitCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome completo"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register("password")}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confimarção de senha"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
