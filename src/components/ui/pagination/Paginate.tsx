import { FC } from "react";
import ReactPaginate from "react-paginate";

import styles from './Paginate.module.scss'

interface IProps {
    pageCount: number;
    onPageChange: (page: number) => void;
}

const Paginate: FC<IProps> = ({ pageCount, onPageChange }) => {
    return (
        <ReactPaginate
            breakLabel="..."
            onPageChange={({ selected }) => onPageChange(selected)}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            className={styles.pagination}
            activeClassName={styles.paginationActive}
            previousLabel={false}
            nextLabel={false}
        />
    );
};

export { Paginate };
