import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import Icon from "../../ui/Icon";
import Tooltip from "../../ui/Tooltip";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { API } from "../../../host";


const COLUMNS = [
  {
    Header: "#",
    accessor: "rowIndex", 
  },
  {
    Header: "FIRST NAME",
    accessor: "firstname",
  },
  {
    Header: "LAST NAME",
    accessor: "lastname",
  },
  {
    Header: "EMAIL",
    accessor: "email",
  },
  {
    Header: "PHONE",
    accessor: "phone",
  },
  {
    Header: "ACTION",
    accessor: "actions", // You can add action buttons here
  },
];

const TripTable = () => {

    const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userid = params.get("userid");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}/gettrip?userid=${userid}`);
       
      if (response.status === 200) {
        
        const usersWithRowIndex = response.data.token.map((user, index) => ({
          ...user,
          rowIndex: index + 1,
        }));
        setData(usersWithRowIndex);
       // console.log(usersWithRowIndex)
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Admin data:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (tripid) => {
    try {
      const response1 = await axios.delete(`${API}/deletetrip?tripid=${tripid}`);
      const response2 = await axios.delete(`${API}/deletealltransport?tripid=${tripid}`);
      const response4 = await axios.delete(`${API}/deleteallpitstop?tripid=${tripid}`);
      const response3 = await axios.delete(`${API}/deletealltraveller?tripid=${tripid}`);
      const response5 = await axios.delete(`${API}/deleteallalert?tripid=${tripid}`);
      
      window.location.reload();
    } catch (error) {
      console.error("Error deleting :", error);
    }
  };




  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }, // Initial page settings
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="md:flex justify-between items-center mb-6">
        <div className=" flex items-center space-x-3 rtl:space-x-reverse">
          <select
            className="form-control py-2 w-max"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[5, 10, 15].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Page{" "}
            <span>
              {pageIndex + 1} of {pageOptions.length}
            </span>
          </span>
        </div>
        <div>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
      </div>
      <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
        <thead className="bg-slate-200 dark:bg-slate-700">
          <tr>
            <th className=" table-th " >#</th>
            <th className=" table-th " >NAME</th>
            <th className=" table-th " >TRIP ID</th>
            <th className=" table-th " >TRIP NAME</th>
            <th className=" table-th " >START DATE</th>
            <th className=" table-th " >END DATE</th>
            <th className=" table-th " >START POINT</th>
            <th className=" table-th " >END POINT</th>
            <th className=" table-th " >ACTION</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.original.tripid}>
                <td className="table-td">{row.original.rowIndex}</td>
                <td className="table-td">{row.original.fname}</td>
                <td className="table-td">{row.original.tripid}</td>
                <td className="table-td">{row.original.tripname}</td>
                <td className="table-td">{row.original.start_date}</td>
                <td className="table-td">{row.original.end_date}</td>
                <td className="table-td">{row.original.start_point}</td>
                <td className="table-td">{row.original.end_point}</td>
                <td className="table-td">
                  <div className="d-flex justify-around rtl-space-x-reverse">
                    <Tooltip content="view" placement="top" arrow animation="shift-away" >
                    <Link to={`/tripdetails?tripid=${row.original.tripid}` } className="action-btn">
                        <Icon icon="heroicons:eye" />
                      </Link>
                    </Tooltip>
                    <Tooltip
                      content="Delete"
                      placement="top"
                      arrow
                      animation="shift-away"
                      theme="danger"
                    >
                      <button
                        className="action-btn"
                        type="button"
                        onClick={() => handleDelete(row.original.tripid)}
                      >
                        <Icon icon="heroicons:trash" />
                      </button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center">
        <div className=" flex items-center space-x-3 rtl:space-x-reverse"></div>
        <ul className="flex items-center space-x-3 rtl:space-x-reverse">
          <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
            <button
              className={` ${!canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <Icon icon="heroicons:chevron-double-left-solid" />
            </button>
          </li>
          <li className="text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180">
            <button
              className={` ${!canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Prev
            </button>
          </li>
          {pageOptions.map((page, pageIdx) => (
            <li key={pageIdx}>
              <button
                href="#"
                aria-current="page"
                className={`${pageIdx === pageIndex
                  ? "bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium "
                  : "bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "
                  } text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`}
                onClick={() => gotoPage(pageIdx)}
              >
                {page + 1}
              </button>
            </li>
          ))}
          <li className="text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180">
            <button
              className={` ${!canNextPage ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </button>
          </li>
          <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className={` ${!canNextPage ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              <Icon icon="heroicons:chevron-double-right-solid" />
            </button>
          </li>
        </ul>
      </div>

    </>
  );
};

export default TripTable;
