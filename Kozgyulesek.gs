function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('THB')
      .addItem('Közgyűlések menü', 'showKozgyulesekSidebar')
      .addSeparator()
      .addToUi();
  
  showKozgyulesekSidebar();
}

// SHOW SIDEBAR

function showKozgyulesekSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('KozgyulesekSidebar')
      .setTitle('Közgyűlések')
      .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}

// COLOR

var activeRange = SpreadsheetApp.getActive().getActiveRangeList();

function colorMeghivoKikuldeni() {
  activeRange.setBackground('#ff0000'); // Red
}

function colorMeghivoKikuldve() {
  activeRange.setBackground('#00B200'); // Green
}

function colorJkvKeszul() {
  activeRange.setBackground('#ff9900'); // Orange
}

function colorJkvAlairas() {
  activeRange.setBackground('#ffd500 '); // Yellow
}

function colorJkvKikuldeni() {
  activeRange.setBackground('#ff00ff'); // Pink
}

function colorReset() {
  activeRange.setBackground(null); // Reset
}