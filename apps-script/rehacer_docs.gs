// Rehace los documentos del curso con el contenido exacto del Anexo 8 (mismos ID y enlaces).
function rehacerDocs() {
  var C = {mar:'#0EA5A4', coral:'#FF6B5B', noche:'#1E2A4A', azul:'#2F6FED', morado:'#7B5CFF', verde:'#1FA971'};
  function limpiar(id, titulo, color, sub) {
    var doc = DocumentApp.openById(id); var b = doc.getBody(); b.clear();
    var t = b.getChild(0).asParagraph(); t.setText(titulo); t.setHeading(DocumentApp.ParagraphHeading.TITLE);
    t.editAsText().setFontFamily('Lora').setBold(true).setForegroundColor(color).setFontSize(24);
    if (sub) { var s = b.appendParagraph(sub); s.setHeading(DocumentApp.ParagraphHeading.NORMAL); s.editAsText().setFontFamily('Nunito').setItalic(true).setBold(false).setForegroundColor('#6B7390').setFontSize(11); }
    return doc;
  }
  function h(b, txt, color) { var p = b.appendParagraph(txt).setHeading(DocumentApp.ParagraphHeading.HEADING2); p.editAsText().setFontFamily('Lora').setBold(true).setItalic(false).setForegroundColor(color).setFontSize(15); p.setSpacingBefore(14); return p; }
  function p(b, txt) { var x = b.appendParagraph(txt); x.setHeading(DocumentApp.ParagraphHeading.NORMAL); x.editAsText().setFontFamily('Nunito').setFontSize(11.5).setBold(false).setItalic(false).setForegroundColor('#26304A'); return x; }
  function tabla(b, filas, color) {
    var tb = b.appendTable(filas); tb.setBorderColor('#E4DCCD');
    for (var j = 0; j < filas[0].length; j++) { tb.getCell(0, j).setBackgroundColor(color).editAsText().setBold(true).setItalic(false).setForegroundColor('#FFFFFF').setFontFamily('Nunito').setFontSize(11); }
    for (var i = 1; i < filas.length; i++) for (var k = 0; k < filas[i].length; k++) { var c = tb.getCell(i, k); c.editAsText().setFontFamily('Nunito').setFontSize(11).setBold(false).setItalic(false).setForegroundColor('#26304A'); c.setPaddingTop(6).setPaddingBottom(6); if (i % 2 == 0) c.setBackgroundColor('#FBF7F0'); }
    return tb;
  }
  // M2.3 Banco de conectores
  var d = limpiar('1dxp7vEC22HeAMwn8-e8Ybjkbd0Umf6WkB5Taf0rpE9s', 'Banco de conectores', C.coral, 'Módulo 2 · Consúltalo cuando escribas o hables.');
  tabla(d.getBody(), [['Conector', 'Función', 'Posición habitual', 'Ejemplo'],
    ['porque', 'Causa', 'Después de la idea principal', 'Me quedé en casa porque llovía.'],
    ['como', 'Causa', 'Al principio de la frase', 'Como llovía, me quedé en casa.'],
    ['ya que', 'Causa', 'Antes o después de la idea principal', 'Ya que estás aquí, ayúdame.'],
    ['por eso', 'Consecuencia', 'Inicio de la segunda idea', 'Llovía; por eso me quedé en casa.'],
    ['así que', 'Consecuencia', 'Inicio de la segunda idea, tras coma', 'Llovía, así que me quedé en casa.'],
    ['por lo tanto', 'Consecuencia (más formal)', 'Inicio de la segunda idea', 'No hay pruebas; por lo tanto, es inocente.'],
    ['pero', 'Contraste', 'Entre dos ideas', 'Es caro, pero es muy bueno.'],
    ['aunque', 'Contraste (dificultad)', 'Antes o después de la idea principal', 'Aunque es caro, lo voy a comprar.'],
    ['sin embargo', 'Contraste', 'Inicio de la segunda oración, tras punto o punto y coma', 'Es caro. Sin embargo, lo voy a comprar.']], C.coral);
  d.saveAndClose();
  // M2.5 Ficha de práctica (sin soluciones)
  d = limpiar('1vvSqOFNEh7R2gXYd0I2YIoeVP_A19jE_eCPDqSYP1Qw', 'Ficha de práctica: conectores', C.coral, 'Módulo 2 · Haz una copia y escribe en ella. El profesor dejará comentarios en tu documento.');
  var b = d.getBody();
  h(b, 'A. Une las dos ideas con el conector indicado. Haz los cambios necesarios.', C.coral);
  tabla(b, [['Ideas', 'Conector', 'Tu frase'],
    ['Estaba cansado. Me acosté temprano.', 'así que', ''], ['No conocía la ciudad. Me perdí varias veces.', 'como', ''],
    ['La comida era picante. Me gustó mucho.', 'aunque', ''], ['El vuelo salió tarde. Perdí la conexión en Bogotá.', 'por eso', ''],
    ['Hace mucho calor. La gente sale a la calle por la noche.', 'ya que', ''], ['El curso es en línea. Necesitas una buena conexión.', 'por lo tanto', '']], C.coral);
  h(b, 'B. Corrige los errores.', C.azul);
  tabla(b, [['Frase con error', 'Tu corrección'], ['Porque no tenía dinero, no fui al concierto.', ''], ['Me gusta Barranquilla, sin embargo hace mucho calor.', ''], ['Llegué tarde, por eso que había mucho tráfico.', ''], ['Aunque estaba lloviendo, por eso salimos.', '']], C.azul);
  h(b, 'C. Completa el texto con los conectores del banco.', C.mar);
  p(b, 'En mi ciudad, en Australia, cenamos muy temprano, a las seis de la tarde. (1) ______ llegué a Colombia, me sorprendió que la gente cenara a las ocho o a las nueve. Al principio tenía hambre a las seis, (2) ______ comía algo en una panadería. (3) ______, poco a poco me acostumbré. Ahora ceno más tarde (4) ______ salgo del trabajo a las siete. (5) ______ me gusta el nuevo horario, a veces echo de menos las cenas tempranas con mi familia.');
  d.saveAndClose();
  // M3.6 Ficha de refuerzo del pluscuamperfecto (sin soluciones)
  d = limpiar('1NOzcOj41wShUJFufdTXjsFCqHDMhLCa_1Wkiz1ljW3M', 'Ficha de refuerzo: el pluscuamperfecto', C.morado, 'Módulo 3 · Opcional. Haz una copia y escribe en ella.');
  b = d.getBody();
  h(b, 'Forma: imperfecto de haber + participio', C.morado);
  tabla(b, [['Persona', 'haber', 'Participio'], ['yo', 'había', 'llegado / comido / vivido'], ['tú', 'habías', ''], ['él / ella / usted', 'había', ''], ['nosotros/as', 'habíamos', ''], ['ellos / ellas / ustedes', 'habían', '']], C.morado);
  p(b, 'Participios irregulares frecuentes: hacer → hecho; decir → dicho; ver → visto; poner → puesto; volver → vuelto; escribir → escrito; abrir → abierto; romper → roto.');
  h(b, 'Uso', C.morado);
  p(b, 'Para hablar de una acción anterior a otra acción del pasado. Cuando llegué a la estación, el tren ya había salido (primero salió el tren; después llegué yo).');
  h(b, 'Práctica. Completa con el pluscuamperfecto.', C.mar);
  tabla(b, [['Frase', 'Tu respuesta'], ['Cuando llegamos a la fiesta, todos ya ______ (irse).', ''], ['No tenía hambre porque ______ (comer) antes.', ''], ['Le pregunté a Ana por la película, pero no la ______ (ver).', ''], ['Me di cuenta de que ______ (dejar) la puerta abierta.', ''], ['Nunca ______ (estar) en un país tan grande.', '']], C.mar);
  d.saveAndClose();
  // M4.3 Plantilla de planificación
  d = limpiar('1jC4szvjVF974lNUFBGJHo2zwLYGe-SC2hIsSmcQtuSQ', 'Plantilla de planificación del proyecto', C.mar, 'Módulo 4 · Elige una tradición o una fiesta de tu país o de tu ciudad. Completa la plantilla antes de grabar. El profesor comentará tu guion en el documento.');
  tabla(d.getBody(), [['Parte', 'Preguntas guía', 'Recursos útiles', 'Mis notas'],
    ['1. ¿Qué es y cómo se celebraba antes?', '¿Cuándo y dónde se celebra? ¿Cómo era antes?', 'Imperfecto, solía, en aquella época', ''],
    ['2. ¿Cómo se celebra ahora?', '¿Qué ha cambiado? ¿Qué se conserva?', 'ya no, todavía, hoy en día', ''],
    ['3. Mi experiencia', '¿Qué te pasó un año en esa fiesta?', 'Indefinido, imperfecto, pluscuamperfecto, marcadores del relato', ''],
    ['4. Comparación con Colombia', '¿Se parece al Carnaval de Barranquilla o a otra tradición colombiana? ¿En qué es diferente?', 'al igual que, a diferencia de, aunque, sin embargo', ''],
    ['Fuentes', '¿Dónde has buscado la información?', 'Indica dos fuentes (páginas web, libros, personas)', '']], C.mar);
  d.saveAndClose();
  // M3.7 Revisión entre compañeros
  d = limpiar('1BRXUgHD_6eWWR39t9I7LBBSCiiCghFm2r4OVwZ9U_bI', 'Revisión entre compañeros', C.morado, 'Módulo 3 · Lee el borrador de tu compañero y responde. Haz una copia de esta lista.');
  tabla(d.getBody(), [['Pregunta', 'Tu respuesta'],
    ['¿Se distingue el escenario (imperfecto) de las acciones (indefinido)? Señala un ejemplo de cada uno.', ''],
    ['¿Hay al menos un pluscuamperfecto? ¿Está bien usado?', ''], ['¿Los marcadores ayudan a seguir la historia?', ''],
    ['¿Hay expresiones de la lista del módulo? Subráyalas en el texto de tu compañero.', ''],
    ['¿Qué parte de la historia te gustaría conocer mejor? Escribe una pregunta al autor.', '']], C.morado);
  d.saveAndClose();
  // Diario de aprendizaje
  d = limpiar('1MivBrzExy3SrV41wOrnvtpFHWI_5OF79UsROlh5Sb5g', 'Mi diario de aprendizaje', C.azul, 'Haz una copia y escribe al final de cada módulo. Con dos o tres frases por pregunta basta.');
  b = d.getBody();
  ['Módulo 1 · Antes y ahora', 'Módulo 2 · Causas, consecuencias y contrastes', 'Módulo 3 · Te cuento lo que me pasó', 'Módulo 4 · Tradiciones que se celebran'].forEach(function (m) { h(b, m, C.azul); tabla(b, [['¿Qué he aprendido?', '¿Qué me ha resultado difícil?', '¿Qué voy a hacer para mejorar?'], ['', '', '']], C.azul); });
  h(b, 'Al terminar el curso', C.noche);
  tabla(b, [['¿Qué has aprendido en el curso que vas a seguir usando?', '¿Qué te gustaría seguir mejorando?'], ['', '']], C.noche);
  d.saveAndClose();
  return 'ok';
}

// Sustituye el contenido de los vídeos en Drive sin cambiar el enlace.
function actualizarVideos() {
  var base = 'https://raw.githubusercontent.com/YULIETH06/click-and-learn-ele-b1/main/assets/videos/';
  var lista = [['m1.mp4', '1DVQmF9xt4jrtiBxd56WgSdG5r5yBGJTQ'], ['m3.mp4', '1FeETdqSYoXwRNqs7ClGQm3DrLVU_-GLk']];
  var out = [];
  lista.forEach(function (v) {
    var blob = UrlFetchApp.fetch(base + v[0]).getBlob();
    var r = UrlFetchApp.fetch('https://www.googleapis.com/upload/drive/v3/files/' + v[1] + '?uploadType=media', {
      method: 'patch', contentType: 'video/mp4', payload: blob.getBytes(),
      headers: {Authorization: 'Bearer ' + ScriptApp.getOAuthToken()}, muteHttpExceptions: true});
    out.push(v[0] + ' ' + r.getResponseCode() + ' ' + DriveApp.getFileById(v[1]).getSize());
  });
  Logger.log(out.join('\n'));
  return out;
}

// Carpeta compartida de recursos del curso (enlace para la tesis).
function crearCarpetaRecursos() {
  var nombre = 'Español Online B1 · Click & Learn · Recursos';
  var it = DriveApp.getFoldersByName(nombre);
  var raiz = it.hasNext() ? it.next() : DriveApp.createFolder(nombre);
  function sub(n) { var i = raiz.getFoldersByName(n); return i.hasNext() ? i.next() : raiz.createFolder(n); }
  function existe(c, n) { return c.getFilesByName(n).hasNext(); }
  var base = 'https://raw.githubusercontent.com/YULIETH06/click-and-learn-ele-b1/main/recursos/';
  var fichas = sub('1. Fichas del alumno (sin soluciones)');
  [['1dxp7vEC22HeAMwn8-e8Ybjkbd0Umf6WkB5Taf0rpE9s', 'M2 · Banco de conectores'], ['1vvSqOFNEh7R2gXYd0I2YIoeVP_A19jE_eCPDqSYP1Qw', 'M2 · Ficha de práctica de conectores'],
   ['1NOzcOj41wShUJFufdTXjsFCqHDMhLCa_1Wkiz1ljW3M', 'M3 · Ficha de refuerzo del pluscuamperfecto'], ['1BRXUgHD_6eWWR39t9I7LBBSCiiCghFm2r4OVwZ9U_bI', 'M3 · Revisión entre compañeros'],
   ['1jC4szvjVF974lNUFBGJHo2zwLYGe-SC2hIsSmcQtuSQ', 'M4 · Plantilla de planificación del proyecto'], ['1MivBrzExy3SrV41wOrnvtpFHWI_5OF79UsROlh5Sb5g', 'Diario de aprendizaje']].forEach(function (d) {
    if (!existe(fichas, d[1] + '.pdf')) fichas.createFile(DriveApp.getFileById(d[0]).getAs('application/pdf').setName(d[1] + '.pdf'));
  });
  var info = sub('2. Infografías');
  [['infografia_1_imperfecto.png', 'M1 · El pretérito imperfecto.png'], ['infografia_2_ya_no_todavia.png', 'M1 · Ya no y todavía.png'], ['infografia_3_conectores.png', 'M2 · Banco de conectores.png'], ['infografia_4_escenario_accion.png', 'M3 · Escenario y acción.png']].forEach(function (f) {
    if (!existe(info, f[1])) info.createFile(UrlFetchApp.fetch(base + f[0]).getBlob().setName(f[1]));
  });
  var pres = sub('3. Vídeos y presentaciones');
  [['carnaval.pptx', 'M4 · El Carnaval de Barranquilla (presentación).pptx'], ['carnaval.pdf', 'M4 · El Carnaval de Barranquilla (presentación).pdf']].forEach(function (f) {
    if (!existe(pres, f[1])) pres.createFile(UrlFetchApp.fetch(base + f[0]).getBlob().setName(f[1]));
  });
  [['1DVQmF9xt4jrtiBxd56WgSdG5r5yBGJTQ', 'M1'], ['1FeETdqSYoXwRNqs7ClGQm3DrLVU_-GLk', 'M3'], ['1KyPjnl-BjEBGKVxMVehFXzcz7OKVR7uJ', 'B']].forEach(function (v) {
    var f = DriveApp.getFileById(v[0]); if (!existe(pres, f.getName())) pres.createShortcut(v[0]);
  });
  var imp = sub('4. Archivos de importación (Quizlet y Kahoot)');
  ['M1_Quizlet.txt', 'M3_Quizlet.txt', 'M4_Quizlet.txt', 'M3_Kahoot.xlsx'].forEach(function (n) {
    if (!existe(imp, n)) imp.createFile(UrlFetchApp.fetch(base + n).getBlob().setName(n));
  });
  raiz.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  Logger.log(raiz.getUrl());
  return raiz.getUrl();
}

// Manda a la papelera solo la carpeta de formularios duplicada creada hoy por error.
function papeleraFormulariosDuplicados() {
  var out = [], it = DriveApp.getFoldersByName('Español Online B1 · Click & Learn · Formularios');
  var hoy = new Date(2026, 10, 12, 8, 0, 0);
  while (it.hasNext()) { var f = it.next();
    if (f.getDateCreated() > hoy) { var fs = f.getFiles(); while (fs.hasNext()) { var x = fs.next(); x.setTrashed(true); out.push(x.getName()); } f.setTrashed(true); out.push('carpeta duplicada en la papelera'); }
    else out.push('original conservada (' + f.getDateCreated() + ')'); }
  Logger.log(out.join(' | ')); return out;
}

// Guiones de los vídeos (PDF) en la carpeta de recursos.
function subirGuiones() {
  var raiz = DriveApp.getFolderById('1W4wJtAvkC0XfS7_pKkUA8uZUe8qE0rn_');
  var c = raiz.getFoldersByName('3. Vídeos y presentaciones').next();
  var base = 'https://raw.githubusercontent.com/YULIETH06/click-and-learn-ele-b1/main/recursos/';
  var out = [];
  [['guion_m1.pdf', 'M1 · Guion del vídeo ¿Cómo era tu vida antes?.pdf'], ['guion_m3.pdf', 'M3 · Guion del vídeo El escenario y la acción.pdf'], ['M1_Quizlet.txt', null]].forEach(function (f) {
    if (!f[1]) { // actualizar el archivo de importación de Quizlet M1
      var imp = raiz.getFoldersByName('4. Archivos de importación (Quizlet y Kahoot)').next();
      var it = imp.getFilesByName('M1_Quizlet.txt');
      if (it.hasNext()) it.next().setContent(UrlFetchApp.fetch(base + f[0]).getContentText('UTF-8')); return;
    }
    var it2 = c.getFilesByName(f[1]); var file = it2.hasNext() ? it2.next() : c.createFile(UrlFetchApp.fetch(base + f[0]).getBlob().setName(f[1]));
    out.push(f[0] + ' ' + file.getId());
  });
  Logger.log(out.join(' | ')); return out;
}

// Infografías de las sesiones en directo de M2, M3 y M4.
function subirImagenesSesiones() {
  var c = DriveApp.getFoldersByName('Español Online B1 · Click & Learn · Documentos').next();
  var base = 'https://raw.githubusercontent.com/YULIETH06/click-and-learn-ele-b1/main/assets/img/';
  var out = [];
  [['m2-sesiones.png', 'M2 · Sesiones en directo.png'], ['m3-sesiones.png', 'M3 · Sesiones en directo.png'], ['m4-sesiones.png', 'M4 · Sesiones en directo.png']].forEach(function (f) {
    var it = c.getFilesByName(f[1]); var file = it.hasNext() ? it.next() : c.createFile(UrlFetchApp.fetch(base + f[0]).getBlob().setName(f[1]));
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    out.push(f[0] + ' ' + file.getId());
  });
  Logger.log(out.join(' | ')); return out;
}

// Revisa que los estudiantes puedan abrir todos los archivos enlazados en el aula.
function auditarAcceso() {
  var ids = '1KyPjnl-BjEBGKVxMVehFXzcz7OKVR7uJ,1NoQ4KrpC6k25i9IxkSxD4LXPmYxpexT6,1DVQmF9xt4jrtiBxd56WgSdG5r5yBGJTQ,1uQ-oMBQfsONhVBXxXcfeIqigEksX1vgf,1YJEt5C5gpDJgrbCuKryumou6Ei4sFyFo,1dxp7vEC22HeAMwn8-e8Ybjkbd0Umf6WkB5Taf0rpE9s,1vvSqOFNEh7R2gXYd0I2YIoeVP_A19jE_eCPDqSYP1Qw,1MUYzpDG2a5huWyZuHpI5vUSrSM45lotR,1FeETdqSYoXwRNqs7ClGQm3DrLVU_-GLk,13XWGZZDxgey34SRViSNeiKB7q2TEAlPT,1NOzcOj41wShUJFufdTXjsFCqHDMhLCa_1Wkiz1ljW3M,1-Y2zcwcXZBSdEtK5S9Lk5WBGk15MzLc0,1BRXUgHD_6eWWR39t9I7LBBSCiiCghFm2r4OVwZ9U_bI,1un8V5p3ywO-nTbXN_Lq5betLbYP5NPyK,1jC4szvjVF974lNUFBGJHo2zwLYGe-SC2hIsSmcQtuSQ,1FsG1Ue0ANKEC5ss2Da-Q9h40_HydQcCd,1MivBrzExy3SrV41wOrnvtpFHWI_5OF79UsROlh5Sb5g'.split(',');
  var out = [];
  ids.forEach(function (id) {
    try {
      var f = DriveApp.getFileById(id); var acc = f.getSharingAccess();
      if (f.isTrashed()) { out.push('PAPELERA ' + f.getName()); return; }
      if (acc != DriveApp.Access.ANYONE_WITH_LINK && acc != DriveApp.Access.ANYONE) { out.push('PRIVADO ' + f.getName()); }
      else out.push('ok ' + f.getName());
    } catch (e) { out.push('ERROR ' + id + ' ' + e); }
  });
  var it = DriveApp.getFoldersByName('Español Online B1 · Click & Learn · Formularios');
  while (it.hasNext()) { var c = it.next(); if (c.isTrashed()) continue; var fs = c.getFilesByType(MimeType.GOOGLE_FORMS);
    while (fs.hasNext()) { var ff = fs.next(); var form = FormApp.openById(ff.getId());
      out.push((form.isAcceptingResponses() ? 'ok' : 'CERRADO') + ' form ' + ff.getName() + (form.requiresLogin() ? ' (login)' : '') + ' ' + form.getPublishedUrl().split('/e/')[1].slice(0, 12)); } }
  Logger.log(out.join('\n')); return out;
}

// Imágenes de los materiales del aula (estilo Poppins + iconos) y títulos de formularios sin emojis.
function subirImagenesMateriales() {
  var c = DriveApp.getFoldersByName('Español Online B1 · Click & Learn · Documentos').next();
  var base = 'https://raw.githubusercontent.com/YULIETH06/click-and-learn-ele-b1/main/assets/img/classroom/';
  var nombres = {presentacion: 'Bienvenida · Los módulos del curso', meet: 'Sesiones en directo · Calendario', m1_practica: 'M1 · Práctica a tu ritmo', m1_tarea: 'M1 · Tarea final', m2_practica: 'M2 · Práctica a tu ritmo', m2_tarea: 'M2 · Tarea final', m3_practica: 'M3 · Práctica a tu ritmo', m3_tarea: 'M3 · Tarea final', m4_tarea: 'M4 · Tarea final', foro_vocabulario: 'Foro del curso y vocabulario', autoevaluacion: 'Autoevaluación y cierre', diario: 'Diario de aprendizaje'};
  var out = [];
  Object.keys(nombres).forEach(function (k) {
    var n = nombres[k] + '.png'; var it = c.getFilesByName(n);
    var f = it.hasNext() ? it.next() : c.createFile(UrlFetchApp.fetch(base + k + '.png').getBlob().setName(n));
    f.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    out.push(k + '=' + f.getId());
  });
  var fit = DriveApp.getFoldersByName('Español Online B1 · Click & Learn · Formularios');
  while (fit.hasNext()) { var fc = fit.next(); if (fc.isTrashed()) continue; var fs = fc.getFilesByType(MimeType.GOOGLE_FORMS);
    while (fs.hasNext()) { var ff = fs.next(); if (ff.isTrashed()) continue; try { var form = FormApp.openById(ff.getId()); var t = form.getTitle();
      var limpio = t.replace(/^[^A-Za-zÁÉÍÓÚáéíóúÑñ¿¡]+/, '').trim();
      if (limpio !== t) { form.setTitle(limpio); ff.setName(limpio); out.push('titulo: ' + limpio); } } catch (e) { out.push('form? ' + ff.getName()); } } }
  Logger.log(out.join(' | ')); return out;
}

// Sustituye el contenido de las imágenes de sesiones y de la guía sin cambiar el enlace.
function actualizarImagenesSesiones() {
  var base = 'https://raw.githubusercontent.com/YULIETH06/click-and-learn-ele-b1/main/assets/img/';
  var lista = [['m1-sesiones.png', '1YJEt5C5gpDJgrbCuKryumou6Ei4sFyFo'], ['m2-sesiones.png', '1MUYzpDG2a5huWyZuHpI5vUSrSM45lotR'], ['m3-sesiones.png', '1-Y2zcwcXZBSdEtK5S9Lk5WBGk15MzLc0'], ['m4-sesiones.png', '1FsG1Ue0ANKEC5ss2Da-Q9h40_HydQcCd'], ['guia-del-curso.png', '1NoQ4KrpC6k25i9IxkSxD4LXPmYxpexT6']];
  var out = [];
  lista.forEach(function (v) {
    var blob = UrlFetchApp.fetch(base + v[0] + '?v=2').getBlob();
    var r = UrlFetchApp.fetch('https://www.googleapis.com/upload/drive/v3/files/' + v[1] + '?uploadType=media', {method: 'patch', contentType: 'image/png', payload: blob.getBytes(), headers: {Authorization: 'Bearer ' + ScriptApp.getOAuthToken()}, muteHttpExceptions: true});
    out.push(v[0] + ' ' + r.getResponseCode() + ' ' + blob.getBytes().length);
  });
  Logger.log(out.join(' | ')); return out;
}
