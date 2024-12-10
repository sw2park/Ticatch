import "./TableRow.css";

function TableRow({ listData }) {
  return (
    <>
      {listData.map((data) => (
        <tr className="confirm-table-row">
          <td>{data.seq_order_id}</td>
          <td>{data.pf_title}</td>
          <td>{data.view_date}</td>
          <td>{data.total_ticket}</td>
          <td>{data.ablecancleDate}</td>
          <td>{data.cancel_status}</td>
        </tr>
      ))}
    </>
  );
}

export default TableRow;
