import { useEffect } from 'react';
import { useState } from 'react';
import data from '../data.json';

let keys;
let getdata = false;

if (data.length !== 0) {
    keys = Object.keys(data[0])
    getdata = true
}
function Table() {
    let activeId = null;
    const [tableData, setTableData] = useState(data)
    const [isActive, setIsActive] = useState()
    const accOrder = (key) => {
        activeId = key
        let myData = []
            .concat(tableData)
            .sort((a, b) => typeof (a[key]) === 'string' ? a[key].localeCompare(b[key]) : (a[key] - b[key]))
        setTableData(myData)
    }

    const decOrder = (key) => {
        let myData = []
            .concat(tableData)
            .sort((a, b) => typeof (a[key]) === 'string' ? b[key].localeCompare(a[key]) : (b[key] - a[key]))
        setTableData(myData)
    }

    const handleClick =( id) => {
        console.log(id)
        setIsActive(id)
      }
      

    return (
        (getdata === true) ? (
            <div className="App">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            {
                                keys.map((key) => (
                                    <th>{key} <a onClick={() => accOrder(key)}>
                                        <span className="iconBox" className={ isActive === key && 'is-active' } onClick={ () => handleClick((key)) }>
                                            <i className="fa fa-caret-up upArrow sortingAsc" aria-hidden="true"></i>
                                        </span></a>
                                        <a onClick={() => decOrder(key)} >
                                            <span className="iconBox" className={ isActive === 'dec'+key && 'is-active' } onClick={ () => handleClick('dec'+key) }>
                                                <i className="fa fa-caret-down downArrow" aria-hidden="true"></i>
                                            </span></a>
                                    </th>
                                ))
                            }
                        </thead>
                        <tbody>
                            {
                                tableData?.map(val => (
                                    <tr>
                                        {keys.map((res) => (
                                            <td>{val[res]}</td>
                                        ))}
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        ) : (<h1 className="text-center">No records Found</h1>)
    );

}
export default Table;