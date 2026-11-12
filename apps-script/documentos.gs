function crearDocsCurso() {
  var carpetaNombre = 'Español Online B1 · Click & Learn · Documentos';
  var it = DriveApp.getFoldersByName(carpetaNombre);
  var carpeta = it.hasNext() ? it.next() : DriveApp.createFolder(carpetaNombre);
  var C = {mar:'#0EA5A4', coral:'#FF6B5B', sol:'#FFC93C', noche:'#1E2A4A', crema:'#FFF8EE', azul:'#2F6FED', morado:'#7B5CFF'};
  var out = [];

  function nuevo(titulo, color, emoji, subtitulo) {
    var doc = DocumentApp.create(titulo);
    var body = doc.getBody();
    body.setMarginTop(40).setMarginBottom(40).setMarginLeft(56).setMarginRight(56);
    var st = {}; st[DocumentApp.Attribute.FONT_FAMILY] = 'Nunito'; st[DocumentApp.Attribute.FONT_SIZE] = 12;
    st[DocumentApp.Attribute.FOREGROUND_COLOR] = '#26304A';
    body.setAttributes(st);
    var t = body.getChild(0).asParagraph();
    t.setText(emoji + '  ' + titulo); t.setHeading(DocumentApp.ParagraphHeading.TITLE);
    t.editAsText().setFontFamily('Baloo 2').setBold(true).setForegroundColor(color).setFontSize(26);
    if (subtitulo) {
      var s = body.appendParagraph(subtitulo);
      s.editAsText().setItalic(true).setForegroundColor('#6B7390').setFontSize(12);
    }
    return doc;
  }
  function h(body, txt, color) {
    var p = body.appendParagraph(txt).setHeading(DocumentApp.ParagraphHeading.HEADING2);
    p.editAsText().setFontFamily('Baloo 2').setBold(true).setForegroundColor(color).setFontSize(16);
    p.setSpacingBefore(14);
    return p;
  }
  function p(body, txt) { var x = body.appendParagraph(txt); x.editAsText().setFontSize(12).setBold(false).setForegroundColor('#26304A'); return x; }
  function caja(body, txt, fondo) {
    var tb = body.appendTable([[txt]]);
    tb.setBorderWidth(0);
    var c = tb.getCell(0, 0); c.setBackgroundColor(fondo).setPaddingTop(10).setPaddingBottom(10).setPaddingLeft(14).setPaddingRight(14);
    c.editAsText().setFontSize(12).setForegroundColor('#1E2A4A');
    return tb;
  }
  function tabla(body, filas, colorCab) {
    var tb = body.appendTable(filas);
    tb.setBorderColor('#ECE4D6');
    for (var j = 0; j < filas[0].length; j++) {
      var c = tb.getCell(0, j); c.setBackgroundColor(colorCab);
      c.editAsText().setBold(true).setForegroundColor('#FFFFFF');
    }
    for (var i = 1; i < filas.length; i++) for (var k = 0; k < filas[i].length; k++) {
      tb.getCell(i, k).setPaddingTop(8).setPaddingBottom(8);
      if (i % 2 == 0) tb.getCell(i, k).setBackgroundColor('#FFF8EE');
    }
    return tb;
  }
  function cerrar(doc, clave) {
    doc.saveAndClose();
    var f = DriveApp.getFileById(doc.getId());
    f.moveTo(carpeta);
    f.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    out.push(clave + ' ' + doc.getId());
  }

  // 1. Banco de conectores (M2)
  var d = nuevo('Banco de conectores', C.coral, '🔗', 'Módulo 2 · Consúltalo cuando escribas o hables.');
  var b = d.getBody();
  tabla(b, [
    ['Para…', 'Conector', 'Ejemplo'],
    ['🟢 Causa', 'porque', 'No salí porque llovía.'],
    ['🟢 Causa (al principio)', 'como', 'Como llovía, no salí.'],
    ['🟢 Causa (más formal)', 'ya que', 'No salí, ya que llovía.'],
    ['🔵 Consecuencia', 'así que', 'Llovía, así que no salí.'],
    ['🔵 Consecuencia', 'por eso', 'Llovía; por eso no salí.'],
    ['🔵 Consecuencia (formal)', 'por lo tanto', 'Llovía; por lo tanto, no salí.'],
    ['🟠 Contraste (en la misma frase)', 'aunque', 'Aunque llovía, salí.'],
    ['🟠 Contraste (nueva frase)', 'sin embargo', 'Llovía. Sin embargo, salí.']
  ], C.coral);
  h(b, '⚠️ Cuidado', C.noche);
  caja(b, '• Como va al principio de la frase: «Como no tenía dinero, no fui».\n• Sin embargo empieza una frase nueva y lleva coma: «… Sin embargo, …».\n• No mezcles dos conectores: ✗ «Aunque llovía, por eso salimos».', '#FFE9E6');
  cerrar(d, 'banco');

  // 2. Ficha de práctica M2
  d = nuevo('Ficha de práctica: conectores', C.coral, '✍️', 'Módulo 2 · Haz una copia y escribe en ella.');
  b = d.getBody();
  h(b, 'A. Une las dos ideas con el conector', C.coral);
  tabla(b, [
    ['Ideas', 'Conector', 'Tu frase'],
    ['Estaba cansado. Me acosté temprano.', 'así que', ''],
    ['No conocía la ciudad. Me perdí varias veces.', 'como', ''],
    ['La comida era picante. Me gustó mucho.', 'aunque', ''],
    ['El vuelo salió tarde. Perdí la conexión en Bogotá.', 'por eso', ''],
    ['Hace mucho calor. La gente sale a la calle por la noche.', 'ya que', ''],
    ['El curso es en línea. Necesitas una buena conexión.', 'por lo tanto', '']
  ], C.coral);
  h(b, 'B. Encuentra y corrige el error', C.azul);
  tabla(b, [
    ['Frase con error', 'Corrección'],
    ['Porque no tenía dinero, no fui al concierto.', ''],
    ['Me gusta Barranquilla, sin embargo hace mucho calor.', ''],
    ['Llegué tarde, por eso que había mucho tráfico.', ''],
    ['Aunque estaba lloviendo, por eso salimos.', '']
  ], C.azul);
  h(b, 'C. Completa el texto', C.mar);
  caja(b, 'Banco: aunque · así que · sin embargo · porque · cuando', '#E3F7F6');
  p(b, 'En mi ciudad, en Australia, cenamos muy temprano, a las seis de la tarde. (1) ______ llegué a Colombia, me sorprendió que la gente cenara a las ocho o a las nueve. Al principio tenía hambre a las seis, (2) ______ comía algo en una panadería. (3) ______, poco a poco me acostumbré. Ahora ceno más tarde (4) ______ salgo del trabajo a las siete. (5) ______ me gusta el nuevo horario, a veces echo de menos las cenas tempranas con mi familia.');
  h(b, '✅ Soluciones', C.verde || '#1FA971');
  caja(b, 'A. Estaba cansado, así que me acosté temprano. · Como no conocía la ciudad, me perdí varias veces. · Aunque la comida era picante, me gustó mucho. · El vuelo salió tarde; por eso perdí la conexión en Bogotá. · La gente sale a la calle por la noche, ya que hace mucho calor. · El curso es en línea; por lo tanto, necesitas una buena conexión.\nB. Como no tenía dinero… · Me gusta Barranquilla. Sin embargo, hace mucho calor. · Llegué tarde porque había mucho tráfico. · Aunque estaba lloviendo, salimos.\nC. (1) Cuando; (2) así que / por eso; (3) Sin embargo; (4) porque / ya que; (5) Aunque.', '#E8F7EF');
  cerrar(d, 'fichaM2');

  // 3. Ficha de refuerzo del pluscuamperfecto (M3)
  d = nuevo('El pluscuamperfecto', C.morado, '⏮️', 'Módulo 3 · Para ampliar. Haz una copia y escribe en ella.');
  b = d.getBody();
  caja(b, 'FORMA:  había / habías / había / habíamos / habíais / habían  +  participio', '#EEE9FF');
  h(b, '🧭 ¿Cuándo lo usamos?', C.morado);
  p(b, 'Para una acción anterior a otra acción del pasado.');
  caja(b, 'Cuando llegué a la estación, el tren ya había salido.\n1️⃣ salió el tren  →  2️⃣ llegué yo', '#FFF8EE');
  h(b, '⚠️ Participios irregulares', C.coral);
  tabla(b, [
    ['hacer', 'decir', 'ver', 'poner'],
    ['hecho', 'dicho', 'visto', 'puesto'],
    ['volver', 'escribir', 'abrir', 'romper'],
    ['vuelto', 'escrito', 'abierto', 'roto']
  ], C.coral);
  h(b, '✏️ Practica', C.mar);
  tabla(b, [
    ['Frase', 'Tu respuesta'],
    ['Cuando llegamos a la fiesta, todos ya ______ (irse).', ''],
    ['No tenía hambre porque ______ (comer) antes.', ''],
    ['Le pregunté a Ana por la película, pero no la ______ (ver).', ''],
    ['Me di cuenta de que ______ (dejar) la puerta abierta.', ''],
    ['Nunca ______ (estar) en un país tan grande.', '']
  ], C.mar);
  h(b, '✅ Soluciones', '#1FA971');
  caja(b, 'se habían ido · había comido · había visto · había dejado · había estado', '#E8F7EF');
  cerrar(d, 'fichaM3');

  // 4. Plantilla de planificación del proyecto (M4)
  d = nuevo('Mi tradición: plan del vídeo', C.mar, '🎬', 'Módulo 4 · Haz una copia, complétala y compártela con el profesor antes de grabar.');
  b = d.getBody();
  caja(b, '🎯 Vídeo de 3 a 4 minutos · Habla sin leer (puedes usar una tarjeta con palabras clave).', '#E3F7F6');
  tabla(b, [
    ['Parte', 'Preguntas guía', 'Mis ideas y palabras clave'],
    ['1️⃣ ¿Qué es?', '¿Cómo se llama? ¿Dónde y cuándo se celebra? ¿Qué se celebra?', ''],
    ['2️⃣ ¿Cómo se celebra?', '¿Qué hace la gente? ¿Hay desfiles, disfraces, música, comida típica?', ''],
    ['3️⃣ Antes y ahora', '¿Cómo era antes? ¿Qué ha cambiado? Tu recuerdo: «Cuando era niño/a, …».', ''],
    ['4️⃣ Comparación y opinión', '¿En qué se parece al Carnaval de Barranquilla y en qué es diferente? ¿Por qué es importante conservarla?', '']
  ], C.mar);
  h(b, '🧰 Lo que voy a usar', C.coral);
  tabla(b, [
    ['Del módulo 1', 'Del módulo 2', 'Del módulo 3', 'Del módulo 4'],
    ['imperfecto, soler, ya no / todavía', 'porque, como, aunque, sin embargo, por eso', 'un día, de repente, al final; indefinido e imperfecto', 'desfile, disfraz, al igual que, a diferencia de…'],
    ['', '', '', '']
  ], C.coral);
  h(b, '✅ Antes de grabar', C.noche);
  p(b, '☐ Tengo las cuatro partes.\n☐ Uso al menos dos conectores y un recuerdo en pasado.\n☐ Uso cinco palabras del Quizlet del módulo 4.\n☐ He ensayado en voz alta y dura entre 3 y 4 minutos.');
  cerrar(d, 'planM4');

  // 5. Diario de aprendizaje
  d = nuevo('Mi diario de aprendizaje', C.azul, '📔', 'Haz una copia y escribe al final de cada módulo. Dos o tres frases por pregunta son suficientes.');
  b = d.getBody();
  var mods = [['⏪ Módulo 1 · Antes y ahora', C.azul], ['🔗 Módulo 2 · Causas, consecuencias y contrastes', C.coral], ['🎬 Módulo 3 · Te cuento lo que me pasó', C.morado], ['🎭 Módulo 4 · Tradiciones que se celebran', C.mar]];
  mods.forEach(function (m) {
    h(b, m[0], m[1]);
    tabla(b, [['💡 ¿Qué he aprendido?', '🧗 ¿Qué me ha resultado difícil?', '🚀 ¿Qué voy a hacer para mejorar?'], ['', '', '']], m[1]);
  });
  h(b, '🏁 Para terminar el curso', C.noche);
  tabla(b, [['¿Qué he aprendido que voy a seguir usando?', '¿Qué me gustaría seguir mejorando?'], ['', '']], C.noche);
  cerrar(d, 'diario');

  // 6. Revisión entre pares (M3)
  d = nuevo('Revisión entre compañeros', C.morado, '🔍', 'Módulo 3 · Lee el borrador de tu compañero y responde en esta tabla.');
  b = d.getBody();
  tabla(b, [
    ['Pregunta', 'Tu respuesta'],
    ['🏞️ ¿Se distingue el escenario (imperfecto) de las acciones (indefinido)? Copia un ejemplo de cada uno.', ''],
    ['⏮️ ¿Hay al menos un pluscuamperfecto? ¿Está bien usado?', ''],
    ['🧭 ¿Los marcadores (un día, de repente, al final…) ayudan a seguir la historia?', ''],
    ['🃏 ¿Hay expresiones de la lista del módulo? Escríbelas.', ''],
    ['❓ ¿Qué parte de la historia te gustaría conocer mejor? Escribe una pregunta al autor.', '']
  ], C.morado);
  cerrar(d, 'pares');

  Logger.log(out.join('\n'));
  return out;
}

function subirVideos() {
  var carpetaNombre = 'Español Online B1 · Click & Learn · Documentos';
  var it = DriveApp.getFoldersByName(carpetaNombre);
  var carpeta = it.hasNext() ? it.next() : DriveApp.createFolder(carpetaNombre);
  var base = 'https://yulieth06.github.io/click-and-learn-ele-b1/assets/videos/';
  var lista = [['m1.mp4', 'M1 · ¿Cómo era tu vida antes? (vídeo animado).mp4'], ['m3.mp4', 'M3 · El escenario y la acción (vídeo animado).mp4'], ['bienvenida.mp4', 'Bienvenida a Click & Learn (vídeo animado).mp4']];
  var out = [];
  lista.forEach(function (v) {
    var ex = carpeta.getFilesByName(v[1]);
    if (ex.hasNext()) { out.push(v[0] + ' ' + ex.next().getId()); return; }
    var blob = UrlFetchApp.fetch(base + v[0]).getBlob().setName(v[1]);
    var f = carpeta.createFile(blob);
    f.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    out.push(v[0] + ' ' + f.getId());
  });
  Logger.log(out.join('\n'));
  return out;
}
