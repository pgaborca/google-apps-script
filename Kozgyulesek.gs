function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('THB')
      .addItem('Közgyűlések menü', 'showKozgyulesekSidebar')
      .addSeparator()
      .addToUi();
  showKozgyulesekSidebar();
}

function showKozgyulesekSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('KozgyulesekSidebar')
      .setTitle('Közgyűlések')
      .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}


function colorMeghivoKikuldeni() {
  SpreadsheetApp.getActive().getActiveRangeList().setBackground('#ff0000'); // Red
}

function colorMeghivoKikuldve() {
  SpreadsheetApp.getActive().getActiveRangeList().setBackground('#00B200'); // Green
}

function colorJkvKeszul() {
  SpreadsheetApp.getActive().getActiveRangeList().setBackground('#ff9900'); // Orange
}

function colorJkvAlairas() {
  SpreadsheetApp.getActive().getActiveRangeList().setBackground('#ffd500 '); // Yellow
}

function colorJkvKikuldeni() {
  SpreadsheetApp.getActive().getActiveRangeList().setBackground('#ff00ff'); // Pink
}

function colorReset() {
  SpreadsheetApp.getActive().getActiveRangeList().setBackground(null); // Reset
}