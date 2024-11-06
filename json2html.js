export default function json2html(data) {
    // Define table headers
    const headers = ["Name", "Age", "Gender"];
    
    // Start the table with the required data attribute
    let html = `<table data-user="kartikshrivastav2004@gmail.com">`;
    
    // Create the table headers
    html += "<thead><tr>";
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += "</tr></thead>";
    
    // Create the table body
    html += "<tbody>";
    data.forEach(row => {
      html += "<tr>";
      headers.forEach(header => {
        html += `<td>${row[header] || ""}</td>`;
      });
      html += "</tr>";
    });
    html += "</tbody></table>";
    
    return html;
  }
  