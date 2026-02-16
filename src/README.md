# Term Suggester

Un moteur de suggestions de termes écrit en **TypeScript**.  
Il retourne les mots les plus proches d’un terme donné selon :

1. Nombre de lettres à remplacer pour correspondre (moins il y a de changements, mieux c’est)
2. Proximité de longueur avec le terme recherché
3. Tri alphabétique en cas d’égalité

---

## ⚡ Fonctionnalités

- Comparaison sur **la meilleure sous-chaîne possible** pour chaque mot
- Filtrage automatique des mots trop courts ou totalement différents
- Limitation du nombre de suggestions (`maxResults`)
- Facilement extensible et testable

---

## 🛠 Installation

1. Cloner le dépôt

```bash
git clone <URL_DU_REPO>
cd term-suggester
```
