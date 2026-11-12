function crearFormulariosCurso() {
  var carpeta = DriveApp.createFolder('Español Online B1 · Click & Learn · Formularios');
  var enlaces = [];
  function nuevo(titulo, descripcion, quiz) {
    var f = FormApp.create(titulo);
    f.setDescription(descripcion);
    if (quiz) f.setIsQuiz(true);
    f.setProgressBar(true);
    f.setShowLinkToRespondAgain(false);
    DriveApp.getFileById(f.getId()).moveTo(carpeta);
    return f;
  }
  function fb(t) { return FormApp.createFeedback().setText(t).build(); }
  function mc(f, titulo, opciones, correcta, ok, ko, puntos) {
    var it = f.addMultipleChoiceItem().setTitle(titulo).setRequired(true);
    it.setChoices(opciones.map(function (o, i) { return it.createChoice(o, i === correcta); }));
    if (f.isQuiz()) {
      it.setPoints(puntos || 1);
      if (ok) it.setFeedbackForCorrect(fb(ok));
      if (ko) it.setFeedbackForIncorrect(fb(ko));
    }
    return it;
  }
  function seccion(f, t, d) { f.addSectionHeaderItem().setTitle(t).setHelpText(d || ''); }
  function nivel(f, filas) {
    f.addGridItem().setTitle('Marca tu nivel en cada afirmación').setRows(filas)
      .setColumns(['🔴 Todavía no', '🟡 Con ayuda', '🟢 Sí, sin problema']).setRequired(true);
  }

  // 1. PRUEBA DIAGNÓSTICA
  var p = nuevo('🧭 Prueba diagnóstica · Español B1',
    'Antes de empezar el curso, descubre tu punto de partida. No tiene nota: sirve para adaptar las actividades a lo que necesitas.\n\n⏱️ 30 minutos · 📵 Sin diccionarios ni traductores · Al final del curso harás una prueba parecida para ver tu progreso.', true);
  var A = [
    ['Cuando era pequeño, ______ todos los veranos a casa de mis abuelos.', ['fui', 'iba', 'había ido'], 1],
    ['Ayer ______ a Laura en el supermercado.', ['veía', 'vi', 'había visto'], 1],
    ['______ las diez de la noche cuando sonó el teléfono.', ['Fueron', 'Eran', 'Habían sido'], 1],
    ['Cuando llegamos al cine, la película ya ______.', ['empezó', 'empezaba', 'había empezado'], 2],
    ['Mientras yo ______ la cena, mi hermana puso la mesa.', ['preparé', 'preparaba', 'había preparado'], 1],
    ['El año pasado ______ tres veces a Cartagena.', ['viajé', 'viajaba', 'había viajado'], 0],
    ['Cuando llegué a casa, me di cuenta de que ______ las llaves en la oficina.', ['dejé', 'dejaba', 'había dejado'], 2],
    ['La casa de mis abuelos ______ grande y ______ un jardín precioso.', ['fue / tuvo', 'era / tenía', 'había sido / había tenido'], 1],
    ['De repente, ______ a llover y todos corrimos a buscar refugio.', ['empezaba', 'empezó', 'había empezado'], 1],
    ['Cuando llegué a Colombia, yo ya ______ español durante dos años.', ['estudié', 'estudiaba', 'había estudiado'], 2]];
  var B = [
    ['Cuando vivía en Londres, ______ ir al trabajo en bicicleta.', ['solía', 'solí', 'suelo'], 0],
    ['Hace tres años ______ fumar y desde entonces me siento mucho mejor.', ['dejé de', 'empecé a', 'volví a'], 0],
    ['—¿Todavía trabajas en el banco? —No, ______ trabajo allí.', ['ya no', 'todavía no', 'aún'], 0],
    ['El médico me prohibió el azúcar, pero la semana pasada ______ comer dulces.', ['acabé de', 'volví a', 'dejé de'], 1],
    ['No puedo hablar ahora: ______ llegar del aeropuerto y estoy agotado.', ['acabo de', 'vuelvo a', 'dejo de'], 0],
    ['A pesar del ruido, el profesor ______ explicando la lección.', ['siguió', 'dejó', 'acabó'], 0]];
  var C = [
    ['______ no tenía coche, tuve que tomar un taxi.', ['Porque', 'Como', 'Por eso'], 1],
    ['Estaba muy cansada; ______, me acosté temprano.', ['sin embargo', 'aunque', 'por eso'], 2],
    ['______ hacía frío, salimos a pasear.', ['Aunque', 'Como', 'Así que'], 0],
    ['El restaurante era caro; ______, la comida no era muy buena.', ['por lo tanto', 'sin embargo', 'ya que'], 1],
    ['No fui a la fiesta ______ tenía que estudiar.', ['así que', 'aunque', 'porque'], 2],
    ['Perdí el autobús, ______ llegué tarde a la reunión.', ['así que', 'como', 'aunque'], 0],
    ['Decidí aprender español ______ quería trabajar en Latinoamérica.', ['sin embargo', 'ya que', 'por lo tanto'], 1]];
  var D = [
    ['En el examen ______ un error muy grave.', ['hice', 'cometí', 'tuve'], 1],
    ['En la fiesta lo ______ muy bien: bailamos toda la noche.', ['pasamos', 'tuvimos', 'hicimos'], 0],
    ['Antes de viajar, tengo que ______ la maleta.', ['hacer', 'poner', 'llenar'], 0],
    ['Tardé mucho en ______ una decisión sobre mi nuevo trabajo.', ['hacer', 'tomar', 'poner'], 1],
    ['Cuando llegué a la estación, me di ______ de que había perdido el billete.', ['idea', 'cuenta', 'vuelta'], 1],
    ['Mi hermano siempre se pone ______ antes de los exámenes.', ['nervioso', 'miedo', 'preocupación'], 0],
    ['Para mejorar mi español, intento ______ tiempo con hablantes nativos.', ['pasar', 'gastar', 'tener'], 0]];
  var n = 1;
  [['⏳ A. Los tiempos del pasado', A], ['🔁 B. Soler y las perífrasis verbales', B],
   ['🔗 C. Los conectores', C], ['🧩 D. Léxico y colocaciones', D]].forEach(function (s) {
    p.addPageBreakItem().setTitle(s[0]).setHelpText('Elige la opción correcta.');
    s[1].forEach(function (q) { mc(p, (n++) + '. ' + q[0], q[1], q[2]); });
  });
  p.setConfirmationMessage('¡Gracias! 🎉 Tu profesor revisará tus resultados para adaptar el curso. Ahora ya puedes empezar el módulo 1.');
  enlaces.push(['Prueba diagnóstica', p]);

  // 2. M1 · CUESTIONARIO DE DESCUBRIMIENTO
  var m1 = nuevo('🔍 M1 · Descubre el pretérito imperfecto',
    'Lee otra vez los textos de Mark, Hannah y Emre y descubre cómo hablamos de las costumbres del pasado. Después de cada respuesta verás una explicación. ¡No pasa nada si te equivocas: equivocarse también es aprender! 💪', true);
  seccion(m1, '1️⃣ ¿Antes o ahora?', '¿Estas frases hablan del pasado (antes) o del presente (ahora)?');
  var fr = [['a) Me levantaba a las seis.', 0], ['b) Voy a todas partes en bicicleta.', 1], ['c) Solía almorzar un sándwich en mi escritorio.', 0],
            ['d) Hablamos por videollamada todos los domingos.', 1], ['e) Mi madre cocinaba todos los días.', 0], ['f) Ya no uso el metro.', 1]];
  fr.forEach(function (x) {
    mc(m1, x[0], ['⏪ Antes', '▶️ Ahora'], x[1], '¡Bien visto! 👏',
      'Fíjate en el verbo: las frases sobre el pasado usan formas como levantaba, solía o cocinaba. Es el pretérito imperfecto.');
  });
  seccion(m1, '2️⃣ ¿Una vez o habitualmente?');
  mc(m1, 'En las frases a), c) y e), ¿la persona habla de algo que pasó una vez o de algo que hacía habitualmente?', ['Una vez', 'Habitualmente'], 1,
    'Exacto: el imperfecto sirve para describir costumbres y hábitos del pasado. ✅', 'Piénsalo otra vez: "todos los días", "a las seis"... son costumbres. El imperfecto describe hábitos del pasado.');
  seccion(m1, '3️⃣ La regla');
  mc(m1, 'Completa la regla: para los verbos en -ar usamos la terminación ___; para los verbos en -er y en -ir, la terminación ___.',
    ['-aba / -ía', '-ía / -aba', '-é / -í'], 0, '¡Perfecto! trabajaba, comía, vivía. ✅', 'Mira: levantaba (-ar) y cocinaba (-ar), pero comía (-er) y vivía (-ir).');
  seccion(m1, '4️⃣ Los tres irregulares', 'Solo hay tres verbos irregulares en imperfecto: ser, ir y ver.');
  mc(m1, 'Yo (ser) →', ['fui', 'era', 'sería'], 1, '✅ era, eras, era...', 'Fui es indefinido y sería es condicional. El imperfecto de ser es era.');
  mc(m1, 'Nosotros (ir) →', ['íbamos', 'fuimos', 'iríamos'], 0, '✅ iba, ibas, iba, íbamos...', 'Fuimos es indefinido. El imperfecto de ir es íbamos.');
  mc(m1, 'Ella (ver) →', ['vio', 'vía', 'veía'], 2, '✅ veía, veías, veía...', 'Ver conserva la e: veía.');
  seccion(m1, '5️⃣ Soler + infinitivo');
  mc(m1, '"Los domingos solíamos ir a casa de mis abuelos" significa:', ['Fuimos una vez a casa de mis abuelos.', 'Normalmente íbamos a casa de mis abuelos los domingos.', 'Queríamos ir a casa de mis abuelos.'], 1,
    '✅ Soler + infinitivo = hacer algo normalmente.', 'Soler + infinitivo expresa una costumbre: hacer algo normalmente.');
  seccion(m1, '6️⃣ Ya no y todavía');
  mc(m1, '"Ya no tengo que madrugar" significa:', ['Antes madrugaba y ahora no madrugo.', 'Antes madrugaba y ahora también madrugo.'], 0, '✅ Ya no = algo que se ha interrumpido.', 'Ya no indica que algo que hacíamos antes ha terminado.');
  mc(m1, '"Todavía veo los partidos de hockey" significa:', ['Antes veía los partidos y ahora no los veo.', 'Antes veía los partidos y ahora también los veo.'], 1, '✅ Todavía = algo que continúa.', 'Todavía indica que algo continúa igual que antes.');
  seccion(m1, '7️⃣ Con tus palabras');
  m1.addParagraphTextItem().setTitle('Escribe con tus palabras cuándo usamos el pretérito imperfecto. Puedes usar tu lengua si lo necesitas.');
  m1.setConfirmationMessage('¡Muy bien! 🎉 Ya conoces el pretérito imperfecto. Ahora practica en Educaplay con la actividad "Cuando era niño".');
  enlaces.push(['M1 · Cuestionario de descubrimiento', m1]);

  // 3. M2 · CONECTORES
  var m2 = nuevo('🔗 M2 · Descubre los conectores',
    'Lee otra vez el hilo del foro de Lena, Tom y James y descubre cómo explicamos causas, consecuencias y contrastes. Después de cada respuesta verás una explicación.', true);
  seccion(m2, '1️⃣ Clasifica los conectores', 'Causa = por qué · Consecuencia = qué pasa después · Contraste = una idea que se opone a otra o la limita.');
  [['como', 0], ['sin embargo', 2], ['así que', 1], ['aunque', 2], ['porque', 0], ['ya que', 0], ['por eso', 1], ['por lo tanto', 1]].forEach(function (x) {
    mc(m2, '¿Qué expresa "' + x[0] + '"?', ['💡 Causa', '➡️ Consecuencia', '↔️ Contraste'], x[1], '¡Correcto! ✅',
      'Recuerda: causa (como, porque, ya que), consecuencia (así que, por eso, por lo tanto) y contraste (sin embargo, aunque).');
  });
  seccion(m2, '2️⃣ ¿Dónde va?');
  mc(m2, 'Observa: "Como en mi familia almorzábamos rápido, al principio no entendía...". ¿Dónde aparece como?', ['Al principio de la frase, antes de la causa.', 'Después de la idea principal.'], 0,
    '✅ Como va al principio. Porque va normalmente después de la idea principal: No entendía nada porque era nuevo.', 'Como va al principio de la frase. Porque va normalmente después: No entendía nada porque era nuevo.');
  mc(m2, 'En "Aunque todavía me cuesta, creo que es una costumbre más sana", ¿qué expresa aunque?', ['Una causa.', 'Una dificultad que no impide la idea principal.', 'Una consecuencia.'], 1,
    '✅ Aunque presenta una dificultad que no cambia la idea principal.', 'Aunque presenta una dificultad, pero la idea principal se mantiene.');
  mc(m2, '¿Qué conector se usa entre dos oraciones separadas por un punto o un punto y coma?', ['aunque', 'sin embargo', 'como'], 1,
    '✅ Me costó adaptarme; sin embargo, ahora estoy feliz.', 'Sin embargo une dos oraciones: Me costó adaptarme; sin embargo, ahora estoy feliz.');
  m2.setConfirmationMessage('¡Genial! 🎉 Ahora relaciona cada conector con su función en Educaplay.');
  enlaces.push(['M2 · Cuestionario de conectores', m2]);

  // 4. M3 · ESCENARIO Y ACCIÓN
  var m3 = nuevo('🎬 M3 · Escenario y acción',
    'Lee otra vez la historia de Elif y descubre cómo combinamos los tiempos del pasado para contar una experiencia: 🟢 escenario (imperfecto), 🔵 acciones (indefinido) y 🟠 lo que había pasado antes (pluscuamperfecto).', true);
  mc(m3, '¿Qué tiempo verbal describe cómo era la situación (el escenario)?', ['Pretérito indefinido', 'Pretérito imperfecto', 'Pretérito pluscuamperfecto'], 1,
    '✅ 🟢 Hacía calor, el aeropuerto estaba lleno: es el escenario.', 'El escenario se describe con el imperfecto: hacía, estaba, tenía.');
  mc(m3, 'Ordena las acciones como ocurrieron en la historia:', [
    'llegó a la puerta → dejó el pasaporte en el baño → se dio cuenta → empezó a correr',
    'dejó el pasaporte en el baño → llegó a la puerta → se dio cuenta → empezó a correr',
    'se dio cuenta → dejó el pasaporte en el baño → llegó a la puerta → empezó a correr'], 1,
    '✅ 🟠 La primera acción (dejar el pasaporte) aparece en pluscuamperfecto (lo había dejado), porque Elif la cuenta después, mirando hacia atrás.',
    'Fíjate: la primera acción en el tiempo aparece en pluscuamperfecto (lo había dejado), porque Elif la cuenta mirando hacia atrás.');
  mc(m3, '"Mientras corría, solo pensaba en una cosa". ¿Por qué se usa el imperfecto?', ['Porque son acciones terminadas.', 'Porque describen lo que pasaba en ese momento, como un escenario.'], 1,
    '✅ Mientras + imperfecto = el escenario de la acción.', 'El imperfecto describe lo que pasaba en ese momento, como un escenario.');
  mc(m3, '¿Qué significa "dejé de confiar en mi memoria"?', ['Empecé a confiar.', 'Ya no confío.', 'Volví a confiar.'], 1,
    '✅ Dejar de + infinitivo = interrumpir una acción o un hábito.', 'Dejar de + infinitivo significa interrumpir una acción o un hábito.');
  m3.addParagraphTextItem().setTitle('Escribe con tus palabras la diferencia entre el imperfecto y el indefinido en una historia.');
  m3.setConfirmationMessage('¡Excelente! 🎉 Ahora completa el relato "Un viaje a Cartagena" en Educaplay.');
  enlaces.push(['M3 · Cuestionario de descubrimiento', m3]);

  // 5-7. AUTOEVALUACIONES
  var auto = [
    ['🪞 Autoevaluación · Módulo 1', ['Puedo contar cómo era mi vida antes de un cambio importante.', 'Puedo usar el imperfecto de los verbos regulares y de ser, ir y ver.', 'Puedo usar soler + infinitivo para hablar de costumbres.', 'Puedo usar ya no y todavía para comparar el pasado y el presente.', 'Conozco palabras y expresiones nuevas para hablar de mi rutina.', 'Puedo publicar en el foro de Classroom y comentar las publicaciones de mis compañeros.']],
    ['🪞 Autoevaluación · Módulo 2', ['Puedo explicar la causa de algo con porque, como y ya que.', 'Puedo expresar consecuencias con por eso, así que y por lo tanto.', 'Puedo contrastar ideas con aunque y sin embargo.', 'Puedo escribir un texto breve de opinión con una estructura clara.', 'Puedo hablar de costumbres sin generalizar.']],
    ['🪞 Autoevaluación · Módulo 3', ['Puedo contar una experiencia combinando el indefinido y el imperfecto.', 'Puedo explicar algo que había pasado antes de otro momento del pasado.', 'Puedo usar marcadores como de repente, al final o mientras para organizar una historia.', 'Puedo usar expresiones como darse cuenta de, llevarse un susto o ponerse nervioso.', 'Puedo usar empezar a, dejar de o volver a para hablar de cambios en las acciones.', 'Puedo revisar el texto de un compañero y hacerle sugerencias útiles.']]];
  auto.forEach(function (a) {
    var f = nuevo(a[0], 'Piensa en lo que has aprendido en este módulo y marca tu nivel con sinceridad. No hay respuestas buenas ni malas: sirve para que tú y tu profesor sepáis qué conviene repasar. 🌱', false);
    nivel(f, a[1]);
    f.addParagraphTextItem().setTitle('📓 ¿Qué he aprendido en este módulo que puedo usar fuera de clase?');
    f.addParagraphTextItem().setTitle('🧗 ¿Qué me ha resultado más difícil?');
    f.addParagraphTextItem().setTitle('🎯 ¿Qué voy a hacer la próxima semana para mejorarlo?');
    f.setConfirmationMessage('¡Gracias por tu reflexión! 🌟');
    enlaces.push([a[0], f]);
  });

  // 8. CIERRE: AUTOEVALUACIÓN FINAL + PERCEPCIÓN
  var fin = nuevo('🏁 Cierre del curso · Autoevaluación final y opinión',
    '¡Has llegado al final del curso! 🎉 Mira atrás y valora lo que has aprendido en los cuatro módulos. Tu opinión nos ayuda a mejorar el curso.', false);
  seccion(fin, '🪞 Lo que he aprendido');
  nivel(fin, ['Puedo contar cómo era mi vida antes y cómo es ahora (módulo 1).', 'Puedo explicar causas, consecuencias y contrastes en un texto de opinión (módulo 2).', 'Puedo narrar una experiencia combinando los tiempos del pasado (módulo 3).', 'Puedo presentar una tradición de mi país y compararla con una tradición colombiana (módulo 4).']);
  fin.addPageBreakItem().setTitle('💬 Tu opinión sobre el curso').setHelpText('1 = totalmente en desacuerdo · 5 = totalmente de acuerdo');
  fin.addGridItem().setTitle('Indica tu grado de acuerdo').setRows([
    'Las herramientas del curso me ayudaron a ampliar mi vocabulario.', 'Las herramientas del curso me ayudaron a usar mejor los tiempos del pasado.',
    'Las herramientas del curso me ayudaron a escribir textos mejor conectados.', 'Las actividades en línea fueron útiles para comunicarme mejor en español.',
    'Me resultó fácil encontrar los materiales en Google Classroom.', 'Me resultó fácil usar Quizlet, Educaplay y Kahoot.',
    'Me resultó fácil trabajar con documentos compartidos y comentarios.', 'Voy a seguir usando alguna de estas herramientas después del curso.'])
    .setColumns(['1', '2', '3', '4', '5']).setRequired(true);
  fin.addParagraphTextItem().setTitle('🛠️ ¿Qué herramienta te resultó más útil y por qué?');
  fin.addParagraphTextItem().setTitle('🤔 ¿Cuál te resultó menos útil y por qué?');
  fin.addParagraphTextItem().setTitle('🚀 ¿Qué vas a seguir haciendo después del curso para mantener tu español?');
  fin.setConfirmationMessage('¡Gracias por participar en Español Online B1: Click & Learn! 🌎 ¡Sigue practicando!');
  enlaces.push(['Cierre del curso', fin]);

  var out = enlaces.map(function (e) { return e[0] + ' | ' + e[1].getPublishedUrl() + ' | ' + e[1].getEditUrl(); }).join('\n');
  Logger.log(out);
  return out;
}
