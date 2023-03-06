async function download_csv_file() {
  //define the heading for each row of the data

  fetch("http://localhost:3001/").then((res) => {
    res.text().then((data) => {
      console.log(data);
      const csv = data;
      const hiddenElement = document.createElement("a");
      hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
      hiddenElement.target = "_blank";
      //provide the name for the CSV file to be downloaded
      hiddenElement.download = "data.csv";
      hiddenElement.click();
    });
  });
}

const downloadButton = document.getElementById("download-btn");

downloadButton.addEventListener("click", download_csv_file);
