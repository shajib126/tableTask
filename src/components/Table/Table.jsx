
const Table = (props) => {
  const data = props
  console.log(data);
  let classname;

  if(data.green){
    classname = 'green'
  }else if(data.orange){
    classname = 'orange'
  }
  return (
    <>
    
    
    <table>
        
      <thead>
        <tr>
          <th>Due Date</th>
          <th>Inv Number</th>
          <th>Part Number</th>
          <th>Part Length</th>
          <th>Process Length</th>
          <th>LB</th>
          <th>Avg Cost</th>
          <th>PCS</th>
          <th>Quantity(FT)</th>
          <th>Balance (FT)</th>
        </tr>
      </thead>
      <tbody>
        {data?.data.map((d, i) => (
          <tr className={data.green == true ? 'green' : data.orange == true ? 'orange' : i<10 ? 'green' : 'orange'} key={i}>
            <td>{d.dueDate}</td>
            <td className={d.invNumber < 0 && 'red'}>{d.invNumber}</td>
            <td className={d.invNumber < 0 && 'red'}>{d.partNumber}</td>
            <td>{d.partLength}</td>
            <td>{d.processLength}</td>
            <td>{d.quantity}</td>
            <td className={d.invNumber < 0 ?'red' :''}>${d.avgCost}</td>
            <td className={d.invNumber < 0 && 'red'}>{d.pcs}</td>
            <td className={d.invNumber < 0 && 'red'}>{d.quantity}</td>
            <td className={d.balance < 0 && 'red'}>{d.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default Table;
