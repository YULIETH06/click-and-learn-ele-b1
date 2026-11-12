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
    for (var j = 0; j < filas[0].length; j++) { tb.getCell(0, j).setBackgroundColor(color).editAsText().setBold(true).setForegroundColor('#FFFFFF').setFontFamily('Nunito').setFontSize(11); }
    for (var i = 1; i < filas.length; i++) for (var k = 0; k < filas[i].length; k++) { var c = tb.getCell(i, k); c.editAsText().setFontFamily('Nunito').setFontSize(11).setBold(false).setForegroundColor('#26304A'); c.setPaddingTop(6).setPaddingBottom(6); if (i % 2 == 0) c.setBackgroundColor('#FBF7F0'); }
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
