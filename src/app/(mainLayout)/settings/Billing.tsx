import styles from "@/styles/Billings.module.css";
import classNames from "classnames";
export default function Billing() {
  const invoices = [
    { date: "Apr. 12, 2022", status: "Paid", card: "4952" },
    { date: "Sep. 5, 2022", status: "Paid", card: "1234" },
    { date: "Apr. 23, 2023", status: "Paid", card: "6565" },
    { date: "Dec. 15, 2022", status: "Paid", card: "2342" },
  ];

  return (
    <div className="text-white fw-light container">
      <section className={`d-flex justify-content-between ${styles["bg-transparent"]} ${styles["form-shadow"]} `}>
        <div>
          <h3>Individual Plan</h3>
          <p className="text-secondary">Organization plan - collaborate on projects with your team.</p>
          <button type="button" style={{ backgroundColor: "#4E39F9", color: "white" }} className="btn ">
            Change Plan
          </button>
        </div>
        <div>
          <h3>$70/mo</h3>
        </div>
      </section>
      <br></br>
      <section className={`${styles["form-shadow"]}`}>
        <h3 className="mb-3">Billing Information</h3>
        <div className="row">
          <div className="col-6">
            <div style={{borderRadius:"10px"}} className="d-flex justify-content-between border border-1 border-secondary p-3">
              <div>
                <h5 className="mb-2">Payment Method</h5>
                <div style={{color:"rgb(112,121,133)"}}>Card Information</div>
                <p>Mastercard ending in 4952</p>
                <div style={{color:"rgb(112,121,133)"}}>Name on card</div>
                <div>John Doe</div>
              </div>
              <div>
                <button type="button" className="btn btn-lg btn-primary">
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div style={{borderRadius:"10px"}} className="d-flex justify-content-between border border-1 border-secondary p-3">
              <div>
                <h5 className="mb-2">Billing Details</h5>
                <div style={{color:"rgb(112,121,133)"}}>Next Billing Date</div>
                <p>Apr. 7, 2024</p>
                <div style={{color:"rgb(112,121,133)"}}>Billing Address</div>
                <div className="text-nowrap">708 W. Summit Ave, San Antonio, Tx. 78201</div>
              </div>
              <div>
                <button type="button" className="btn btn-lg btn-primary">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <table className="table">
          <thead>
            <tr >
              <th style={{color:"rgb(112,121,133)"}} scope="col">Invoice Date</th>
              <th  style={{color:"rgb(112,121,133)"}} scope="col" className="col-3">
                Status
              </th>
              <th style={{color:"rgb(112,121,133)"}} scope="col" className="col-5">
                Card Used
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index}>
                <td>{invoice.date}</td>
                <td
                  className={classNames({
                    "text-bright-green": invoice.status === "Paid"
                  })}
                >
                  {invoice.status}
                </td>
                <td>Mastercard ending in {invoice.card}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
