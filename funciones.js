
const HOJA =SpreadsheetApp.openById('1okPSJ-S5R7wNfW_No6E_Fq9fQYFQNaNt7OAjBmZIhoQ').getActiveSheet();
function doGet()
{
return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Gooogle Apps Script');

}
function doPost(datos)
{
    
    // insertarContacto(datos.parameter.nombre,datos.parameter.email);
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Gooogle Apps Script');

}
function  obtenerDatosHtml(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}
function obtenerContactos()
{
  
    let datos= HOJA.getDataRange().getValues();
    return datos;

}
function importarContactos()
{
    let url='https://randomuser.me/api/?results=5&inc=name,email,phone';
    respuesta=UrlFetchApp.fetch(url).getContentText();
    let datos=JSON.parse(respuesta);
   datos.results.forEach(insertarContactoJson);
   //datos.results.forEach(contacto=>Logger.log(contacto));

}
function insertarContactoJson(contacto)
{
    HOJA.appendRow([contacto.name.first,contacto.name.last,contacto.email,contacto.phone]);
}
function insertarContacto(nombre,apellidos,correo,telf)
{
    HOJA.appendRow([nombre,apellidos,correo,telf]);
}
function borrarContactos(numfila)
{
    HOJA.deleteRow(numfila);

}
function editContacto(numFila,datos)
{
    let celdas = HOJA.getRange('A'+numFila+':D'+numFila);
    celdas.setValues([[datos.nombre, datos.apellidos, datos.correo, datos.telf]]);
    
}