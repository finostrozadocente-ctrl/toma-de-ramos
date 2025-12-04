// Datos de ejemplo para las asignaturas
const subjects = [
    "MAT101 - Introducción a las Matemáticas",
    "FIS101 - Introducción a la Física",
    "ING101 - Introducción a la Ingeniería en Computación e Informática",
    "FBVA101 - Formación Básica para la Vida Académica I",
    "CSI101 - Curso Sello Institucional I: Inglés I",
    "ALG101 - Álgebra I",
    "CAL101 - Cálculo I",
    "MEC101 - Mecánica",
    "FBVA102 - Formación Básica para la Vida Académica II",
    "CSI102 - Curso Sello Institucional II: Inglés II",
    "ALG102 - Álgebra II",
    "CAL102 - Cálculo II",
    "EM101 - Electricidad y Magnetismo",
    "PROG101 - Programación Computacional",
    "CSI103 - Curso Sello Institucional III",
    "ED101 - Ecuaciones Diferenciales",
    "CAL103 - Cálculo III",
    "OC101 - Ondas, Óptica y Calor",
    "POO101 - Programación Orientada a Objetos",
    "CSI104 - Curso Sello Institucional IV",
    "PE101 - Probabilidad y Estadística",
    "QUI101 - Química General",
    "ARQ101 - Arquitectura de Computadores",
    "ED101 - Estructura de Datos",
    "INT101 - Interdisciplinar"
];

// Datos de ejemplo para el coordinador (8 tickets predefinidos)
let coordinatorTickets = [
    {
        id: 1,
        rut: "12.345.678-9",
        email: "ana.garcia@universidad.cl",
        name: "Ana",
        lastname: "García López",
        requestTypes: ["tomar"],
        curriculum: "antigua",
        subjects: ["MAT101 - Introducción a las Matemáticas", "FIS101 - Introducción a la Física"],
        situation: "Necesito tomar estos ramos para avanzar en mi malla curricular",
        date: "15/03/2024",
        status: "Pendiente",
        comments: [
            {
                text: "Por favor verificar que el estudiante cumple con los prerequisitos para estas asignaturas.",
                date: "16/03/2024 10:30",
                author: "Coordinador"
            }
        ]
    },
    {
        id: 2,
        rut: "23.456.789-0",
        email: "carlos.martinez@universidad.cl",
        name: "Carlos",
        lastname: "Martínez Rojas",
        requestTypes: ["cambiar-seccion"],
        curriculum: "nueva",
        subjects: ["PROG101 - Programación Computacional"],
        situation: "Mi horario laboral cambió y necesito cambiar a una sección vespertina",
        date: "16/03/2024",
        status: "Aprobada",
        comments: [
            {
                text: "Estudiante asignado a la sección vespertina del profesor González.",
                date: "17/03/2024 14:20",
                author: "Coordinador"
            }
        ]
    },
    {
        id: 3,
        rut: "22.567.890-1",
        email: "maria.perez@universidad.cl",
        name: "María",
        lastname: "Pérez Silva",
        requestTypes: ["botar", "tomar"],
        curriculum: "antigua",
        subjects: ["CAL101 - Cálculo I", "ALG101 - Álgebra I"],
        situation: "Quiero botar Cálculo I porque me resulta muy difícil y tomar Álgebra I en su lugar",
        date: "17/03/2024",
        status: "Rechazada",
        comments: [
            {
                text: "No se permite botar Cálculo I sin reemplazo equivalente. Álgebra I no es equivalente.",
                date: "18/03/2024 09:15",
                author: "Coordinador"
            }
        ]
    },
    {
        id: 4,
        rut: "21.678.901-2",
        email: "juan.rodriguez@universidad.cl",
        name: "Juan",
        lastname: "Rodríguez Fuentes",
        requestTypes: ["cambiar"],
        curriculum: "nueva",
        subjects: ["POO101 - Programación Orientada a Objetos", "ED101 - Estructura de Datos"],
        situation: "Necesito cambiar estos ramos porque tengo conflicto de horarios con mi práctica profesional",
        date: "18/03/2024",
        status: "Pendiente",
        comments: []
    },
    {
        id: 5,
        rut: "19.789.012-3",
        email: "lucia.fernandez@universidad.cl",
        name: "Lucía",
        lastname: "Fernández Castro",
        requestTypes: ["tomar"],
        curriculum: "antigua",
        subjects: ["CSI101 - Curso Sello Institucional I: Inglés I"],
        situation: "Quiero adelantar este ramo para tener más disponibilidad el próximo semestre",
        date: "19/03/2024",
        status: "Aprobada con observaciones",
        comments: [
            {
                text: "Aprobado con la condición de mantener promedio superior a 5.5",
                date: "20/03/2024 11:45",
                author: "Coordinador"
            }
        ]
    },
    {
        id: 6,
        rut: "17.890.123-4",
        email: "martin.silva@universidad.cl",
        name: "Martín",
        lastname: "Silva Mendoza",
        requestTypes: ["cambiar-seccion"],
        curriculum: "nueva",
        subjects: ["MEC101 - Mecánica"],
        situation: "Necesito cambiar a la sección del profesor Cárcamo por recomendación de compañeros",
        date: "20/03/2024",
        status: "Pendiente",
        comments: []
    },
    {
        id: 7,
        rut: "18.901.234-5",
        email: "sofia.herrera@universidad.cl",
        name: "Sofía",
        lastname: "Herrera González",
        requestTypes: ["botar"],
        curriculum: "antigua",
        subjects: ["QUI101 - Química General"],
        situation: "Me di cuenta que no necesito este ramo para mi especialización",
        date: "21/03/2024",
        status: "Aprobada",
        comments: [
            {
                text: "Aprobado según reglamento de flexibilidad curricular",
                date: "22/03/2024 16:30",
                author: "Coordinador"
            }
        ]
    },
    {
        id: 8,
        rut: "19.012.345-6",
        email: "pablo.munoz@universidad.cl",
        name: "Pablo",
        lastname: "Muñoz Ríos",
        requestTypes: ["tomar", "cambiar-seccion"],
        curriculum: "nueva",
        subjects: ["ARQ101 - Arquitectura de Computadores", "ED101 - Estructura de Datos"],
        situation: "Quiero tomar estos ramos y necesito cambiar de sección para acomodar mi horario de trabajo",
        date: "22/03/2024",
        status: "Pendiente",
        comments: []
    }
];

// Almacenamiento de tickets del estudiante
let studentTickets = JSON.parse(localStorage.getItem('studentTickets')) || [];
// Almacenamiento de tickets del coordinador
let coordinatorTicketsStorage = JSON.parse(localStorage.getItem('coordinatorTickets')) || coordinatorTickets;

// Usar tickets almacenados o los predefinidos
coordinatorTickets = coordinatorTicketsStorage.length > 0 ? coordinatorTicketsStorage : coordinatorTickets;

// Elementos del DOM
const loginPage = document.getElementById('login-page');
const studentInterface = document.getElementById('student-interface');
const coordinatorInterface = document.getElementById('coordinator-interface');
const loginStudentBtn = document.getElementById('login-student');
const loginCoordinatorBtn = document.getElementById('login-coordinator');
const coordinatorLogoutBtn = document.getElementById('coordinator-logout');

// Elementos del estudiante
const btnNewTicket = document.getElementById('btn-new-ticket');
const btnMyTickets = document.getElementById('btn-my-tickets');
const ticketCount = document.getElementById('ticket-count');
const pageNewTicket = document.getElementById('page-new-ticket');
const pageMyTickets = document.getElementById('page-my-tickets');
const ticketForm = document.getElementById('ticket-form');
const btnClearForm = document.getElementById('btn-clear-form');
const subjectsList = document.querySelector('.subjects-list');
const ticketsContainer = document.getElementById('tickets-container');

// Elementos para la vista previa de mallas en el formulario
const previewAntigua = document.getElementById('preview-antigua');
const previewNueva = document.getElementById('preview-nueva');
const curriculumRadios = document.querySelectorAll('input[name="curriculum"]');

// Elementos del coordinador (fíjate que #coordinator-pending-count NO existe en tu HTML original)
// usamos los IDs que sí están en el HTML
const totalRequests = document.getElementById('total-requests');
const pendingRequests = document.getElementById('pending-requests');
const approvedRequests = document.getElementById('approved-requests');
const rejectedRequests = document.getElementById('rejected-requests');
const filterStatus = document.getElementById('filter-status');
const filterType = document.getElementById('filter-type');
const filterCurriculum = document.getElementById('filter-curriculum');
const filterSearch = document.getElementById('filter-search');

// --- Inicializar la aplicación ---
function init() {
    // Generar lista de asignaturas
    generateSubjectsList();
    
    // Actualizar contador de tickets del estudiante
    updateTicketCount();
    
    // Mostrar tickets del estudiante si existen
    if (studentTickets.length > 0) {
        displayStudentTickets();
    } else {
        displayEmptyTickets();
    }
    
    // Configurar event listeners
    setupEventListeners();
    
    // Guardar tickets iniciales del coordinador si no existen
    if (!localStorage.getItem('coordinatorTickets') || JSON.parse(localStorage.getItem('coordinatorTickets')).length === 0) {
        localStorage.setItem('coordinatorTickets', JSON.stringify(coordinatorTickets));
    }
}

// Generar la lista de asignaturas en el formulario
function generateSubjectsList() {
    subjects.forEach(subject => {
        const subjectId = subject.split(' - ')[0].toLowerCase();
        const subjectItem = document.createElement('div');
        subjectItem.className = 'subject-item';
        subjectItem.innerHTML = `
            <input type="checkbox" id="${subjectId}" value="${subject}">
            <label for="${subjectId}">${subject}</label>
        `;
        subjectsList.appendChild(subjectItem);
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Login
    if (loginStudentBtn) loginStudentBtn.addEventListener('click', () => showInterface('student'));
    if (loginCoordinatorBtn) loginCoordinatorBtn.addEventListener('click', () => showInterface('coordinator'));
    if (coordinatorLogoutBtn) coordinatorLogoutBtn.addEventListener('click', () => showInterface('login'));
    
    // Navegación entre páginas del estudiante
    if (btnNewTicket) btnNewTicket.addEventListener('click', () => showPage('new-ticket'));
    if (btnMyTickets) btnMyTickets.addEventListener('click', () => showPage('my-tickets'));
    
    // Envío del formulario
    if (ticketForm) ticketForm.addEventListener('submit', handleFormSubmit);
    
    // Limpiar formulario
    if (btnClearForm) btnClearForm.addEventListener('click', clearForm);
    
    // Vista previa de mallas en el formulario
    curriculumRadios.forEach(radio => {
        radio.addEventListener('change', updateCurriculumPreview);
    });
    
    // Filtros del coordinador
    if (filterStatus) filterStatus.addEventListener('change', loadCoordinatorRequests);
    if (filterType) filterType.addEventListener('change', loadCoordinatorRequests);
    if (filterCurriculum) filterCurriculum.addEventListener('change', loadCoordinatorRequests);
    if (filterSearch) filterSearch.addEventListener('input', loadCoordinatorRequests);
}

// Mostrar una interfaz específica
function showInterface(interfaceName) {
    // Ocultar todas las interfaces
    if (loginPage) loginPage.style.display = 'none';
    if (studentInterface) studentInterface.style.display = 'none';
    if (coordinatorInterface) coordinatorInterface.style.display = 'none';
    
    // Mostrar la interfaz seleccionada
    switch(interfaceName) {
        case 'login':
            if (loginPage) loginPage.style.display = 'flex';
            break;
        case 'student':
            if (studentInterface) studentInterface.style.display = 'block';
            break;
        case 'coordinator':
            if (coordinatorInterface) coordinatorInterface.style.display = 'block';
            // Cargar tickets del coordinador desde localStorage
            const stored = JSON.parse(localStorage.getItem('coordinatorTickets')) || [];
            if (Array.isArray(stored) && stored.length >= 0) {
                coordinatorTickets = stored.length > 0 ? stored : coordinatorTickets;
            }
            
            // Resetear filtros
            if (filterStatus) filterStatus.value = '';
            if (filterType) filterType.value = '';
            if (filterCurriculum) filterCurriculum.value = '';
            if (filterSearch) filterSearch.value = '';
            
            updateCoordinatorStats();
            loadCoordinatorRequests();
            break;
    }
}

// Mostrar una página específica del estudiante
function showPage(page) {
    // Ocultar todas las páginas
    if (pageNewTicket) pageNewTicket.classList.remove('active');
    if (pageMyTickets) pageMyTickets.classList.remove('active');
    
    // Desactivar todos los botones
    if (btnNewTicket) btnNewTicket.classList.remove('active');
    if (btnMyTickets) btnMyTickets.classList.remove('active');
    
    // Mostrar la página seleccionada
    switch(page) {
        case 'new-ticket':
            if (pageNewTicket) pageNewTicket.classList.add('active');
            if (btnNewTicket) btnNewTicket.classList.add('active');
            break;
        case 'my-tickets':
            if (pageMyTickets) pageMyTickets.classList.add('active');
            if (btnMyTickets) btnMyTickets.classList.add('active');
            displayStudentTickets();
            break;
    }
}

// Actualizar la vista previa de mallas en el formulario
function updateCurriculumPreview() {
    // Ocultar todas las vistas previas
    if (previewAntigua) previewAntigua.classList.remove('active');
    if (previewNueva) previewNueva.classList.remove('active');
    
    // Obtener la malla seleccionada
    const selected = document.querySelector('input[name="curriculum"]:checked');
    const selectedCurriculum = selected ? selected.value : 'antigua';
    
    // Mostrar la vista previa correspondiente
    if (selectedCurriculum === 'antigua') {
        if (previewAntigua) previewAntigua.classList.add('active');
    } else {
        if (previewNueva) previewNueva.classList.add('active');
    }
}

// Manejar el envío del formulario
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const rutEl = document.getElementById('rut');
    const emailEl = document.getElementById('email');
    const nameEl = document.getElementById('name');
    const lastnameEl = document.getElementById('lastname');
    
    const rut = rutEl ? rutEl.value.trim() : '';
    const email = emailEl ? emailEl.value.trim() : '';
    const name = nameEl ? nameEl.value.trim() : '';
    const lastname = lastnameEl ? lastnameEl.value.trim() : '';
    
    // Obtener tipos de solicitud seleccionados (múltiples)
    const requestTypeCheckboxes = document.querySelectorAll('input[name="request-type"]:checked');
    const requestTypes = Array.from(requestTypeCheckboxes).map(cb => cb.value);
    
    // Validar que se haya seleccionado al menos un tipo de solicitud
    if (requestTypes.length === 0) {
        alert('Debes seleccionar al menos un tipo de solicitud');
        return;
    }
    
    const curriculumEl = document.querySelector('input[name="curriculum"]:checked');
    const curriculum = curriculumEl ? curriculumEl.value : 'antigua';
    const situationEl = document.getElementById('situation');
    const situation = situationEl ? situationEl.value.trim() : '';
    
    // Obtener asignaturas seleccionadas
    const selectedSubjects = [];
    const subjectCheckboxes = document.querySelectorAll('.subjects-list input[type="checkbox"]:checked');
    subjectCheckboxes.forEach(checkbox => {
        selectedSubjects.push(checkbox.value);
    });
    
    // Validar que se hayan seleccionado asignaturas
    if (selectedSubjects.length === 0) {
        alert('Debes seleccionar al menos una asignatura');
        return;
    }
    
    // Crear nuevo ticket
    const newTicket = {
        id: Date.now(),
        rut,
        email,
        name,
        lastname,
        requestTypes,
        curriculum,
        subjects: selectedSubjects,
        situation,
        date: new Date().toLocaleDateString('es-CL'),
        status: 'Pendiente',
        comments: []
    };
    
    // Agregar ticket a la lista del estudiante
    studentTickets.push(newTicket);
    
    // Guardar en localStorage (solo para el estudiante)
    localStorage.setItem('studentTickets', JSON.stringify(studentTickets));
    
    // También agregar a la lista del coordinador
    coordinatorTickets.push(newTicket);
    localStorage.setItem('coordinatorTickets', JSON.stringify(coordinatorTickets));
    
    // Actualizar la interfaz del estudiante
    updateTicketCount();
    displayStudentTickets();
    
    // Mostrar confirmación y cambiar a la página de tickets
    alert('Ticket enviado correctamente');
    showPage('my-tickets');
    
    // Limpiar formulario
    clearForm();
}

// Limpiar el formulario
function clearForm() {
    if (ticketForm) ticketForm.reset();
    
    // Restablecer valores por defecto
    const defaultCurr = document.getElementById('curriculum-antigua');
    if (defaultCurr) defaultCurr.checked = true;
    
    // Actualizar vista previa
    updateCurriculumPreview();
}

// Actualizar el contador de tickets del estudiante
function updateTicketCount() {
    if (ticketCount) ticketCount.textContent = studentTickets.length;
}

// Mostrar mensaje cuando no hay tickets del estudiante
function displayEmptyTickets() {
    if (!ticketsContainer) return;
    ticketsContainer.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">📅</div>
            <h3 class="empty-title">No tienes tickets registrados</h3>
            <p class="empty-description">Explora los cursos disponibles y toma un ticket para inscribirte</p>
        </div>
    `;
}

// Mostrar la lista de tickets del estudiante
function displayStudentTickets() {
    if (!ticketsContainer) return;

    if (studentTickets.length === 0) {
        displayEmptyTickets();
        return;
    }
    
    let ticketsHTML = '<div class="tickets-list">';
    
    studentTickets.forEach(ticket => {
        const statusText = {
            'Pendiente': 'Pendiente',
            'Aprobada': 'Aprobada',
            'Rechazada': 'Rechazada',
            'Aprobada con observaciones': 'Aprobada con obs.'
        };
        
        const statusClass = {
            'Pendiente': 'status-pending',
            'Aprobada': 'status-approved',
            'Rechazada': 'status-rejected',
            'Aprobada con observaciones': 'status-approved'
        };
        
        const requestTypeText = {
            'tomar': 'Tomar Ramo',
            'cambiar': 'Cambiar Ramo',
            'botar': 'Botar Ramo',
            'cambiar-seccion': 'Cambiar de Sección'
        };
        
        const requestTypes = ticket.requestTypes || [];
        const requestTypesDisplay = requestTypes.map(type => requestTypeText[type] || type).join(', ');
        
        ticketsHTML += `
            <div class="ticket-item">
                <div class="ticket-header">
                    <div class="ticket-title">Solicitud: ${requestTypesDisplay}</div>
                    <div class="ticket-status ${statusClass[ticket.status] || 'status-pending'}">${statusText[ticket.status] || 'Pendiente'}</div>
                </div>
                <div class="ticket-details">
                    <div><strong>Asignaturas:</strong> ${ticket.subjects.join(', ')}</div>
                    <div><strong>Motivo:</strong> ${ticket.situation}</div>
                </div>
                <div class="ticket-footer">
                    <div>${ticket.name} ${ticket.lastname}</div>
                    <div>${ticket.date}</div>
                </div>
            </div>
        `;
    });
    
    ticketsHTML += '</div>';
    ticketsContainer.innerHTML = ticketsHTML;
}

// Actualizar estadísticas del coordinador
function updateCoordinatorStats() {
    const total = coordinatorTickets.length;
    // contar pendientes
    const pending = coordinatorTickets.filter(ticket => ticket.status === 'Pendiente').length;
    // aprobadas incluye "Aprobada" y "Aprobada con observaciones"
    const approved = coordinatorTickets.filter(ticket => ticket.status === 'Aprobada' || ticket.status === 'Aprobada con observaciones').length;
    const rejected = coordinatorTickets.filter(ticket => ticket.status === 'Rechazada').length;
    
    if (totalRequests) totalRequests.textContent = total;
    if (pendingRequests) pendingRequests.textContent = pending;
    if (approvedRequests) approvedRequests.textContent = approved;
    if (rejectedRequests) rejectedRequests.textContent = rejected;
    
    // Si en algún momento añades un elemento con id 'coordinator-pending-count', se actualizará; si no existe, lo omitimos.
    const coordinatorPendingCountEl = document.getElementById('coordinator-pending-count');
    if (coordinatorPendingCountEl) coordinatorPendingCountEl.textContent = pending;
}

// Cargar solicitudes en la tabla del coordinador
function loadCoordinatorRequests() {
    // Obtener la tabla
    const coordinatorRequestsTable = document.getElementById('coordinator-requests-table');
    if (!coordinatorRequestsTable) {
        return;
    }
    
    let filteredTickets = [...coordinatorTickets];
    
    // Aplicar filtros
    if (filterStatus && filterStatus.value) {
        filteredTickets = filteredTickets.filter(ticket => ticket.status === filterStatus.value);
    }
    
    if (filterType && filterType.value) {
        filteredTickets = filteredTickets.filter(ticket => {
            const requestTypes = ticket.requestTypes || [];
            return requestTypes.includes(filterType.value);
        });
    }
    
    if (filterCurriculum && filterCurriculum.value) {
        filteredTickets = filteredTickets.filter(ticket => ticket.curriculum === filterCurriculum.value);
    }
    
    if (filterSearch && filterSearch.value) {
        const searchTerm = filterSearch.value.toLowerCase();
        filteredTickets = filteredTickets.filter(ticket => 
            (ticket.name && ticket.name.toLowerCase().includes(searchTerm)) ||
            (ticket.lastname && ticket.lastname.toLowerCase().includes(searchTerm)) ||
            (ticket.rut && ticket.rut.toLowerCase().includes(searchTerm)) ||
            (ticket.email && ticket.email.toLowerCase().includes(searchTerm))
        );
    }
    
    // Generar tabla
    let tableHTML = '';
    
    if (filteredTickets.length === 0) {
        tableHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 20px;">
                    No se encontraron solicitudes que coincidan con los filtros
                </td>
            </tr>
        `;
    } else {
        filteredTickets.forEach(ticket => {
            const requestTypeText = {
                'tomar': 'Tomar ramos',
                'cambiar': 'Cambiar ramos',
                'botar': 'Botar un ramo',
                'cambiar-seccion': 'Cambiar de sección'
            };
            
            const requestTypes = ticket.requestTypes || [];
            const requestTypesDisplay = requestTypes.map(type => requestTypeText[type] || type).join(', ');
            
            const curriculumText = {
                'antigua': 'IC05',
                'nueva': 'IC07'
            };
            
            const statusClass = {
                'Pendiente': 'status-tag status-pending-coord',
                'Aprobada': 'status-tag status-approved-coord',
                'Rechazada': 'status-tag status-rejected-coord',
                'Aprobada con observaciones': 'status-tag status-approved-coord'
            };
            
            tableHTML += `
                <tr>
                    <td>${ticket.rut || ''}</td>
                    <td>
                        <div class="student-info">
                            ${ticket.name || ''} ${ticket.lastname || ''}
                            <div class="student-email">${ticket.email || ''}</div>
                        </div>
                    </td>
                    <td>${curriculumText[ticket.curriculum] || ticket.curriculum || ''}</td>
                    <td>
                        ${ticket.subjects ? ticket.subjects.map(subject => `<span class="subject-tag">${subject.split(' - ')[0]}</span>`).join('') : ''}
                    </td>
                    <td>
                        <span class="request-type-tag">${requestTypesDisplay}</span>
                    </td>
                    <td>
                        <span class="${statusClass[ticket.status] || 'status-tag status-pending-coord'}">${ticket.status}</span>
                    </td>
                    <td>${ticket.date || ''}</td>
                    <td>
                        <div class="actions-container">
                            <button class="action-btn" onclick="viewCoordinatorTicket(${ticket.id})">Ver</button>
                            <button class="action-btn" onclick="addCommentToTicket(${ticket.id})" style="background-color: #3b82f6; color: white;">Comentar</button>
                            <select class="action-select" onchange="updateCoordinatorTicketStatus(${ticket.id}, this.value)">
                                <option value="Pendiente" ${ticket.status === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
                                <option value="Aprobada" ${ticket.status === 'Aprobada' ? 'selected' : ''}>Aprobada</option>
                                <option value="Rechazada" ${ticket.status === 'Rechazada' ? 'selected' : ''}>Rechazada</option>
                                <option value="Aprobada con observaciones" ${ticket.status === 'Aprobada con observaciones' ? 'selected' : ''}>Aprobada con obs.</option>
                            </select>
                        </div>
                    </td>
                </tr>
            `;
        });
    }
    
    coordinatorRequestsTable.innerHTML = tableHTML;
}

// Ver detalles de un ticket (coordinador)
function viewCoordinatorTicket(ticketId) {
    const ticket = coordinatorTickets.find(t => t.id === ticketId);
    if (ticket) {
        const requestTypes = ticket.requestTypes || [];
        const requestTypesDisplay = requestTypes.join(', ');
        
        let commentsText = 'No hay comentarios';
        if (ticket.comments && ticket.comments.length > 0) {
            commentsText = ticket.comments.map(comment => 
                `${comment.date} - ${comment.author}:\n${comment.text}`
            ).join('\n\n');
        }
        
        alert(`DETALLES DEL TICKET:\n\n` +
              `Estudiante: ${ticket.name} ${ticket.lastname}\n` +
              `RUT: ${ticket.rut}\n` +
              `Email: ${ticket.email}\n` +
              `Malla: ${ticket.curriculum}\n` +
              `Tipos de solicitud: ${requestTypesDisplay}\n` +
              `Asignaturas: ${ticket.subjects ? ticket.subjects.join(', ') : ''}\n` +
              `Situación: ${ticket.situation}\n\n` +
              `COMENTARIOS:\n${commentsText}`);
    }
}

// Agregar comentario a un ticket (coordinador)
function addCommentToTicket(ticketId) {
    const ticketIndex = coordinatorTickets.findIndex(t => t.id === ticketId);
    if (ticketIndex !== -1) {
        const comment = prompt('Ingresa tu comentario para este ticket:');
        if (comment !== null && comment.trim() !== '') {
            // Agregar comentario al ticket
            if (!coordinatorTickets[ticketIndex].comments) {
                coordinatorTickets[ticketIndex].comments = [];
            }
            coordinatorTickets[ticketIndex].comments.push({
                text: comment.trim(),
                date: new Date().toLocaleString('es-CL'),
                author: 'Coordinador'
            });
            
            // Guardar en localStorage
            localStorage.setItem('coordinatorTickets', JSON.stringify(coordinatorTickets));
            
            // Actualizar la interfaz
            loadCoordinatorRequests();
            alert('Comentario agregado correctamente');
        }
    }
}

// Actualizar estado de un ticket (coordinador)
function updateCoordinatorTicketStatus(ticketId, newStatus) {
    try {
        const ticketIndex = coordinatorTickets.findIndex(t => t.id === ticketId);
        if (ticketIndex !== -1) {
            // Actualizar estado
            coordinatorTickets[ticketIndex].status = newStatus;
            
            // Guardar en localStorage
            localStorage.setItem('coordinatorTickets', JSON.stringify(coordinatorTickets));
            
            // Actualizar estadísticas y tabla
            updateCoordinatorStats();
            loadCoordinatorRequests();
            
            alert(`Estado del ticket actualizado a: ${newStatus}`);
        }
    } catch (err) {
        console.error('Error al actualizar estado del ticket:', err);
        alert('Ocurrió un error al actualizar el estado. Revisa la consola.');
    }
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', init);
