import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerpage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingscount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export default function Pagination({
  totalCountOfRegisters,
  registersPerpage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerpage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingscount, currentPage - 1)
      : [];

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingscount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingscount && (
          <>
            <PaginationItem onPagechange={onPageChange} number={1} />
            {currentPage > 2 + siblingscount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => (
            <PaginationItem
              onPagechange={onPageChange}
              key={page}
              number={page}
            />
          ))}

        <PaginationItem
          onPagechange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPage.length > 0 &&
          nextPage.map((page) => (
            <PaginationItem
              onPagechange={onPageChange}
              key={page}
              number={page}
            />
          ))}

        {currentPage + siblingscount < lastPage && (
          <>
            {currentPage + 1 + siblingscount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPagechange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
