import Line from "./Line";

function ItemsDetails() {
  const redLine = {
    height: "12px",
    width: "25px",
    border: "transparant solid",
    borderRadius: "5px",
    backgroundColor: "red",
    marginRight: "12px",
    marginTop: "6px",
  };
  const yellowLine = {
    height: "12px",
    width: "25px",
    border: "transparant solid",
    borderRadius: "5px",
    backgroundColor: "rgb(221, 221, 90)",
    marginRight: "12px",
    marginTop: "6px",
  };
  const orangeLine = {
    height: "12px",
    width: "25px",
    border: "transparant solid",
    borderRadius: "5px",
    backgroundColor: "orange",
    marginRight: "12px",
    marginTop: "6px",
  };
  return (
    <div className="items-details-section">
      <div className="items-details">
        <Line styles={redLine} />
        <div>
          <div>
            <strong>Damaged</strong>
          </div>
          <div>3,124,213 Items</div>
        </div>
      </div>
      <div className="items-details">
        <Line styles={yellowLine} />
        <div>
          <div>
            <strong>Faulty</strong>
          </div>
          <div>1,523,151 Items</div>
        </div>
      </div>
      <div className="items-details">
        <Line styles={orangeLine} />
        <div>
          <div>
            <strong>Missing</strong>
          </div>
          <div>948,213 Items</div>
        </div>
      </div>
    </div>
  );
}

export default ItemsDetails;
