var axios = require("axios").default;

async function Getfile(req, res) {
  const data = await axios.get(
    "https://firebasestorage.googleapis.com/v0/b/retail-space-3de71.appspot.com/o/product_data_excel.xlsx?alt=media&token=d88bb7e6-ff02-4402-84a7-50eea747a450"
  );
  console.log(JSON.stringify(data));
  res.send(JSON.stringify(data));
}

export default Getfile;
