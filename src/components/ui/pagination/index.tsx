"use client";

import { Pagination as MuiPagination, PaginationItem } from "@mui/material";
import Link from "next/link";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  baseHref: string;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  baseHref,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderPaginationItem = (item: any) => {
    const isPreviousButton = item.type === "previous";
    const isNextButton = item.type === "next";
    const isDisabled =
      (isPreviousButton && currentPage === 1) ||
      (isNextButton && currentPage === totalPages);

    if (isPreviousButton) {
      return (
        <PaginationItem
          {...item}
          disabled={isDisabled}
          component={isDisabled ? "div" : Link}
          href={isDisabled ? undefined : `${baseHref}?page=${currentPage - 1}`}
        >
          <ArrowBack />
        </PaginationItem>
      );
    }

    if (isNextButton) {
      return (
        <PaginationItem
          {...item}
          disabled={isDisabled}
          component={isDisabled ? "div" : Link}
          href={isDisabled ? undefined : `${baseHref}?page=${currentPage + 1}`}
        >
          <ArrowForward />
        </PaginationItem>
      );
    }

    return (
      <Link href={`${baseHref}?page=${item.page}`} passHref>
        <PaginationItem {...item} />
      </Link>
    );
  };

  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      color="primary"
      renderItem={renderPaginationItem}
    />
  );
};

export default PaginationComponent;
