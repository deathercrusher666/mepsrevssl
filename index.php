<?php
// Obtener la ruta solicitada
$request = $_SERVER['REQUEST_URI'];

// Función para cargar archivos HTML
function loadPage($page) {
    include($page . '.html');
}

// Enrutador básico
switch ($request) {
    case '/':
        loadPage('index');
        break;
    case '/servicios':
        loadPage('servicios');
        break;
    default:
        http_response_code(404);
        echo "Página no encontrada";
        break;
}
?>
