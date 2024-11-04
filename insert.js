function loadCsv() {
  // Replace this value with the project ID listed in the Google
  // Cloud Platform project.
  const projectId = 'borang-440701';
  // Create a dataset in the BigQuery UI (https://bigquery.cloud.google.com)
  // and enter its ID below.
  const datasetId = 'borang_dataset';

  // Create the table.
  const tableId = 'pets_' + new Date().getTime();
  let table = {
    tableReference: {
      projectId: projectId,
      datasetId: datasetId,
      tableId: tableId
    },
    schema: {
      fields: [
        {name: 'week', type: 'STRING'},
        {name: 'cat', type: 'INTEGER'},
        {name: 'dog', type: 'INTEGER'},
        {name: 'bird', type: 'INTEGER'}
      ]
    }
  };
  try {
    table = BigQuery.Tables.insert(table, projectId, datasetId);
    console.log('Table created: %s', table.id);
  } catch (err) {
    console.log('unable to create table');
  }
}
