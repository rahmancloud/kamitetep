function copydata() {
  // Open the spreadsheet and get the specified sheet
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
  const sheet = spreadsheet.getSheetByName("names");

  // Get the last row with data
  const lastRow = sheet.getLastRow();

  // Get the "Name" value from the last row (assuming it's in the second column)
  const name = sheet.getRange(lastRow, 2).getValue();

  // Print the name to the Logs
  console.log("Name:", name); 

  // Replace this value with the project ID listed in the Google
  // Cloud Platform project.
  const projectId = 'borang-440701';
  // Create a dataset in the BigQuery UI (https://bigquery.cloud.google.com)
  // and enter its ID below.
  const datasetId = 'borang_dataset';
  // Replace with your desired table ID.
  const tableId = 'name_table'; 

  // Data to insert (single row).
  const row = {
    name: name // Replace with your actual data
  };

  try {
    // Insert the row into the table.
    BigQuery.Tabledata.insertAll(
      { rows: [{ json: row }] }, 
      projectId, 
      datasetId, 
      tableId
    );
    console.log('Row inserted successfully!');
  } catch (err) {
    console.error('Error inserting row:', err);
  }

}
