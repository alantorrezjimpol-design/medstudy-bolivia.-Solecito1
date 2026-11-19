// ======================================
// MEDSTUDY BOLIVIA - SIMULADOR MIR
// Banco de 50 preguntas + temporizador
// ======================================

const banco = [
{
tema: "Cardiología",
pregunta: "Varón de 58 años presenta dolor torácico opresivo de 40 minutos, irradiado al brazo izquierdo. ECG: elevación del ST en V2-V5. ¿Cuál es la conducta prioritaria?",
opciones: ["Solicitar prueba de esfuerzo", "Administrar únicamente analgésicos", "Activar reperfusión urgente", "Dar de alta", "Solicitar ecocardiograma ambulatorio"],
correcta: 2,
explicacion: "El cuadro corresponde a un IAM con elevación del ST. La reperfusión urgente mediante angioplastia primaria es la estrategia preferida cuando está disponible oportunamente."
},
{
tema: "Cardiología",
pregunta: "Paciente con fibrilación auricular presenta frecuencia ventricular de 150/min, presión arterial estable y sin signos de insuficiencia cardíaca aguda. ¿Cuál es una estrategia inicial apropiada?",
opciones: ["Desfibrilación inmediata", "Control de frecuencia ventricular", "Administrar atropina", "Marcapasos inmediato", "No realizar tratamiento"],
correcta: 1,
explicacion: "En pacientes estables con fibrilación auricular y respuesta ventricular rápida se puede realizar control de frecuencia, considerando betabloqueadores o calcioantagonistas según el contexto clínico."
},
{
tema: "Cardiología",
pregunta: "¿Cuál es el hallazgo electrocardiográfico característico de la hiperpotasemia grave?",
opciones: ["Ondas T picudas", "Ondas U prominentes", "QT prolongado", "Descenso del ST aislado", "Ondas delta"],
correcta: 0,
explicacion: "La hiperpotasemia suele producir ondas T picudas. En casos graves puede causar ensanchamiento del QRS, desaparición de ondas P y arritmias potencialmente mortales."
},
{
tema: "Cardiología",
pregunta: "Paciente con disnea, ortopnea, edema de miembros inferiores y crepitantes pulmonares. ¿Qué diagnóstico es más probable?",
opciones: ["Asma aislada", "Insuficiencia cardíaca", "Neumotórax", "Rinitis alérgica", "Anemia ferropénica"],
correcta: 1,
explicacion: "La combinación de ortopnea, edema periférico y crepitantes sugiere insuficiencia cardíaca congestiva."
},
{
tema: "Cardiología",
pregunta: "¿Cuál es el principal factor de riesgo modificable para enfermedad cardiovascular aterosclerótica?",
opciones: ["Grupo sanguíneo", "Tabaquismo", "Color de ojos", "Estatura", "Lateralidad"],
correcta: 1,
explicacion: "El tabaquismo es un importante factor de riesgo cardiovascular modificable. Su abandono disminuye el riesgo de enfermedad coronaria y cerebrovascular."
},
{
tema: "Neumología",
pregunta: "Paciente con disnea súbita, dolor pleurítico, taquicardia y antecedente de inmovilización reciente. ¿Cuál es el diagnóstico que debe sospecharse?",
opciones: ["Neumonía crónica", "Embolia pulmonar", "Sinusitis", "Tuberculosis latente", "Otitis media"],
correcta: 1,
explicacion: "La disnea súbita, el dolor pleurítico y los factores de riesgo tromboembólico sugieren embolia pulmonar."
},
{
tema: "Neumología",
pregunta: "¿Cuál es el criterio espirométrico característico de EPOC?",
opciones: ["FEV1/FVC normal después del broncodilatador", "FEV1/FVC menor de 0,70 después del broncodilatador", "FVC siempre mayor del 150%", "Volumen residual igual a cero", "TLC disminuida obligatoriamente"],
correcta: 1,
explicacion: "La obstrucción persistente del flujo aéreo se caracteriza por una relación FEV1/FVC posbroncodilatador inferior a 0,70, interpretada en el contexto clínico."
},
{
tema: "Neumología",
pregunta: "Paciente asmático presenta sibilancias recurrentes que empeoran por la noche y mejoran con broncodilatador. ¿Cuál es el mecanismo principal?",
opciones: ["Obstrucción variable e inflamación de las vías aéreas", "Fibrosis pleural permanente", "Destrucción alveolar irreversible obligatoria", "Derrame pericárdico", "Obstrucción de la vena cava"],
correcta: 0,
explicacion: "El asma se caracteriza por inflamación crónica de las vías aéreas y obstrucción variable, generalmente reversible, asociada a hiperreactividad bronquial."
},
{
tema: "Neumología",
pregunta: "¿Qué microorganismo es una causa frecuente de neumonía adquirida en la comunidad?",
opciones: ["Streptococcus pneumoniae", "Candida albicans", "Plasmodium vivax", "Taenia solium", "Enterobius vermicularis"],
correcta: 0,
explicacion: "Streptococcus pneumoniae es uno de los agentes etiológicos más frecuentes de neumonía adquirida en la comunidad."
},
{
tema: "Neumología",
pregunta: "Paciente con tuberculosis pulmonar presenta tos persistente, pérdida de peso y sudoración nocturna. ¿Qué prueba permite detectar rápidamente material genético de Mycobacterium tuberculosis?",
opciones: ["Hemograma", "Prueba molecular rápida", "Electrocardiograma", "Prueba de glucosa", "Radiografía de muñeca"],
correcta: 1,
explicacion: "Las pruebas moleculares rápidas permiten detectar material genético de Mycobacterium tuberculosis y, en determinados sistemas, resistencia a rifampicina."
},
{
tema: "Gastroenterología",
pregunta: "Paciente presenta dolor epigástrico que se irradia a la espalda, vómitos y elevación importante de lipasa. ¿Cuál es el diagnóstico?",
opciones: ["Apendicitis", "Pancreatitis aguda", "Cistitis", "Hepatitis crónica", "Colelitiasis asintomática"],
correcta: 1,
explicacion: "El dolor epigástrico irradiado a la espalda asociado a elevación de lipasa es característico de pancreatitis aguda."
},
{
tema: "Gastroenterología",
pregunta: "¿Cuál es la causa más frecuente de úlcera péptica asociada a infección?",
opciones: ["Helicobacter pylori", "Virus de influenza", "Escherichia coli urinaria", "Candida en piel", "Virus del papiloma humano"],
correcta: 0,
explicacion: "Helicobacter pylori es una causa importante de úlcera péptica. Los antiinflamatorios no esteroideos constituyen otra causa frecuente."
},
{
tema: "Gastroenterología",
pregunta: "Paciente presenta dolor abdominal que inicia alrededor del ombligo y posteriormente migra a la fosa ilíaca derecha. ¿Cuál es el diagnóstico más probable?",
opciones: ["Colecistitis", "Apendicitis aguda", "Pancreatitis crónica", "Gastritis", "Reflujo gastroesofágico"],
correcta: 1,
explicacion: "La migración del dolor periumbilical hacia la fosa ilíaca derecha es un patrón clásico de apendicitis aguda."
},
{
tema: "Gastroenterología",
pregunta: "¿Cuál es la manifestación clínica característica de la obstrucción biliar?",
opciones: ["Ictericia y coluria", "Hemoptisis", "Poliuria aislada", "Dolor de oído", "Pérdida de visión"],
correcta: 0,
explicacion: "La obstrucción de la vía biliar puede producir ictericia, coluria, acolia y prurito por acumulación de bilirrubina conjugada."
},
{
tema: "Gastroenterología",
pregunta: "Paciente con cirrosis presenta ascitis. ¿Cuál es una complicación que debe descartarse si aparece fiebre y dolor abdominal?",
opciones: ["Peritonitis bacteriana espontánea", "Otitis externa", "Catarata", "Rinitis", "Tendinitis"],
correcta: 0,
explicacion: "La peritonitis bacteriana espontánea es una complicación potencialmente grave de la ascitis cirrótica. Se diagnostica mediante paracentesis."
},
{
tema: "Nefrología",
pregunta: "Paciente con oliguria, creatinina elevada y deshidratación por vómitos. ¿Qué tipo de lesión renal aguda es más probable?",
opciones: ["Prerrenal", "Posrenal por tumor", "Glomerular crónica obligatoria", "Congénita", "Poliquística"],
correcta: 0,
explicacion: "La hipovolemia por pérdidas gastrointestinales puede disminuir la perfusión renal y provocar lesión renal aguda prerrenal."
},
{
tema: "Nefrología",
pregunta: "¿Cuál es el hallazgo típico del síndrome nefrótico?",
opciones: ["Proteinuria masiva, hipoalbuminemia y edema", "Hemoptisis y fiebre", "Hiperglucemia aislada", "Leucocitosis sin proteinuria", "Bradicardia y miosis"],
correcta: 0,
explicacion: "El síndrome nefrótico se caracteriza por proteinuria importante, hipoalbuminemia, edema y, frecuentemente, hiperlipidemia."
},
{
tema: "Nefrología",
pregunta: "Paciente presenta edema, hipertensión, hematuria y cilindros hemáticos después de una infección. ¿Qué síndrome renal sugiere?",
opciones: ["Síndrome nefrítico", "Síndrome nefrótico puro", "Diabetes insípida", "Cistitis simple", "Litiasis asintomática"],
correcta: 0,
explicacion: "Hematuria, hipertensión, edema y alteración de la función renal son características del síndrome nefrítico."
},
{
tema: "Nefrología",
pregunta: "¿Cuál es la alteración ácido-base más probable en una diarrea intensa?",
opciones: ["Alcalosis metabólica", "Acidosis metabólica", "Alcalosis respiratoria permanente", "Acidosis respiratoria", "Sin alteración posible"],
correcta: 1,
explicacion: "La diarrea produce pérdida de bicarbonato intestinal y puede causar acidosis metabólica con anión gap normal."
},
{
tema: "Nefrología",
pregunta: "Paciente con cólico renal presenta dolor intenso en flanco irradiado a la ingle y hematuria. ¿Cuál es el diagnóstico más probable?",
opciones: ["Litiasis urinaria", "Insuficiencia cardíaca", "Neumonía", "Colecistitis", "Migraña"],
correcta: 0,
explicacion: "El dolor tipo cólico que irradia hacia la ingle y la hematuria son sugestivos de cálculo urinario."
},
{
tema: "Endocrinología",
pregunta: "Paciente presenta poliuria, polidipsia, pérdida de peso y glucemia elevada. ¿Qué diagnóstico es más probable?",
opciones: ["Diabetes mellitus", "Hipotiroidismo", "Insuficiencia venosa", "Artritis", "Hipoacusia"],
correcta: 0,
explicacion: "La hiperglucemia puede producir diuresis osmótica, poliuria, polidipsia y pérdida de peso."
},
{
tema: "Endocrinología",
pregunta: "¿Cuál es el patrón hormonal típico del hipotiroidismo primario?",
opciones: ["TSH elevada y T4 libre disminuida", "TSH disminuida y T4 elevada", "TSH y T4 siempre elevadas", "TSH normal y cortisol muy elevado", "T3 elevada aislada"],
correcta: 0,
explicacion: "En el hipotiroidismo primario la disminución de hormonas tiroideas provoca elevación compensatoria de TSH."
},
{
tema: "Endocrinología",
pregunta: "Paciente con hipertiroidismo presenta pérdida de peso, temblor, taquicardia e intolerancia al calor. ¿Cuál es el patrón esperado?",
opciones: ["TSH baja y T4 libre elevada", "TSH alta y T4 baja", "TSH alta y T4 alta en todos los casos", "TSH normal y T4 baja", "TSH baja y T4 baja obligatoriamente"],
correcta: 0,
explicacion: "El hipertiroidismo primario suele producir elevación de T4 o T3 y supresión de TSH."
},
{
tema: "Endocrinología",
pregunta: "¿Cuál es la complicación aguda más característica de la diabetes tipo 1 por déficit grave de insulina?",
opciones: ["Cetoacidosis diabética", "Hipotiroidismo", "Osteoartritis", "Catarata congénita", "Apendicitis"],
correcta: 0,
explicacion: "El déficit importante de insulina favorece lipólisis y producción de cuerpos cetónicos, causando cetoacidosis diabética."
},
{
tema: "Endocrinología",
pregunta: "Paciente con hipoglucemia, sudoración, temblor y confusión. Si está consciente y puede deglutir, ¿cuál es una medida inicial apropiada?",
opciones: ["Administrar carbohidratos de absorción rápida", "Administrar insulina", "Restringir todos los líquidos", "Inducir el vómito", "Administrar diurético"],
correcta: 0,
explicacion: "En una persona consciente que puede deglutir, la hipoglucemia se trata inicialmente con carbohidratos de absorción rápida y reevaluación."
},
{
tema: "Infectología",
pregunta: "Paciente presenta fiebre, rigidez de nuca, cefalea intensa y alteración del estado mental. ¿Qué diagnóstico debe considerarse prioritariamente?",
opciones: ["Meningitis", "Dermatitis", "Gastritis", "Rinitis", "Conjuntivitis"],
correcta: 0,
explicacion: "La fiebre, cefalea, rigidez de nuca y alteración mental sugieren meningitis o meningoencefalitis, que requieren evaluación y tratamiento urgente."
},
{
tema: "Infectología",
pregunta: "¿Cuál es el tratamiento fundamental de la malaria no complicada por Plasmodium falciparum según las recomendaciones locales y la sensibilidad?",
opciones: ["Terapia combinada basada en artemisinina", "Amoxicilina sola", "Antihistamínico", "Corticoide aislado", "Metronidazol"],
correcta: 0,
explicacion: "La malaria por P. falciparum se trata generalmente con una combinación basada en artemisinina, según la guía vigente y la resistencia regional."
},
{
tema: "Infectología",
pregunta: "Paciente con fiebre, mialgias intensas y dolor retroocular en una región con circulación de dengue. ¿Qué diagnóstico es probable?",
opciones: ["Dengue", "Hipotiroidismo", "Epilepsia", "EPOC", "Litiasis renal"],
correcta: 0,
explicacion: "Fiebre, mialgias, cefalea y dolor retroocular son manifestaciones frecuentes del dengue. Deben vigilarse signos de alarma."
},
{
tema: "Infectología",
pregunta: "¿Cuál es una medida fundamental para prevenir la transmisión de infecciones asociadas a la atención sanitaria?",
opciones: ["Higiene de manos", "Usar antibióticos en todos los pacientes", "Evitar la ventilación", "Reutilizar guantes", "No limpiar superficies"],
correcta: 0,
explicacion: "La higiene de manos es una de las intervenciones más importantes para prevenir infecciones asociadas a la atención sanitaria."
},
{
tema: "Infectología",
pregunta: "Paciente con mordedura de perro desconocido. ¿Qué aspecto debe evaluarse inmediatamente?",
opciones: ["Riesgo de rabia y necesidad de profilaxis", "Color de cabello", "Agudeza auditiva únicamente", "Presencia de miopía", "Grupo sanguíneo del animal"],
correcta: 0,
explicacion: "La exposición por mordedura requiere evaluación de la herida, estado del animal y riesgo de rabia para decidir profilaxis posexposición."
},
{
tema: "Neurología",
pregunta: "Paciente presenta debilidad súbita de hemicuerpo derecho y dificultad para hablar. ¿Cuál es la sospecha diagnóstica principal?",
opciones: ["Accidente cerebrovascular", "Migraña crónica sin aura", "Otitis", "Gastritis", "Cistitis"],
correcta: 0,
explicacion: "El déficit neurológico focal de inicio súbito es sugestivo de accidente cerebrovascular y requiere atención inmediata."
},
{
tema: "Neurología",
pregunta: "¿Cuál es el tipo de crisis epiléptica caracterizado por pérdida súbita de conciencia, rigidez y movimientos clónicos generalizados?",
opciones: ["Crisis tónico-clónica generalizada", "Crisis de ausencia típica", "Crisis focal sensitiva", "Síncope vasovagal", "Narcolepsia"],
correcta: 0,
explicacion: "Las crisis tónico-clónicas generalizadas presentan una fase tónica seguida de movimientos clónicos y alteración de conciencia."
},
{
tema: "Neurología",
pregunta: "Paciente presenta cefalea unilateral pulsátil, náuseas y fotofobia recurrentes. ¿Cuál es el diagnóstico más probable?",
opciones: ["Migraña", "Meningitis bacteriana obligatoria", "Glaucoma crónico", "Sinusitis siempre", "Neuralgia periférica"],
correcta: 0,
explicacion: "La cefalea pulsátil, unilateral, acompañada de náuseas y fotofobia, es compatible con migraña."
},
{
tema: "Neurología",
pregunta: "¿Qué hallazgo es característico de la enfermedad de Parkinson?",
opciones: ["Bradicinesia, rigidez y temblor de reposo", "Parálisis flácida súbita", "Fiebre y exantema", "Hipertensión aislada", "Dolor abdominal"],
correcta: 0,
explicacion: "La enfermedad de Parkinson se caracteriza por bradicinesia asociada a rigidez y/o temblor de reposo."
},
{
tema: "Neurología",
pregunta: "Paciente con debilidad ascendente progresiva y arreflexia después de una infección gastrointestinal. ¿Qué diagnóstico debe sospecharse?",
opciones: ["Síndrome de Guillain-Barré", "Parkinson", "Miastenia gravis", "Migraña", "Demencia tipo Alzheimer"],
correcta: 0,
explicacion: "La debilidad ascendente y la arreflexia después de una infección son características del síndrome de Guillain-Barré."
},
{
tema: "Pediatría",
pregunta: "Niño con fiebre, tos, coriza y conjuntivitis que posteriormente presenta exantema maculopapular. ¿Cuál es el diagnóstico probable?",
opciones: ["Sarampión", "Varicela", "Escarlatina", "Rubéola obligatoriamente", "Dermatitis de contacto"],
correcta: 0,
explicacion: "El sarampión puede presentar fiebre, tos, coriza, conjuntivitis y exantema maculopapular. La vacunación es una medida preventiva fundamental."
},
{
tema: "Pediatría",
pregunta: "¿Cuál es el signo clínico más importante para valorar deshidratación en un niño?",
opciones: ["Estado general y perfusión", "Color del cabello", "Longitud de uñas", "Presencia de pecas", "Tipo de dentición"],
correcta: 0,
explicacion: "La valoración de deshidratación incluye estado general, perfusión, mucosas, lágrimas, diuresis y otros signos clínicos."
},
{
tema: "Pediatría",
pregunta: "Lactante presenta tos, rinorrea, dificultad respiratoria y sibilancias durante una infección viral. ¿Cuál es una causa frecuente?",
opciones: ["Bronquiolitis", "Apendicitis", "Glomerulonefritis", "Artritis", "Otitis externa"],
correcta: 0,
explicacion: "La bronquiolitis es una infección viral frecuente en lactantes que produce inflamación de vías aéreas pequeñas, tos y dificultad respiratoria."
},
{
tema: "Pediatría",
pregunta: "¿Cuál es la recomendación general sobre lactancia materna exclusiva?",
opciones: ["Durante los primeros 6 meses", "Solo durante una semana", "Hasta los 2 meses exclusivamente", "No debe practicarse", "Solo cuando el niño tenga fiebre"],
correcta: 0,
explicacion: "La OMS recomienda lactancia materna exclusiva durante los primeros seis meses, con alimentación complementaria posterior y continuación de la lactancia."
},
{
tema: "Pediatría",
pregunta: "Niño presenta fiebre, dolor de garganta y exantema áspero tipo papel de lija. ¿Qué infección debe sospecharse?",
opciones: ["Escarlatina", "Dengue", "Malaria", "Hepatitis", "Tétanos"],
correcta: 0,
explicacion: "La escarlatina es causada por estreptococo del grupo A y puede presentar faringitis, fiebre y exantema característico."
},
{
tema: "Ginecología",
pregunta: "Mujer presenta dolor pélvico, fiebre y secreción vaginal anormal. ¿Qué diagnóstico debe considerarse?",
opciones: ["Enfermedad inflamatoria pélvica", "Hipotiroidismo", "Migraña", "EPOC", "Insuficiencia cardíaca"],
correcta: 0,
explicacion: "El dolor pélvico, la fiebre y la secreción anormal pueden sugerir enfermedad inflamatoria pélvica, que requiere evaluación y tratamiento oportunos."
},
{
tema: "Ginecología",
pregunta: "¿Cuál es un factor de riesgo importante para cáncer cervicouterino?",
opciones: ["Infección persistente por VPH de alto riesgo", "Consumo de agua", "Miopía", "Rinitis", "Grupo sanguíneo"],
correcta: 0,
explicacion: "La infección persistente por tipos oncogénicos del virus del papiloma humano es el principal factor causal del cáncer cervicouterino."
},
{
tema: "Ginecología",
pregunta: "Mujer presenta amenorrea, dolor pélvico unilateral y prueba de embarazo positiva. ¿Qué diagnóstico debe descartarse urgentemente?",
opciones: ["Embarazo ectópico", "Mioma asintomático", "Vaginitis", "Dismenorrea primaria", "Menopausia"],
correcta: 0,
explicacion: "El embarazo ectópico puede causar hemorragia interna potencialmente mortal. Se requiere evaluación urgente."
},
{
tema: "Obstetricia",
pregunta: "Gestante de 34 semanas presenta presión arterial elevada, cefalea intensa y proteinuria. ¿Cuál es el diagnóstico probable?",
opciones: ["Preeclampsia", "Embarazo normal", "Placenta previa", "Diabetes insípida", "Cistitis simple"],
correcta: 0,
explicacion: "La hipertensión después de las 20 semanas asociada a proteinuria o datos de daño orgánico sugiere preeclampsia."
},
{
tema: "Obstetricia",
pregunta: "¿Cuál es la causa más frecuente de hemorragia posparto?",
opciones: ["Atonía uterina", "Migraña", "Hipotiroidismo", "Neumonía", "Cistitis"],
correcta: 0,
explicacion: "La atonía uterina es la causa más frecuente de hemorragia posparto. El manejo requiere respuesta inmediata y tratamiento según protocolos."
},
{
tema: "Obstetricia",
pregunta: "Gestante presenta sangrado vaginal rojo brillante e indoloro en el tercer trimestre. ¿Qué diagnóstico debe sospecharse?",
opciones: ["Placenta previa", "Apendicitis", "Cistitis", "Hiperemesis", "Endometriosis"],
correcta: 0,
explicacion: "El sangrado vaginal rojo brillante e indoloro en el tercer trimestre es sugestivo de placenta previa. Debe evitarse el tacto vaginal hasta descartar esta condición."
},
{
tema: "Cirugía",
pregunta: "Paciente presenta dolor en hipocondrio derecho, fiebre y signo de Murphy positivo. ¿Cuál es el diagnóstico probable?",
opciones: ["Colecistitis aguda", "Pancreatitis crónica", "Gastritis", "Cistitis", "Neumonía apical"],
correcta: 0,
explicacion: "El dolor en hipocondrio derecho, fiebre y Murphy positivo sugieren colecistitis aguda, frecuentemente asociada a cálculos biliares."
},
{
tema: "Cirugía",
pregunta: "Paciente con trauma abdominal presenta hipotensión, taquicardia y abdomen distendido. ¿Cuál es la prioridad inicial?",
opciones: ["Evaluación y reanimación ABC", "Dar alimentos", "Alta inmediata", "Solicitar fisioterapia", "Esperar 24 horas sin evaluación"],
correcta: 0,
explicacion: "En trauma se prioriza la evaluación ABC, identificación de hemorragia y reanimación inmediata según protocolos."
},
{
tema: "Cirugía",
pregunta: "¿Cuál es una complicación temprana importante de una herida quirúrgica?",
opciones: ["Infección del sitio quirúrgico", "Miopía", "Otitis", "Hipotiroidismo", "Rinitis"],
correcta: 0,
explicacion: "La infección del sitio quirúrgico es una complicación relevante y requiere vigilancia de signos locales y sistémicos."
},
{
tema: "Medicina de urgencias",
pregunta: "Paciente inconsciente, sin respiración normal y sin pulso palpable. ¿Qué debe iniciarse inmediatamente?",
opciones: ["RCP de alta calidad", "Administrar alimentos", "Esperar a que despierte", "Sentarlo", "Dar agua"],
correcta: 0,
explicacion: "Ante paro cardiorrespiratorio, se debe iniciar RCP de alta calidad y activar el sistema de emergencias y desfibrilación cuando corresponda."
},
{
tema: "Medicina de urgencias",
pregunta: "Paciente presenta anafilaxia con hipotensión, urticaria y dificultad respiratoria después de recibir un medicamento. ¿Cuál es el tratamiento inicial de elección?",
opciones: ["Adrenalina intramuscular", "Antibiótico oral", "Paracetamol únicamente", "Diurético", "Antitusivo"],
correcta: 0,
explicacion: "La adrenalina intramuscular es el tratamiento inicial de elección en la anafilaxia. No debe retrasarse por otros tratamientos complementarios."
},
{
tema: "Medicina de urgencias",
pregunta: "Paciente con fiebre, hipotensión, taquicardia y sospecha de infección grave. ¿Qué condición debe sospecharse?",
opciones: ["Sepsis", "Rinitis alérgica", "Migraña", "Dermatitis", "Caries"],
correcta: 0,
explicacion: "La infección acompañada de disfunción orgánica o compromiso hemodinámico puede indicar sepsis, que requiere evaluación y manejo urgente."
},
{
tema: "Psiquiatría",
pregunta: "Paciente presenta durante varias semanas ánimo deprimido, pérdida de interés, alteraciones del sueño y sentimientos de culpa. ¿Qué diagnóstico es probable?",
opciones: ["Trastorno depresivo mayor", "Manía", "Delirium", "Fobia específica obligatoria", "Esquizofrenia siempre"],
correcta: 0,
explicacion: "El ánimo deprimido y la pérdida de interés persistentes, junto con otros síntomas, pueden corresponder a un episodio depresivo mayor."
},
{
tema: "Psiquiatría",
pregunta: "Paciente presenta períodos de ánimo elevado, aumento de energía, disminución de necesidad de dormir y conducta impulsiva. ¿Qué síndrome debe considerarse?",
opciones: ["Manía", "Demencia", "Delirium", "Fobia", "Trastorno de somatización"],
correcta: 0,
explicacion: "La manía se caracteriza por ánimo elevado, expansivo o irritable, aumento de energía, disminución de sueño y alteraciones del comportamiento."
},
{
tema: "Medicina preventiva",
pregunta: "¿Cuál es la intervención más efectiva para reducir la transmisión de muchas infecciones respiratorias en ambientes sanitarios?",
opciones: ["Higiene de manos y medidas de prevención adecuadas", "Compartir mascarillas", "Evitar vacunación", "No ventilar", "Reutilizar material contaminado"],
correcta: 0,
explicacion: "La higiene de manos, ventilación, vacunación y precauciones apropiadas reducen el riesgo de transmisión de infecciones."
}
];

// Verificación del banco
if (banco.length !== 50) {
  console.error("ERROR: El banco no contiene 50 preguntas.", banco.length);
}// ======================================
// FUNCIONAMIENTO DEL EXAMEN
// ======================================

let preguntas = [];
let respuestas = {};
let posicion = 0;
let segundos = 3600;
let reloj = null;
let nombreParticipante = "Participante";
let terminado = false;

function mezclar(lista) {
  let copia = [...lista];

  for (let i = copia.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

const contenedor =
  document.querySelector(".contenedor") || document.body;

contenedor.innerHTML = `
<header>
  <h1>MedStudy Bolivia</h1>
  <p class="subtitulo">Simulador de examen médico tipo MIR</p>
</header>

<section id="inicio" class="card">
  <h2>Examen de práctica</h2>
  <p>50 preguntas médicas · 60 minutos</p>
  <label for="nombre">Nombre del participante:</label>
  <input id="nombre" type="text" placeholder="Escribe tu nombre">
  <button id="btnIniciar">Comenzar examen</button>
</section>

<section id="examen" class="card oculto">
  <div id="reloj">60:00</div>
  <p id="progreso"></p>
  <h3 id="tema"></h3>
  <h2 id="pregunta"></h2>
  <div id="opciones"></div>
  <div id="explicacion" class="oculto"></div>

  <div class="navegacion">
    <button id="btnAnterior">Anterior</button>
    <button id="btnSiguiente">Siguiente</button>
    <button id="btnFinalizar">Finalizar examen</button>
  </div>
</section>

<section id="resultado" class="card oculto">
  <h2>Resultados del examen</h2>
  <div id="resumen"></div>
  <div id="revision"></div>
  <button id="btnReiniciar">Realizar otro examen</button>
</section>

<footer>
  MedStudy Bolivia · Plataforma de práctica médica
</footer>
`;

const inicio = document.getElementById("inicio");
const examen = document.getElementById("examen");
const resultado = document.getElementById("resultado");

function iniciarExamen() {
  if (banco.length !== 50) {
    alert("Error: el banco debe tener exactamente 50 preguntas.");
    return;
  }

  nombreParticipante =
    document.getElementById("nombre").value.trim() ||
    "Participante";

  preguntas = mezclar(banco);
  respuestas = {};
  posicion = 0;
  segundos = 3600;
  terminado = false;

  inicio.classList.add("oculto");
  resultado.classList.add("oculto");
  examen.classList.remove("oculto");

  mostrarPregunta();

  clearInterval(reloj);

  reloj = setInterval(() => {
    segundos--;
    actualizarReloj();

    if (segundos <= 0) {
      entregarExamen(true);
    }
  }, 1000);

  actualizarReloj();
}

function actualizarReloj() {
  let minutos = Math.floor(segundos / 60);
  let seg = segundos % 60;

  document.getElementById("reloj").textContent =
    String(minutos).padStart(2, "0") +
    ":" +
    String(seg).padStart(2, "0");
}

function mostrarPregunta() {
  let p = preguntas[posicion];

  document.getElementById("progreso").textContent =
    "Pregunta " + (posicion + 1) + " de " + preguntas.length;

  document.getElementById("tema").textContent = p.tema;
  document.getElementById("pregunta").textContent = p.pregunta;

  const opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";

  document.getElementById("explicacion").classList.add("oculto");

  p.opciones.forEach((opcion, indice) => {
    const boton = document.createElement("button");

    boton.className = "opcion";
    boton.textContent =
      String.fromCharCode(65 + indice) + ". " + opcion;

    boton.onclick = () => seleccionarRespuesta(indice);

    opcionesDiv.appendChild(boton);
  });

  if (respuestas[posicion] !== undefined) {
    mostrarExplicacion();
  }

  document.getElementById("btnAnterior").disabled =
    posicion === 0;

  document.getElementById("btnSiguiente").disabled =
    posicion === preguntas.length - 1;
}

function seleccionarRespuesta(indice) {
  if (terminado) return;

  respuestas[posicion] = indice;

  mostrarExplicacion();
}

function mostrarExplicacion() {
  const p = preguntas[posicion];
  const seleccion = respuestas[posicion];

  const botones = document.querySelectorAll(".opcion");

  botones.forEach((boton, indice) => {
    boton.disabled = true;

    if (indice === p.correcta) {
      boton.style.background = "#dcfce7";
      boton.style.borderColor = "#16a34a";
    }

    if (indice === seleccion && indice !== p.correcta) {
      boton.style.background = "#fee2e2";
      boton.style.borderColor = "#dc2626";
    }
  });

  const explicacion = document.getElementById("explicacion");

  explicacion.classList.remove("oculto");

  explicacion.innerHTML = `
    <h3>${seleccion === p.correcta
      ? "¡Respuesta correcta!"
      : "Respuesta incorrecta"}</h3>
    <p><strong>Respuesta correcta:</strong>
    ${String.fromCharCode(65 + p.correcta)}.
    ${p.opciones[p.correcta]}</p>
    <p><strong>Explicación:</strong>
    ${p.explicacion}</p>
  `;
}

function mover(direccion) {
  if (terminado) return;

  posicion += direccion;

  if (posicion < 0) posicion = 0;

  if (posicion >= preguntas.length) {
    posicion = preguntas.length - 1;
  }

  mostrarPregunta();
}

function confirmarEntrega() {
  const sinResponder = preguntas.length -
    Object.keys(respuestas).length;

  if (sinResponder > 0) {
    const continuar = confirm(
      "Te faltan " + sinResponder +
      " preguntas por responder. ¿Quieres finalizar?"
    );

    if (!continuar) return;
  } else {
    if (!confirm("¿Estás seguro de finalizar el examen?")) {
      return;
    }
  }

  entregarExamen(false);
}

function entregarExamen(automatico = false) {
  if (terminado) return;

  terminado = true;
  clearInterval(reloj);

  let correctas = 0;
  let incorrectas = 0;
  let blancas = 0;

  preguntas.forEach((p, i) => {
    if (respuestas[i] === undefined) {
      blancas++;
    } else if (respuestas[i] === p.correcta) {
      correctas++;
    } else {
      incorrectas++;
    }
  });

  let porcentaje = (correctas / preguntas.length) * 100;

  examen.classList.add("oculto");
  resultado.classList.remove("oculto");

  document.getElementById("resumen").innerHTML = `
    <h3>Participante: ${nombreParticipante}</h3>
    <h2>Nota: ${correctas} / ${preguntas.length}</h2>
    <h2>${porcentaje.toFixed(1)}%</h2>
    <p>Correctas: ${correctas}</p>
    <p>Incorrectas: ${incorrectas}</p>
    <p>Sin responder: ${blancas}</p>
    <p>${automatico
      ? "El tiempo terminó."
      : "Examen finalizado."}</p>
  `;

  mostrarRevision();
}

function mostrarRevision() {
  const revision = document.getElementById("revision");

  revision.innerHTML = "<h3>Revisión de preguntas</h3>";

  preguntas.forEach((p, i) => {
    const seleccion = respuestas[i];

    const estado =
      seleccion === p.correcta
        ? "✅ Correcta"
        : seleccion === undefined
        ? "⬜ Sin responder"
        : "❌ Incorrecta";

    const bloque = document.createElement("div");

    bloque.className = "card";

    bloque.innerHTML = `
      <p><strong>${i + 1}. ${p.tema}</strong></p>
      <p>${p.pregunta}</p>
      <p>${estado}</p>
      <p><strong>Respuesta correcta:</strong>
      ${String.fromCharCode(65 + p.correcta)}.
      ${p.opciones[p.correcta]}</p>
      <p>${p.explicacion}</p>
    `;

    revision.appendChild(bloque);
  });
}

function reiniciar() {
  clearInterval(reloj);

  respuestas = {};
  posicion = 0;
  segundos = 3600;
  terminado = false;

  resultado.classList.add("oculto");
  examen.classList.add("oculto");
  inicio.classList.remove("oculto");

  document.getElementById("nombre").value = "";
  document.getElementById("reloj").textContent = "60:00";
}

document.getElementById("btnIniciar")
  .addEventListener("click", iniciarExamen);

document.getElementById("btnAnterior")
  .addEventListener("click", () => mover(-1));

document.getElementById("btnSiguiente")
  .addEventListener("click", () => mover(1));

document.getElementById("btnFinalizar")
  .addEventListener("click", confirmarEntrega);

document.getElementById("btnReiniciar")
  .addEventListener("click", reiniciar);

console.log("MedStudy Bolivia cargado correctamente.");
console.log("Total de preguntas:", banco.length);
