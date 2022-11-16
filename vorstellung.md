# WebServices Vorstellung
Lukas
- Kurze Vorstellung der Website und der Datenbank (npm run dev).
- Zeigen der Datenbank in phpmyadmin
- Bereitstellen der app als PAAS bzw. als ein Harmonie MEHRERER Docker Container

Johannes
- Next Dockerfile erstellt das Image für die Website

Henry
- DB Dockerfile erstellt Image für MariaDb Server und fügt die Datenbank hinzu die in der .sql Datei spezifiziert wird.
- Docker Compose besteht aus den Images DB --> Datenbank und Nexjs-app --> Website, das Docker Compose File startet die 2 Images und gibt Environment variablen an.
