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
const coordinatorTickets = [
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
        status: "Pendiente"
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
        status: "Aprobada"
    },
    {
        id: 3,
        rut: "34.567.890-1",
        email: "maria.perez@universidad.cl",
        name: "María",
        lastname: "Pérez Silva",
        requestTypes: ["botar", "tomar"],
        curriculum: "antigua",
        subjects: ["CAL101 - Cálculo I", "ALG101 - Álgebra I"],
        situation: "Quiero botar Cálculo I porque me resulta muy difícil y tomar Álgebra I en su lugar",
        date: "17/03/2024",
        status: "Rechazada"
    },
    {
        id: 4,
        rut: "45.678.901-2",
        email: "juan.rodriguez@universidad.cl",
        name: "Juan",
        lastname: "Rodríguez Fuentes",
        requestTypes: ["cambiar"],
        curriculum: "nueva",
        subjects: ["POO101 - Programación Orientada a Objetos", "ED101 - Estructura de Datos"],
        situation: "Necesito cambiar estos ramos porque tengo conflicto de horarios con mi práctica profesional",
        date: "18/03/2024",
        status: "Pendiente"
    },
    {
        id: 5,
        rut: "56.789.012-3",
        email: "lucia.fernandez@universidad.cl",
        name: "Lucía",
        lastname: "Fernández Castro",
        requestTypes: ["tomar"],
        curriculum: "antigua",
        subjects: ["CSI101 - Curso Sello Institucional I: Inglés I"],
        situation: "Quiero adelantar este ramo para tener más disponibilidad el próximo semestre",
        date: "19/03/2024",
        status: "Aprobada con observaciones"
    },
    {
        id: 6,
        rut: "67.890.123-4",
        email: "diego.silva@universidad.cl",
        name: "Diego",
        lastname: "Silva Mendoza",
        requestTypes: ["cambiar-seccion"],
        curriculum: "nueva",
        subjects: ["MEC101 - Mecánica"],
        situation: "Necesito cambiar a la sección del profesor González por recomendación de compañeros",
        date: "20/03/2024",
        status: "Pendiente"
    },
    {
        id: 7,
        rut: "78.901.234-5",
        email: "sofia.herrera@universidad.cl",
        name: "Sofía",
        lastname: "Herrera González",
        requestTypes: ["botar"],
        curriculum: "antigua",
        subjects: ["QUI101 - Química General"],
        situation: "Me di cuenta que no necesito este ramo para mi especialización",
        date: "21/03/2024",
        status: "Aprobada"
    },
    {
        id: 8,
        rut: "89.012.345-6",
        email: "pablo.munoz@universidad.cl",
        name: "Pablo",
        lastname: "Muñoz Ríos",
        requestTypes: ["tomar", "cambiar-seccion"],
        curriculum: "nueva",
        subjects: ["ARQ101 - Arquitectura de Computadores", "ED101 - Estructura de Datos"],
        situation: "Quiero tomar estos ramos y necesito cambiar de sección para acomodar mi horario de trabajo",
        date: "22/03/2024",
        status: "Pendiente"
    }
];

// Almacenamiento de tickets del estudiante
let studentTickets = JSON.parse(localStorage.getItem('studentTickets')) || [];

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

// Elementos del coordinador
const coordinatorPendingCount = document.getElementById('coordinator-pending-count');
const totalRequests = document.getElementById('total-requests');
const pendingRequests = document.getElementById('pending-requests');
const approvedRequests = document.getElementById('approved-requests');
const rejectedRequests = document.getElementById('rejected-requests');
const filterStatus = document.getElementById('filter-status');
const filterType = document.getElementById('filter-type');
const filterCurriculum = document.getElementById('filter-curriculum');
const filterSearch = document.getElementById('filter-search');

// Inicializar la aplicación
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
    
    // Actualizar estadísticas del coordinador
    updateCoordinatorStats();
    
    // Cargar solicitudes en la tabla del coordinador
    loadCoordinatorRequests();
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
    loginStudentBtn.addEventListener('click', () => showInterface('student'));
    loginCoordinatorBtn.addEventListener('click', () => showInterface('coordinator'));
    coordinatorLogoutBtn.addEventListener('click', () => showInterface('login'));
    
    // Navegación entre páginas del estudiante
    btnNewTicket.addEventListener('click', () => showPage('new-ticket'));
    btnMyTickets.addEventListener('click', () => showPage('my-tickets'));
    
    // Envío del formulario
    ticketForm.addEventListener('submit', handleFormSubmit);
    
    // Limpiar formulario
    btnClearForm.addEventListener('click', clearForm);
    
    // Vista previa de mallas en el formulario
    curriculumRadios.forEach(radio => {
        radio.addEventListener('change', updateCurriculumPreview);
    });
    
    // Filtros del coordinador
    filterStatus.addEventListener('change', loadCoordinatorRequests);
    filterType.addEventListener('change', loadCoordinatorRequests);
    filterCurriculum.addEventListener('change', loadCoordinatorRequests);
    filterSearch.addEventListener('input', loadCoordinatorRequests);
}

// Mostrar una interfaz específica
function showInterface(interface) {
    // Ocultar todas las interfaces
    loginPage.style.display = 'none';
    studentInterface.style.display = 'none';
    coordinatorInterface.style.display = 'none';
    
    // Mostrar la interfaz seleccionada
    switch(interface) {
        case 'login':
            loginPage.style.display = 'flex';
            break;
        case 'student':
            studentInterface.style.display = 'block';
            break;
        case 'coordinator':
            coordinatorInterface.style.display = 'block';
            updateCoordinatorStats();
            loadCoordinatorRequests();
            break;
    }
}

// Mostrar una página específica del estudiante
function showPage(page) {
    // Ocultar todas las páginas
    pageNewTicket.classList.remove('active');
    pageMyTickets.classList.remove('active');
    
    // Desactivar todos los botones
    btnNewTicket.classList.remove('active');
    btnMyTickets.classList.remove('active');
    
    // Mostrar la página seleccionada
    switch(page) {
        case 'new-ticket':
            pageNewTicket.classList.add('active');
            btnNewTicket.classList.add('active');
            break;
        case 'my-tickets':
            pageMyTickets.classList.add('active');
            btnMyTickets.classList.add('active');
            displayStudentTickets();
            break;
    }
}

// Actualizar la vista previa de mallas en el formulario
function updateCurriculumPreview() {
    // Ocultar todas las vistas previas
    previewAntigua.classList.remove('active');
    previewNueva.classList.remove('active');
    
    // Obtener la malla seleccionada
    const selectedCurriculum = document.querySelector('input[name="curriculum"]:checked').value;
    
    // Mostrar la vista previa correspondiente
    if (selectedCurriculum === 'antigua') {
        previewAntigua.classList.add('active');
    } else {
        previewNueva.classList.add('active');
    }
}

// Manejar el envío del formulario
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const rut = document.getElementById('rut').value;
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    
    // Obtener tipos de solicitud seleccionados (múltiples)
    const requestTypeCheckboxes = document.querySelectorAll('input[name="request-type"]:checked');
    const requestTypes = Array.from(requestTypeCheckboxes).map(cb => cb.value);
    
    // Validar que se haya seleccionado al menos un tipo de solicitud
    if (requestTypes.length === 0) {
        alert('Debes seleccionar al menos un tipo de solicitud');
        return;
    }
    
    const curriculum = document.querySelector('input[name="curriculum"]:checked').value;
    const situation = document.getElementById('situation').value;
    
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
        requestTypes, // Ahora es un array
        curriculum,
        subjects: selectedSubjects,
        situation,
        date: new Date().toLocaleDateString('es-CL'),
        status: 'Pendiente'
    };
    
    // Agregar ticket a la lista del estudiante
    studentTickets.push(newTicket);
    
    // Guardar en localStorage (solo para el estudiante)
    localStorage.setItem('studentTickets', JSON.stringify(studentTickets));
    
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
    ticketForm.reset();
    
    // Restablecer valores por defecto
    document.getElementById('curriculum-antigua').checked = true;
    
    // Actualizar vista previa
    updateCurriculumPreview();
}

// Actualizar el contador de tickets del estudiante
function updateTicketCount() {
    ticketCount.textContent = studentTickets.length;
}

// Mostrar mensaje cuando no hay tickets del estudiante
function displayEmptyTickets() {
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
        
        // Manejar tanto requestType (antiguo) como requestTypes (nuevo)
        const requestTypes = ticket.requestTypes || [ticket.requestType];
        const requestTypesDisplay = requestTypes.map(type => requestTypeText[type]).join(', ');
        
        ticketsHTML += `
            <div class="ticket-item">
                <div class="ticket-header">
                    <div class="ticket-title">Solicitud: ${requestTypesDisplay}</div>
                    <div class="ticket-status ${statusClass[ticket.status]}">${statusText[ticket.status]}</div>
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
    const pending = coordinatorTickets.filter(ticket => ticket.status === 'Pendiente').length;
    const approved = coordinatorTickets.filter(ticket => ticket.status === 'Aprobada').length;
    const rejected = coordinatorTickets.filter(ticket => ticket.status === 'Rechazada').length;
    
    totalRequests.textContent = total;
    pendingRequests.textContent = pending;
    approvedRequests.textContent = approved;
    rejectedRequests.textContent = rejected;
    coordinatorPendingCount.textContent = pending;
}

// Cargar solicitudes en la tabla del coordinador
function loadCoordinatorRequests() {
    // Obtener la tabla cada vez que se llama a la función
    const coordinatorRequestsTable = document.getElementById('coordinator-requests-table');
    if (!coordinatorRequestsTable) {
        console.error('No se encontró la tabla de solicitudes del coordinador');
        return;
    }
    
    let filteredTickets = [...coordinatorTickets];
    
    // Aplicar filtros
    if (filterStatus.value) {
        filteredTickets = filteredTickets.filter(ticket => ticket.status === filterStatus.value);
    }
    
    if (filterType.value) {
        // Para compatibilidad con tickets antiguos y nuevos
        filteredTickets = filteredTickets.filter(ticket => {
            const requestTypes = ticket.requestTypes || [ticket.requestType];
            return requestTypes.includes(filterType.value);
        });
    }
    
    if (filterCurriculum.value) {
        filteredTickets = filteredTickets.filter(ticket => ticket.curriculum === filterCurriculum.value);
    }
    
    if (filterSearch.value) {
        const searchTerm = filterSearch.value.toLowerCase();
        filteredTickets = filteredTickets.filter(ticket => 
            ticket.name.toLowerCase().includes(searchTerm) ||
            ticket.lastname.toLowerCase().includes(searchTerm) ||
            ticket.rut.includes(searchTerm) ||
            ticket.email.toLowerCase().includes(searchTerm)
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
            
            // Manejar tanto requestType (antiguo) como requestTypes (nuevo)
            const requestTypes = ticket.requestTypes || [ticket.requestType];
            const requestTypesDisplay = requestTypes.map(type => requestTypeText[type]).join(', ');
            
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
                    <td>${ticket.rut}</td>
                    <td>
                        <div class="student-info">
                            ${ticket.name} ${ticket.lastname}
                            <div class="student-email">${ticket.email}</div>
                        </div>
                    </td>
                    <td>${curriculumText[ticket.curriculum]}</td>
                    <td>
                        ${ticket.subjects.map(subject => `<span class="subject-tag">${subject.split(' - ')[0]}</span>`).join('')}
                    </td>
                    <td>
                        <span class="request-type-tag">${requestTypesDisplay}</span>
                    </td>
                    <td>
                        <span class="${statusClass[ticket.status]}">${ticket.status}</span>
                    </td>
                    <td>${ticket.date}</td>
                    <td>
                        <div class="actions-container">
                            <button class="action-btn" onclick="viewCoordinatorTicket(${ticket.id})">Ver</button>
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
        // Manejar tanto requestType (antiguo) como requestTypes (nuevo)
        const requestTypes = ticket.requestTypes || [ticket.requestType];
        const requestTypesDisplay = requestTypes.join(', ');
        
        alert(`Detalles del ticket:\n\nEstudiante: ${ticket.name} ${ticket.lastname}\nRUT: ${ticket.rut}\nEmail: ${ticket.email}\nMalla: ${ticket.curriculum}\nTipos de solicitud: ${requestTypesDisplay}\nAsignaturas: ${ticket.subjects.join(', ')}\nSituación: ${ticket.situation}`);
    }
}

// Actualizar estado de un ticket (coordinador)
function updateCoordinatorTicketStatus(ticketId, newStatus) {
    const ticketIndex = coordinatorTickets.findIndex(t => t.id === ticketId);
    if (ticketIndex !== -1) {
        coordinatorTickets[ticketIndex].status = newStatus;
        updateCoordinatorStats();
        loadCoordinatorRequests();
    }
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', init);