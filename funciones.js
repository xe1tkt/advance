function doGet()
{
return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Gooogle Apps Script');

}
function  obtenerDatosHtml(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}
function obtenerContactos()
{
    let hoja=SpreadsheetApp.openById('1okPSJ-S5R7wNfW_No6E_Fq9fQYFQNaNt7OAjBmZIhoQ').getActiveSheet();
    let datos= hoja.getDataRange().getValues();
    return datos;

}