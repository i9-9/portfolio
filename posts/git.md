---
title: "GIT"
subtitle: "My notes on the version control system"
date: "09/22/2022"
---

# GIT

Repositories → overall changes of a project

Timeline of the entire project

Local repositories

directories → repos in their current state in time. 

Push and pull from Github

git init iniciar repo

git add . agrega todo al staging

git commit -m “comment”

git checkout ID (ir a un commit viejo)

git checkout master (volver al ahora)

git log (ver los commits)

git revert ID (para volver) [se puede hacer hacer revert de un revert, porque un REVERT es un nuevo commit]

git reset —hard ID (hard reset para volver a un commit y quedarse ahi)

git log —oneline (log en 1 sola linea por commit)

touch .gitignore (crear gitignore)

gitignore→

con # Se pueden hacer comentarios

Autogen/*  significa que va a ignorar todos los files dentro de la carpeta autogen 

**git rm -f removes the file from the working directory**

## Branches

siempre hacer un comit inicial antes de crear un branch

git checkout -b dev(cambia y crea la branch dev)

git checkout master (volvemos a la branch inicial/master)

git branch bugs (crea nueva branch llamada bugs)

list branches → git branch -a (a es por ALL)

delete a branch → git branch -d bugs 

MERGE

Pararse sobre el branch master (o el branch al que se mergeará el otro branch)

git merge dev

### **Getting & Creating Projects**

[Untitled](https://www.notion.so/9a5f24e72982488dadb0c5714b220758)

### **Basic Snapshotting**

[Untitled](https://www.notion.so/0d7f2298b0f448718ee9227d0a2dabda)

### **Branching & Merging**

[Untitled](https://www.notion.so/5c04eb55077148148c13728f6e305781)

### **Sharing & Updating Projects**

[Untitled](https://www.notion.so/a2993d79c0894d1d984ffedf82ec3a0d)

### **Inspection & Comparison**

[Untitled](https://www.notion.so/f18c925e1d21471995178dcd078f7c74)