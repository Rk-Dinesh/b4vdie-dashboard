import React, { useState, useMemo, useEffect} from "react";
import axios from "axios";
import Card from "../../ui/Card";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { API } from "../../../host";

const COLUMNS = [
  // {
  //   Header: "#",
  //   accessor: "serial",
  //   Cell: (row) => {
  //     return <span>{row.row.index + 1}</span>;
  //   },
  // },

  {
    Header: "User",
    accessor: "fname",
    Cell: (row) => {
      return (
        <div>
          <span className="inline-flex items-center">
            <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
              {row?.cell?.value}
            </span>
          </span>
        </div>
      );
    },
  },
  {
    Header: "phone",
    accessor: "phone",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },
  {
    Header: "dob",
    accessor: "dob",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },
  {
    Header: "gender",
    accessor: "gender",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },
  {
    Header: "address",
    accessor: "address",
    Cell: (row) => {
      return (
        <div>
          <span className="inline-flex items-center">
            <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
              {row?.cell?.value}
            </span>
          </span>
        </div>
      );
    },
  },
];

const UserDashboardDetail= () => {
  const columns = useMemo(() => COLUMNS, []);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API }/getuser`); 
      if (response.status === 200) {
        setData(response.data.token);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching User data:", error);
      setLoading(false);
    }
  };

  const tableInstance = useTable(
    {
      columns,
      data,
    },

    useGlobalFilter,
    useSortBy,
    usePagination
  );
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    state,
    setPageSize,
    prepareRow,
  } = tableInstance;

  const { pageSize } = state;
  return (
    <>
      <Card>
       <div className = "hidden">
       <div className="md:flex justify-between items-center mb-6">
          <div className=" flex items-center space-x-3 rtl:space-x-reverse">
            <select 
              className="form-control py-2 w-max"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[2].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                 {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
       </div>
        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table
                className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
                {...getTableProps}
              >
                <thead className="bg-slate-200 dark:bg-slate-700">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          scope="col"
                          className=" table-th "
                        >
                          {column.render("Header")}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " 🔽"
                                : " 🔼"
                              : ""}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700"
                  {...getTableBodyProps}
                >
                  {page.slice(-4).map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()} className="table-td">
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/*end*/}
      </Card>
    </>
  );
};

export default UserDashboardDetail;
