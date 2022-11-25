# WebEng2 Labor - Webservices 

Belegarbeit für das Modul Web Engineering 2 Labor von 
Henry Schuler,
Lukas Braun, 
Johannes Brandenburger

## Inhalt
Ziel der Belegarbeit ist die Bereitstellung einer Applikation in einem as-a-Service-Stile.
Dafür wird die Platform Docker verwendet.

## Aufbau
Das Projekt besteht aus zwei Komponenten.
Einer Web-App (Next.js) und einer Datenbank (mariadb).
Beide Komponenten werden in einem Separaten Docker-Container betrieben ([Next](Dockerfile.nextjs-app), [mariadb](Dockerfile.mariadb)).

- In der Datenbank werden Informationen zu verschiedenen Ländern der Erde abgelegt (Name, Größe, Einwohnerzahl, ...).
- Die Next.js Applikation greift auf die Datenbank zu und zeigt deren Inhalte in Form einer Tabelle an.

Um beide Komponenten zusammen zu führen wird [Docker Compose](docker-compose.yaml) verwendet.
Darin werden beide Container gestartet und die jeweils benötigten Umgebungsvariablen, sowie nach außen zugreifbaren Ports definiert.

## Ausführen
1. Docker, bzw. Docker Compose muss installiert sein.
1. Die App wird gestartet mit dem Befehlt:

   ```console
   docker compose build
   docker compose up
   ```
1. Die App ist unter der Adresse [localhost:8081](http://localhost:8081) verfügbar.
