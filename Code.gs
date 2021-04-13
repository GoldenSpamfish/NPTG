function doGet() {
  return HtmlService.createTemplateFromFile('Sheetindex').evaluate();
}
 
//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData(){
  var spreadSheetId = "17OvS-4kpAlQyZtNI9zzXFg2YuYfzk1AF0LuxQjfqoqY"; //CHANGE
  var dataRange     = "Sheet1!A2:C"; //CHANGE
 
  var range   = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);
  var values  = range.values;
 
  return values;
}
 
//INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
