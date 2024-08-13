# Emails

## Général
- Gmail ne supporte pas les svg, il faudra mettre le(s) logo(s) en png (pour le moment le logo Second Chapitre est hebergé sur imgbb mais juste pour une semaine)
- Lisa devra travailler sur des logos visibles en light et dark mode pour cart_validation

## Variables manquantes : 

### cart_validation.html
- {{store.name}}
- {{store.street}}
- {{store.zipcode}}
- {{store.city}}
- {{cart_number}} (x2)
- boucle {% for book in books %} ... {% endfor %} 
- {{book.title}}
- {{book.price}}
- {{total_price}} total du cart
- {{end_validity_date}} fin de validité de la reprise

### Email_verify.html
- {{ verification_link }} lien vers la confirmation d'email

### order_validation.html
- {{voucher.code}} (x2)
- {{voucher.amount}} 
- {{store.name}}
- {{voucher.expired_at}}

### forgot_password.html
- {{ reset_password_link }}

**Valentine** : Disclaimers.

# Pages

Le dossier `[finished]pages` contient les extraits de code qui ont vocation à trouver leur place dans le `@RenderBody()`, sans les headers etc.

Ne pas oublier de récupérer le CSS dans `css/app.css`.

## CGUA

Attention aux deux lignes de JS éditées dans le script. Elles sont marquées par des `FIXME: edited JS`.
J'ai également mis à jour la doc du tableau d'informations.

