import excel from "exceljs";

export const handleExcel = async (value) => {
  let newData = new excel.Workbook();
  let sheet = newData.addWorksheet("Sheet 1");
  let columns = [];
  for (const e of Object.keys(value[0])) {
    columns.push({
      header: e,
      key: e,
    });
  }

  sheet.columns = columns;
  value.forEach((item) => {
    sheet.addRow(item);
  });

  let buffer = await newData.xlsx.writeBuffer();
  let blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  let link = document.createElement("a");
  let fileName = "user-list.xlsx";
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};
