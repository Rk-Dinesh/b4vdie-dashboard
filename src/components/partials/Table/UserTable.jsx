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
import { Link, useNavigate } from "react-router-dom";
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

const UserTable = ({Current_user}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}/getuser`);

      if (response.status === 200) {
        // Add rowIndex to each user object and set it in state
        const responsedata = response.data.token
        const usersWithRowIndex = responsedata.map((user, index) => ({
          ...user,
          rowIndex: index + 1,
        }));
        setData(usersWithRowIndex);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Admin data:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (userid) => {
    try {
      const response = await axios.delete(`${API}/delete?userid=${userid}`);
    //  console.log(response);
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
            <th className=" table-th " >USER ID</th>
            <th className=" table-th " >NAME</th>
            <th className=" table-th " >DOB</th>
            <th className=" table-th " >GENDER</th>
            <th className=" table-th " >EMAIL</th>
            <th className=" table-th " >PHONE</th>
            {/* <th className=" table-th " >STATE</th> */}
            <th className=" table-th " >ACTION</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.original.userid}>
                <td className="table-td">{row.original.rowIndex}</td>
                <td className="table-td">{row.original.userid}</td>
                <td className="table-td flex items-center space-x-3">
                  <img
                    src={`${API}/${row.original.userimage}`}
                    alt="User"
                    className="rounded-full h-10 w-10 object-cover"
                  />
                  <span>{row.original.fname}</span>
                </td>
                <td className="table-td">{row.original.dob}</td>
                <td className="table-td">{row.original.gender}</td>
                <td className="table-td">{row.original.email}</td>
                <td className="table-td">{row.original.phone}</td>
                {/* <td className="table-td">{row.original.state}</td> */}
                <td className="table-td">
                  <div className="d-flex justify-around rtl-space-x-reverse">
                    <Tooltip content="View User" placement="top" arrow animation="shift-away">
                      <Link to={`/userprofile?userid=${row.original.userid}`} className="action-btn">
                        <Icon icon="heroicons:user" />
                      </Link>
                    </Tooltip>
                    <Tooltip content="View Trip" placement="top" arrow animation="shift-away">
                      <Link to={`/trip?userid=${row.original.userid}`} className="action-btn">
                        <Icon icon="heroicons:eye" />
                      </Link>
                    </Tooltip>
                    {Current_user === "superadmin" && (
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
                        onClick={() => handleDelete(row.original.userid)}
                      >
                        <Icon icon="heroicons:trash" />
                      </button>
                    </Tooltip>
                   )}
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

export default UserTable;
