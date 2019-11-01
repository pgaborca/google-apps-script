function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('Közgyűlések')
      .addItem('Meghívót kiküldeni', 'meghKikuldeni')
      .addItem('Meghívó kiküldve', 'meghKikuldve')
      .addItem('Jegyzőköny készül', 'jkvKeszul')
      .addItem('Jegyzőkönyv aláírásra vár', 'jkvAlairas')
      .addItem('Jegyzőkönyvet kiküldeni', 'jkvKikuldeni')
      .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
      .setTitle('Közgyűlések')
      .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}