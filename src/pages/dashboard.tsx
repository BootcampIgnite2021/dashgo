import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    forColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
    y: {
      show: true,
      formatter: (value) => `${value} alunos`,
      title: {
        formatter: () => "Serie: ",
      },
    },
  },
  xaxis: {
    type: "datetime",
    axisborder: {
      color: theme.colors.gray[600],
    },
    axisTics: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-03-01T00:00:00.000Z",
      "2022-03-02T00:00:00.000Z",
      "2022-03-03T00:00:00.000Z",
      "2022-03-04T00:00:00.000Z",
      "2022-03-05T00:00:00.000Z",
      "2022-03-06T00:00:00.000Z",
      "2022-03-07T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series", data: [31, 128, 10, 28, 61, 18, 109] }];

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignContent="flex-start"
        >
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
